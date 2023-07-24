import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

import { CartInventory } from "./components"

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <CartInventory>
        <App/>
    </CartInventory>
  </React.StrictMode>,
)
