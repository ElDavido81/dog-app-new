import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css'
import App from './App.jsx'
import { createHashRouter, RouterProvider } from 'react-router'
import Catalog from './pages/Catalog.jsx'
import Dog from './pages/Dog.jsx'


const router = createHashRouter([
  {
    path: "/",
    Component: App,
  },
  {
    path: "/catalog",
    Component: Catalog,
  },
  {
    path: "/dog/:selecteddog",
    Component: Dog,
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
<RouterProvider router={router} />
  </StrictMode>,
)
