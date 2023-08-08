import { ReactNode, createContext, useState } from "react";

interface CartProviderProps {
  children: ReactNode
}

interface Tags {
  name: string
}
export interface ProductProps {
  id: number
  name: string
  description: string
  category: string
  price: number
  image: string
  ingredients?: Tags[]
}

export interface CartProps extends ProductProps {
  quantity: number
}

interface CartContextProps {
  cart: CartProps[]
  addToCart: (product: CartProps) => void
  removeFromCart: (product: CartProps) => void
  changeQtyCart: (product: CartProps, type: String) => void
}

export const CartContext = createContext({} as CartContextProps)

export function CartProvider({ children }: CartProviderProps) {
  const [cart, setCart] = useState<CartProps[]>([])

  function addToCart(product: CartProps) {
    const existingProductIndex = cart.findIndex(item => item.id === product.id)

    if (existingProductIndex < 0) {
      setCart(prev => [...prev, product])
    } else {
      const updatedCart = cart.map((item, index) => {
        if (index === existingProductIndex) {
          return { ...item, quantity: item.quantity + product.quantity }
        }
        return item
      })
      setCart(updatedCart)
    }
  }

  function removeFromCart(product: CartProps) {
    const updatedCart = cart.filter(({ id }) => id !== product.id)
    setCart(updatedCart)
  }

  function changeQtyCart(product: ProductProps, type: String) {
    if (type === 'increase') {
      console.log('aumentou')
      const updatedCart = cart.map((item) => {
        if (item.id === product.id) {
          return { ...item, quantity: item.quantity + 1 }
        }
        return item
      })
      setCart(updatedCart)
    }

    if (type === 'decrease') {
      console.log('diminuiu')
      const updatedCart = cart.map((item) => {
        if (item.id === product.id) {
          return { ...item, quantity: item.quantity - 1 }
        }
        return item
      })
      setCart(updatedCart)
    }
    // const productQuantityFilter = cart.filter(item => item.id === product.id)
    // setProductQuantity(productQuantityFilter)
  }
  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, changeQtyCart }}>
      {children}
    </CartContext.Provider>
  )
}
