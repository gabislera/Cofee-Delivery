import logo from '../../assets/logo.svg'
import { MapPin, ShoppingCart } from '@phosphor-icons/react'
import { CartButton, HeaderContainer, LocationContainer } from './styles'
import { NavLink } from 'react-router-dom'
import { useCart } from '../../hooks/useCart'

export function Header() {
  const { cart } = useCart()
  const cartQuantity = cart.length

  return (
    <HeaderContainer>
      <NavLink to='/'>
        <img src={logo} alt="" />
      </NavLink>

      <nav>
        <LocationContainer>
          <MapPin size={22} weight="fill" />
          <span>Porto Alegre, RS</span>
        </LocationContainer>
        <NavLink to="/Checkout" title="checkout">

          <CartButton>
            {cartQuantity >= 1 && <span>{cartQuantity}</span>}
            <ShoppingCart size={22} weight="fill" />
          </CartButton>

        </NavLink>
      </nav>
    </HeaderContainer>
  )
}
