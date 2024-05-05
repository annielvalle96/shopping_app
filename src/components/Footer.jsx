// import { useCart } from '../hooks/useCart.js'
import { useFilters } from '../hooks/useFilters.js'
import './Footer.css'

export function Footer () {
  // Custom Hook useFilters, el cual tiene la vía de consumir el Contexto.
  const { filters } = useFilters()
  // Custom Hook useCart, el cual tiene la vía de consumir el Contexto.
  // const { cart } = useCart()

  return (
    <footer className='footer'>
      <h4>Technical test of React ⚛️ － <span>@the.twin.96</span></h4>
      <h5>Shopping Cart with useContext & useReducer</h5>
      <p>Selected filters</p>
      {
        JSON.stringify(filters, null, 2)
      }
      {/* <p>Cart items</p>
      {
        JSON.stringify(cart, null, 2)
      } */}
    </footer>
  )
}
