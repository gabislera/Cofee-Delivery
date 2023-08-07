import { SelectedProductCard } from "../SelectedProductCard";
import { ConfirmSection, SelectedProductsContainer, SelectedProductsSection } from "./styles";

export function SelectedProducts() {
  return (
    <SelectedProductsContainer>
      <h1>Cafés selecionados</h1>

      <SelectedProductsSection>
        <SelectedProductCard />
        <SelectedProductCard />

        <ConfirmSection>
          <div>
            <span>Total de itens</span>
            <strong>R$ 29,70</strong>
          </div>
          <div>
            <span>Entrega</span>
            <strong>R$ 3,50</strong>
          </div>
          <div>
            <h2>Total</h2>
            <h2>R$ 33,20</h2>
          </div>

          <button type="submit">CONFIRMAR PEDIDO</button>
        </ConfirmSection>

      </SelectedProductsSection>
    </SelectedProductsContainer>
  )
}