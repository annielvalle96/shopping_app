import { useContext } from 'react'
import { CartContext } from '../context/cart.jsx'

export function useCart () {
  // Consumir el contexto.
  const { cart, addToCart, clearCart, removeFromCart } = useContext(CartContext)

  // Una bueas práctica es revisar si lo que devulve el contexto está definido.
  if (cart === undefined) {
    throw new Error('useCart must be used within a cartProvider')
  }

  const checkIsProductInCart = product => {
    return cart.some(item => item.id === product.id)
  }

  return { cart, addToCart, clearCart, checkIsProductInCart, removeFromCart }
}
