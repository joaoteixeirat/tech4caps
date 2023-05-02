import { Outlet } from "react-router-dom"
import { createGlobalStyle } from "styled-components";

import Header from "./Components/Header/Header"

const GlobalStyle = createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  body{
    overflow-x: hidden;
    background-color: rgba(22, 21, 21, 1);
  }
`

function App(){

  return(
    <>
      <GlobalStyle />
      <Header />
      <Outlet />
    </>
  )
}

export default App;