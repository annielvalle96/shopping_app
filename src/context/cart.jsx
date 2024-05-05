import { createContext } from 'react'
import { useCartReducer } from '../hooks/useCartReducer.js'

// Crear el contexto.
export const CartContext = createContext()

// Este nos provee de acceso al contexto.
export function CartProvider ({ children }) {
  const { state, addToCart, removeFromCart, clearCart } = useCartReducer()

  return (
    <CartContext.Provider value={{
      cart: state,
      addToCart,
      clearCart,
      removeFromCart
    }}
    >
      {children}
    </CartContext.Provider>
  )
}
