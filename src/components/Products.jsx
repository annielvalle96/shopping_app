import './Products.css'
import { AddToCartIcon, RemoveFromCartIcon } from './Icons.jsx'
import { useCart } from '../hooks/useCart.js'

export function Products ({ products }) {
  const { addToCart, checkIsProductInCart, removeFromCart } = useCart()

  return (
    <main className='products'>
      <ul>
        {/* Lista los primeros 10 Productos. */}
        {products.slice(0, 10).map(product => {
          const isProductInCart = checkIsProductInCart(product)
          return (
            <li key={product.id}>
              <img src={product.thumbnail} alt={product.title} />
              <div>
                <strong>{product.title}</strong> - ${product.price}
              </div>
              <div>
                <button
                  style={{ backgroundColor: isProductInCart ? 'red' : '#09F' }}
                  onClick={() => { isProductInCart ? removeFromCart(product) : addToCart(product) }}
                >
                  {
                    isProductInCart
                      ? <RemoveFromCartIcon />
                      : <AddToCartIcon />
                  }
                </button>
              </div>
            </li>
          )
        })}
      </ul>
    </main>
  )
}
