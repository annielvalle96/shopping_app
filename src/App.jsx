import './App.css'
import { products as initialProducts } from './mocks/products.json'
import { Products } from './components/Products.jsx'
import { useState } from 'react'
import { Header } from './components/Header.jsx'
import { Footer } from './components/Footer.jsx'
import { useFilters } from './hooks/useFilters.js'
import { Cart } from './components/Cart'
import { CartProvider } from './context/cart.jsx'

function App () {
  const [products] = useState(initialProducts)
  // Custom Hook useFilters, el cual tiene la vía de consumir el Contexto.
  const { filterProducts } = useFilters()

  return (
    <>
      {/* Necesitamos envolver los componentes que necesitan usar el contexto de Cart. */}
      <CartProvider>
        <Header />
        <Cart />
        <Products products={filterProducts(products)} />
        <Footer />
      </CartProvider>
    </>
  )
}
export default App
