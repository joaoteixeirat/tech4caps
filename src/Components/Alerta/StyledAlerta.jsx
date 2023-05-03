import styled from "styled-components";

const StyledAlerta = styled.div`

  width: 300px;
  height: 50px;
  position: absolute;
  top: ${props => props.visivel ? "100px" : "-500px"};
  font-size: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  background-color: ${({variante}) => variante == 'sucesso' ? 'green' : 'darkorange'};
  border-radius: 5px;
  transition: top 0.5s ease;

  i{

    font-size: 20px;
  }

`

export default StyledAlerta;