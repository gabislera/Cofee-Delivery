import { Minus, Plus, ShoppingCart, Trash } from '@phosphor-icons/react'
import { useCart } from '../../hooks/useCart'
import { AddButton, AddToCartQtdContainer, RemoveButton } from './styles'
import { CartProps } from '../../contexts/cartContext'

interface CartProduct {
  data: CartProps
  isCart?: boolean
  onIncrease?: () => void
  onDecrease?: () => void
  quantity: number
}

export function AddToCartQtd({ data, isCart, onIncrease, onDecrease, quantity }: CartProduct) {
  const { addToCart, removeFromCart } = useCart()

  function handleAddToCart() {
    if (quantity > 0) {
      const productWithQty = {
        ...data,
        quantity
      };
      addToCart(productWithQty);
    }
  }

  function handleRemoveFromCart() {
    removeFromCart(data)
  }

  return (
    <AddToCartQtdContainer>
      <div>
        <button type="button" onClick={onDecrease}><Minus size={14} /></button>
        <span>{quantity}</span>
        <button type="button" onClick={onIncrease}><Plus size={14} /></button>
      </div>

      {
        isCart ? (
          <RemoveButton type="button" onClick={handleRemoveFromCart}>
            <Trash size={16} />
            <span>REMOVER</span>
          </RemoveButton>
        ) :
          (
            <AddButton type="button" disabled={quantity === 0} onClick={handleAddToCart}>
              <ShoppingCart size={22} weight='fill' />
            </AddButton>
          )
      }
    </AddToCartQtdContainer>
  )
}