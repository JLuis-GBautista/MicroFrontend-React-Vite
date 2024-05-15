import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter, Routes } from 'react-router-dom'
const routesClient1 = App();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
        <Routes>
          {routesClient1}
        </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
