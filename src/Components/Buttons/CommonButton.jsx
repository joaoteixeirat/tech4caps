import styled from "@emotion/styled";

const StyledButton = styled.button`

  all: unset;
  background-color: green;
  padding: 10px 50px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.5s ease;

  &:hover{

    background-color: #008000b5;
  }
`

const CommonButton = ({text}) => {

  return (

    <StyledButton>
      {text}
    </StyledButton>
  )
}

export default CommonButton;