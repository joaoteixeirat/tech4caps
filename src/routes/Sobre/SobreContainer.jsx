import styled from "@emotion/styled";

const SobreContainer = styled.div`

  font-family: Arial, Helvetica, sans-serif;
  width: 100vw;
  height: calc(100vh - 100px);
  background-color: rgba(22, 21, 21, 1);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 50px;
  color: white;
  overflow-y: auto;
  padding: 50px;

  &::-webkit-scrollbar{
    width: 10px;
  }

  &::-webkit-scrollbar-track{

    background: #747474;
    border-radius: 5px;
  }

  &::-webkit-scrollbar-thumb{

    background: #eeeeee;
    border-radius: 5px;
  }

  .profile{

    min-width: 350px;
    aspect-ratio: 1;
    background-image: url('/profile.jpg');
    background-position: center;
    background-size: cover;
    border-radius: 50%;
  }

  .description{

    width: 60%;
    max-width: 800px;
    min-width: 350px;
    line-height: 25px;
  }

  .learned-techs{

    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;

    img{
      width: 50px;
    }
  }
`

export default SobreContainer;