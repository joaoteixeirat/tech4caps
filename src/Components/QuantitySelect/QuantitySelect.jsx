import { useState } from "react"
import StyledQuantitySelect from "./StyledQuantitySelect";

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