import styled from "@emotion/styled";

const ContatoContainer = styled.div`

  font-family: Arial, Helvetica, sans-serif;
  width: 100vw;
  height: calc(100vh - 100px);
  background-color: rgba(22, 21, 21, 1);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap-reverse;
  gap: 100px;
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

  .info-endereco, .info-endereco > section, form{

    display: flex;
    align-items: start;
    justify-content: center;
    flex-direction: column;
    gap: 15px;
  }

  .info-endereco > h1 {

    font-size: 48px;
    margin-bottom: 20px;

    i{
      color: tomato;
    }
  }

  .info-endereco > section{

    flex-direction: row;
    font-size: 24px;
    margin-top: 20px;

    a{

      all: unset;
    }

    i{

      cursor: pointer;
      transition: transform 0.3s ease;
      &:hover{

        transform: translateY(-3px);
      }
    }
  }

  form{

    p{
      align-self: start;
    }
    
    input, textarea{

      padding: 10px;
      min-width: 300px;
      max-width: 400px;
    }
  }
`

export default ContatoContainer;