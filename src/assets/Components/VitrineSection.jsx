import styled from "styled-components";

const SectionStyled = styled.section`

  width: 100vw;
  height: calc(100vh - 100px);
  background-color: rgba(22, 21, 21, 1);
  display: flex;
  align-items: end;
  justify-content: center;
`

const VitrineSection = ({children}) => {

  return(

    <SectionStyled>
      {children}
    </SectionStyled>
  )
}

export default VitrineSection;