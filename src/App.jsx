import { Outlet } from "react-router-dom"
import { injectGlobal } from "@emotion/css";

import Header from "./Components/Header/Header"

injectGlobal`
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
      <Header />
      <Outlet />
    </>
  )
}

export default App;