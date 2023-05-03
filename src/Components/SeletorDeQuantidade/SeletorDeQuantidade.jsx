import { useState } from "react"
import StyledSeletorDeQuantidade from "./StyledSeletorDeQuantidade";

const SeletorDeQuantidade = ({min, max}) => {

  const [ quantidade, setQuantidade ] = useState(min);

  function incrementar() {
    
    if(quantidade < max) setQuantidade(prev => prev + 1);
  }

  function diminuir() {
    
    if(quantidade > min) setQuantidade(prev => prev - 1);
  }

  return (
    <StyledSeletorDeQuantidade>
      <button onClick={diminuir}>
        <i className="fa-solid fa-minus"></i>
      </button>

      <input type="text" value={quantidade} disabled/>

      <button onClick={incrementar}>
        <i className="fa-solid fa-plus"></i>
      </button>
    </StyledSeletorDeQuantidade>
  )
}

export default SeletorDeQuantidade;