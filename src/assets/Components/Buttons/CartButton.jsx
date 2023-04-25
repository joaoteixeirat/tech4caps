import styled from "styled-components";

const CartButtonStyled = styled.div.attrs({role : 'button'})`

  width: 50px;
  height: 50px;
  display: grid;
  place-content: center;
  font-size: 20px;
  cursor: pointer;
  z-index: 1;
`

const CartButton = (props) => {

  return(
    <CartButtonStyled>
      <i className="fa-solid fa-cart-shopping"></i>
    </CartButtonStyled>
  )
}

export default CartButton;