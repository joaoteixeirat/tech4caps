import styled from "@emotion/styled";

const VitrineContainer = styled.div`

  width: 100vw;
  height: calc(100vh - 100px);
  background-color: rgba(22, 21, 21, 1);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px;
  flex-wrap: wrap;
  padding: 40px;
  overflow-y: auto;
  
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
`

export default VitrineContainer;