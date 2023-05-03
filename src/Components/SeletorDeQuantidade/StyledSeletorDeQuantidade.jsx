import styled from "@emotion/styled";

const StyledSeletorDeQuantidade = styled.div`

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
    width: 20px;
    text-align: center;
  }
`

export default StyledSeletorDeQuantidade;