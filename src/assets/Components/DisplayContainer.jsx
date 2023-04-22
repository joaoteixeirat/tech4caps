import styled from "styled-components";

const ContainerStyled = styled.div`

  width: 200vw;
  height: calc(100vh - 100px);
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  margin-left: -${props => props.scroll}vw;
  transition: margin 2s ease;
`

const DisplayContainer = ({ children, scroll }) => {

  return (

    <ContainerStyled scroll={scroll}>
      {children}
    </ContainerStyled>
  )
}

export default DisplayContainer;