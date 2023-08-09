import { ReactNode, createContext, useEffect, useState } from "react";
import { orderFormData } from "../pages/Checkout";

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
  price: string
  image: string
  ingredients?: Tags[]
}

export interface CartProps extends ProductProps {
  quantity: number
}

interface UserCart {
  data: orderFormData
  cart: CartProps[]
}

interface CartContextProps {
  cart: CartProps[]
  userOrder: UserCart
  addToCart: (product: CartProps) => void
  removeFromCart: (product: CartProps) => void
  changeQtyCart: (product: CartProps, type: String) => void
  clearCart: () => void
  addUserOrder: (userCart: UserCart) => void
}

export const CartContext = createContext({} as CartContextProps)

const initialValue: UserCart = {
  cart: [],
  data: {
    number: '',
    cep: '',
    street: '',
    complement: '',
    district: '',
    city: '',
    uf: '',
    paymentMethod: "money"
  }
}

const CART_STORAGE_KEY = 'CofeeDelivery:cart'

function getCart() {
  const storageCartItems = localStorage.getItem(CART_STORAGE_KEY)
  if (typeof storageCartItems === 'string') {
    return JSON.parse(storageCartItems) ?? []
  }
  return []
}

const storageCart = getCart()

export function CartProvider({ children }: CartProviderProps) {
  const [cart, setCart] = useState<CartProps[]>(storageCart)
  const [userOrder, setUserOrder] = useState<UserCart>(initialValue)

  function addUserOrder(userCart: UserCart) {
    setUserOrder(userCart)
  }

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

  function changeQtyCart(product: ProductProps, type: String) {
    const updatedCart = cart.map((item) => {
      if (item.id === product.id) {
        const quantityUpdated = type === 'increase' ? (item.quantity + 1) : (item.quantity - 1);
        return { ...item, quantity: quantityUpdated };
      }
      return item;
    });
    setCart(updatedCart);
  }

  function removeFromCart(product: CartProps) {
    const updatedCart = cart.filter(({ id }) => id !== product.id)
    setCart(updatedCart)
  }

  function clearCart() {
    setCart([])
  }

  useEffect(() => {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart))
  }, [cart])

  return (
    <CartContext.Provider value={{ cart, userOrder, addToCart, removeFromCart, changeQtyCart, clearCart, addUserOrder }}>
      {children}
    </CartContext.Provider>
  )
}
