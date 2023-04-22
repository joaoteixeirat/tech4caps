import styled from "styled-components";

const BannerStyled = styled.div`

  width: 100vw;
  height: calc(100vh - 100px);
  background-color: rgba(22, 21, 21, 1);
  display: flex;
  align-items: flex-end;
  justify-content: center;
  background-image: url('/banner.jpeg');
  background-position: bottom;
  background-size: auto 100%;
  background-repeat: no-repeat;
`

const Banner = ({children}) => {

  return(

    <BannerStyled>
      {children}
    </BannerStyled>
  )
}

export default Banner;