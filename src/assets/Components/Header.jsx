import styled from 'styled-components';

const HeaderStyled = styled.header`

  width: 100vw;
  height: 100px;
  border: 1px solid rgba(22, 21, 21, 1);
  display: grid;
  place-content: center;
  box-shadow: 2px 2px 4px rgba(22, 21, 21, 1);
  background-color: rgb(22, 19, 20);
  color: white;
`

const Header = (props) => {

  return(

    <HeaderStyled>
      <h1>tech4caps</h1>
    </HeaderStyled>
  );
};

export default Header;