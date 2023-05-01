import styled from "styled-components";

const AdminContainer = styled.div`

  font-family: Arial, Helvetica, sans-serif;
  width: 100vw;
  height: calc(100vh - 100px);
  background-color: rgba(22, 21, 21, 1);
  display: flex;
  align-items: center;
  justify-content: start;
  flex-direction: column;
  gap: 20px;
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
  
  div{

    width: 95vw;
    max-width: 800px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 30px;
    border: 1px solid rgba(56, 56, 56, 0.22);
    box-shadow: 5px 5px 5px 0px rgba(0, 0, 0, 0.400);

    .info-msg{

      font-size: 20px;
      font-weight: 600;

      span{

        font-weight: normal;
      }
    }
  }

`

export default AdminContainer;