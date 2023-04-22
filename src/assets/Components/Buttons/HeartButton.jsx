import styled from "styled-components";

const HeartButtonStyled = styled.div.attrs({role : 'button'})`

  width: 50px;
  height: 50px;
  display: grid;
  place-content: center;
  font-size: 20px;
  cursor: pointer;
  z-index: 1;
  transition: transform 0.4s ease;

  &:hover{

    transform: scale(1.1);
  }
`

const HeartButton = (props) => {

  return(
    <HeartButtonStyled>
      <i className="fa-regular fa-heart"></i>
    </HeartButtonStyled>
  )
}

export default HeartButton;