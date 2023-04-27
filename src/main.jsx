import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import App from './assets/routes/App'
import Home from './assets/routes/Home'
import Vitrine from './assets/routes/Vitrine'
import Detalhes from './assets/routes/Detalhes'
import Contato from './assets/routes/Contato'

import './index.css'


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
        path: '/detalhes/:id',
        element: <Detalhes />
      },
      {
        path: '/contato',
        element: <Contato />
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
