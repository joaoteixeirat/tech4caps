import { useState } from "react"
import styled from "styled-components"

const StyledQuantitySelect = styled.div`

  display: flex;
  gap: 5px;

  button{

    all: unset;
    padding: 5px 10px;
    border-radius: 5px;
    cursor: pointer;
    font-size: 8px;
    border: 1px solid transparent;
    transition: border 0.3s ease;

    &:hover{

      border: 1px solid white;
    }
  }
  
  input{
    
    all: unset;
    padding: 5px 10px;
    font-size: 16px;
    width: 10px;
    text-align: center;
  }

`

const QuantitySelect = ({min, max}) => {

  const [ quantity, setQuantity ] = useState(min);

  function increaseValue() {
    
    if(quantity < max) setQuantity(prev => prev + 1);
  }

  function decreaseValue() {
    
    if(quantity > min) setQuantity(prev => prev - 1);
  }

  return (
    <StyledQuantitySelect>
      <button onClick={decreaseValue}>
        <i className="fa-solid fa-minus"></i>
      </button>

      <input type="text" value={quantity} disabled/>

      <button onClick={increaseValue}>
        <i className="fa-solid fa-plus"></i>
      </button>
    </StyledQuantitySelect>
  )
}

export default QuantitySelect;