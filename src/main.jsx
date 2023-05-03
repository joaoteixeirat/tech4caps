import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import App from './App'
import Home from './routes/Home/Home'
import Vitrine from './routes/Vitrine/Vitrine'
import Detalhes from './routes/Detalhes/Detalhes'
import Contato from './routes/Contato/Contato'
import Sobre from './routes/Sobre/Sobre'
import Admin from './routes/Admin/Admin'
import Erro from './routes/Erro/Erro'

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
          <Route path='/admin' element={<Admin />} />
          <Route path='*' element={<Erro />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
