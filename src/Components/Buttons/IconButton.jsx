import styled from "styled-components";

const CartButton = styled.button`

  all: unset;
  width: 50px;
  aspect-ratio: 1;
  display: grid;
  place-content: center;
  font-size: 20px;
  cursor: pointer;
  z-index: 1;
`

const HeartButton = styled(CartButton)`

  width: 30px;
  transition: color 0.4s ease;
  &:hover{ color: ${({$detail}) => $detail ? 'rgb(215, 25, 32)' : 'white'} }
`

const IconButton = ({variant, ...props}) => {

  const Button = {

    cart : (
      <CartButton {...props}>
        <i className="fa-solid fa-cart-shopping"></i>
      </CartButton>
    ),

    heart : (
      <HeartButton {...props}>
        <i className="fa-solid fa-heart"></i>
      </HeartButton>
    )
  }

  return Button[variant];
}

export default IconButton;