import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './assets/routes/App'
import Home from './assets/routes/Home'
import Vitrine from './assets/routes/Vitrine'
import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Detalhes from './assets/routes/Detalhes'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/vitrine',
        element: <Vitrine />
      },
      {
        path: '/detalhes',
        element: <Detalhes />
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
