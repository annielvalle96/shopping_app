import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { FiltersProvider } from './context/filters.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  // Necesitamos envolver toda la app para que cada uno de los
  // componentes tenga acceso a la acción de filtrar.
  <FiltersProvider>
    <App />
  </FiltersProvider>
)
