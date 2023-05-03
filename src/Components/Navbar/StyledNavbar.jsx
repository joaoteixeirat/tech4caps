import styled from "@emotion/styled";

const StyledNavbar = styled.nav`

  width: 200px;
  height: 100vh;
  padding: 35px 20px;
  gap: 60px;
  background-color: ${props => props.ativa ? "rgb(22, 19, 20)" : "transparent"};
  color: white;
  display: flex;
  justify-content: start;
  align-items: center;
  flex-direction: column;
  position: absolute;
  z-index: 5;
  top: 0;
  left: ${props => props.ativa ? 0 : -130}px;
  transition: all 0.5s ease;

  & > span{

    width: 100%;
    font-size: 24px;
    cursor: pointer;
    z-index: 2;
    position: relative;
    text-align: end;
  }
  
  div {
    font-family: 'Courier New', Courier, monospace;
    display: flex;
    justify-content: start;
    align-items: center;
    flex-direction: column;
    gap: 30px;
    width: 100%;
    
    
    span{
      
      width: 100%;
      display: flex;
      justify-content: start;
      align-items: center;
      gap: 10px;

      i{

        width: 20px;
        text-align: center;
      }
    }
  }
`

export default StyledNavbar;