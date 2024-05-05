import { useId } from 'react'
import './Filters.css'
import { useFilters } from '../hooks/useFilters.js'

export function Filters () {
  const minPriceFilterId = useId()
  const categoryFilterId = useId()
  // Custom Hook useFilters, el cual tiene la vía de consumir el Contexto.
  const { filters, setFilters } = useFilters()

  const handleChangeMinPrice = (event) => {
    const priceValue = event.target.value
    setFilters(prevState => ({
      ...prevState,
      minPrice: priceValue
    }))
  }

  const handleChangeCategory = (event) => {
    const categoryValue = event.target.value
    setFilters(prevState => ({
      ...prevState,
      category: categoryValue
    }))
  }

  return (
    <section className='filters'>
      <div>
        <label htmlFor={minPriceFilterId}>Price above</label>
        <input type='range' id={minPriceFilterId} min='0' max='1000' value={filters.minPrice} onChange={handleChangeMinPrice} />
        <span>${filters.minPrice}</span>
      </div>
      <div>
        <label htmlFor={categoryFilterId}>Category</label>
        <select id={categoryFilterId} onChange={handleChangeCategory}>
          <option value='all'>All</option>
          <option value='laptops'>Laptops</option>
          <option value='smartphones'>Smartphones</option>
        </select>
      </div>
    </section>
  )
}
