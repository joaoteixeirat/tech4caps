import styled from "styled-components";

const HeartButtonStyled = styled.div.attrs({role : 'button'})`

  width: 30px;
  height: 30px;
  display: grid;
  place-content: center;
  font-size: ${props => props.$circle ? '14px' : '20px'};
  cursor: pointer;
  z-index: 1;
  transition: transform 0.4s ease;
  border: ${props => props.$circle ? '1px solid white' : 'none'};
  border-radius: 50%;
  transition: background-color 0.4s ease;

  &:hover{

    background-color: ${props => props.$circle ? 'rgb(215, 25, 32)' : 'none'};
  }
`

const HeartButton = (props) => {

  return(
    <HeartButtonStyled {...props}>
      <i className="fa-regular fa-heart"></i>
    </HeartButtonStyled>
  )
}

export default HeartButton;