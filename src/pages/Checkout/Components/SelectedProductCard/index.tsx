import { DetailsSection, SelectedProductContainer } from "./styles";
import { api } from "../../../../services/api";
import { AddToCartQtd } from "../../../../components/AddToCartQtd";
import { CartProps } from '../../../../contexts/cartContext'
import { useState } from "react";
import { useCart } from "../../../../hooks/useCart";

interface CartProduct {
  data: CartProps
}

export function SelectedProductCard({ data }: CartProduct) {
  const imageUrl = `${api.defaults.baseURL}/files/${data.image}`
  const [quantity, setQuantity] = useState<number>(0)
  const { changeQtyCart } = useCart()

  function handleIncreaseQty() {
    changeQtyCart(data, 'increase')
  }

  function handleDecreaseQty() {
    changeQtyCart(data, 'decrease')
  }

  return (
    <SelectedProductContainer>
      <div>
        <img src={imageUrl} alt="" />
        <DetailsSection>
          <strong>{data.name}</strong>

          <AddToCartQtd data={data} isCart onIncrease={handleIncreaseQty} onDecrease={handleDecreaseQty} quantity={data.quantity} />
        </DetailsSection>
      </div>

      <strong>{data.price}</strong>
    </SelectedProductContainer>
  )
}