import { useCart } from "../../../../hooks/useCart";
import { SelectedProductCard } from "../SelectedProductCard";
import { ConfirmSection, SelectedProductsContainer, SelectedProductsSection } from "./styles";

export function SelectedProducts() {
  const { cart } = useCart()
  const deliveryPrice = 3.50

  const totalPrice = cart.reduce((acc, item) => {
    const quantity = item.quantity
    const price = parseFloat(item.price.replace(',', '.'))

    return acc + (price * quantity)
  }, 0)

  function formatMoney(value: number) {
    const formated = value.toLocaleString('pt-BR', {
      minimumFractionDigits: 2,
    })
    return formated
  }

  const formattedTotalItemsPrice = formatMoney(totalPrice)
  const formattedDeliveryPrice = formatMoney(deliveryPrice)
  const formattedTotalPrice = formatMoney(totalPrice + deliveryPrice)

  return (
    <SelectedProductsContainer>
      <h1>Cafés selecionados</h1>

      <SelectedProductsSection>
        {
          cart.map((product, index) => <SelectedProductCard key={index} data={product} />) // key = id
        }

        <ConfirmSection>
          <div>
            <span>Total de itens</span>
            <strong>R$ {formattedTotalItemsPrice}</strong>
          </div>
          <div>
            <span>Entrega</span>
            <strong>R$ {formattedDeliveryPrice}</strong>
          </div>
          <div>
            <h2>Total</h2>
            <h2>R$ {formattedTotalPrice}</h2>
          </div>

          <button type="submit">CONFIRMAR PEDIDO</button>
        </ConfirmSection>
      </SelectedProductsSection>
    </SelectedProductsContainer>
  )
}