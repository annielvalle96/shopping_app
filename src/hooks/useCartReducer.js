import { useReducer } from 'react'

// Estado inicial.
// Cargar los datos locales.
const cartInitialState = JSON.parse(window.localStorage.getItem('cart')) || []

// Actualizar los datos del carrito en el almacenamiento local.
const updateLocalStorage = state => {
  window.localStorage.setItem('cart', JSON.stringify(state))
}
// Declaración del Reducer.
const cartReducer = (state, action) => {
  // En el type: hay que pasar el string para identificar cuál es la acción que tiene que hacer.
  // En el payload: hay que pasar todo el objeto que necesitamos para actualizar el estado.
  const { type: actionType, payload: actionPayload } = action
  switch (actionType) {
    case 'ADD_TO_CART': {
      // Obtener el id del objeto que debe actualizar el estado.
      const { id } = actionPayload
      // Chequear si el producto está ya en el carrito.
      const productInCartIndex = state.findIndex(item => item.id === id)
      if (productInCartIndex >= 0) {
        // La función structuredClone hace copias profundas de los arrays y los objetos.
        // const newCart = structuredClone(state) // forma lenta de hacerlo.
        // newCart[productInCartIndex].quantity += 1

        // Forma más rápida de modificar el objeto ya existente en el array de objetos.
        const newCart = [
          ...state.slice(0, productInCartIndex),
          {
            ...state[productInCartIndex],
            quantity: state[productInCartIndex].quantity + 1
          },
          ...state.slice(productInCartIndex + 1)
        ]
        // Antes de retornar, actualizar el localStorage.
        updateLocalStorage(newCart)
        // Hay que devolver el nuevo estado con el nuevo producto.
        return newCart
      }
      const newCart = [
        ...state,
        {
          ...actionPayload, // producto.
          quantity: 1
        }
      ]
      // Antes de retornar, actualizar el localStorage.
      updateLocalStorage(newCart)
      return newCart
    }
    case 'REMOVE_FROM_CART': {
      // Obtener el id del objeto que debe debemos eliminar del estado.
      const { id } = actionPayload
      const newCart = state.filter(item => item.id !== id)
      // Antes de retornar, actualizar el localStorage.
      updateLocalStorage(newCart)
      // Devolver el estado sin el producto que se eliminó.
      return newCart
    }
    case 'CLEAR_CART': {
      // Antes de retornar, actualizar el localStorage.
      updateLocalStorage([])
      // Devolver el estado inicial, el cual es vacío.
      return []
    }
  }

  return state
}

export function useCartReducer () {
  // Usando el hook useReducer.
  // Argumentos: el reducer y el estado inicial.
  // Parámetros: el estado y el dispatch (función encargada de enviar las acciones a reducer).
  const [state, dispatch] = useReducer(cartReducer, cartInitialState)

  // Llamada de los métodos.
  const addToCart = product => dispatch({
    type: 'ADD_TO_CART',
    payload: product
  })
  const removeFromCart = product => dispatch({
    type: 'REMOVE_FROM_CART',
    payload: product
  })
  const clearCart = () => dispatch({
    type: 'CLEAR_CART'
  })

  return { state, addToCart, removeFromCart, clearCart }
}
