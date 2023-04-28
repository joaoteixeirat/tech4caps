import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import App from './assets/routes/App'
import Home from './assets/routes/Home'
import Vitrine from './assets/routes/Vitrine'
import Detalhes from './assets/routes/Detalhes'
import Contato from './assets/routes/Contato'
import Sobre from './assets/routes/Sobre'

import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} >
          <Route path='/' element={<Home />} />
          <Route path='/contato' element={<Contato />} />
          <Route path='/sobre' element={<Sobre />} />
          <Route path='/vitrine' element={<Vitrine />} />
          <Route path='/vitrine'>
            <Route path='/vitrine/detalhes/:id' element={<Detalhes />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
