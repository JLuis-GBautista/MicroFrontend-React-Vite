import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter, Routes } from 'react-router-dom'
const routesClient2 = App();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Routes>
      {routesClient2}
    </Routes>
  </BrowserRouter>
)
