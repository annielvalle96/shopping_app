import { createContext, useState } from 'react'

// 1. Crear el Contexto.
// Este es el contexto a consumir.
export const FiltersContext = createContext()

// 2. Crear el Provider, para proveer el contexto.
// Este nos provee de acceso al contexto.
export function FiltersProvider ({ children }) {
  // Creando el estado del contexto. El estado global, ya que este contexto será dinámico.
  const [filters, setFilters] = useState({ category: 'all', minPrice: 0 })

  return (
    <FiltersContext.Provider value={{
      filters,
      setFilters
    }}
    >
      {children}
    </FiltersContext.Provider>
  )
}
