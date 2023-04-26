import styled from 'styled-components';
import CustomLink from './CustomLink';
import IconButton from './Buttons/IconButton';
import { Link } from 'react-router-dom';

const HeaderStyled = styled.header`

  width: 100vw;
  height: 100px;
  box-shadow: 2px 2px 4px rgba(22, 21, 21, 1);
  background-color: rgb(22, 19, 20);
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 50px;
  position: relative;

  div, section {
    display: flex;
    justify-content: start;
    align-items: center;
    gap: 30px;
    width: 30%;
    height: 100%;
    font-family: 'Courier New', Courier, monospace;
  }

  section {

    justify-content: end;
    width: 10%;
    gap: 5px;
  }

  h1 {

    position: absolute;
    width: 100%;
    left: 0;
    text-align: center;
    z-index: 0;
    font-family: 'Courier New', Courier, monospace;

    a {
      color: white;
      text-decoration: none;
    }
  }
`

const Header = () => {

  return (

    <HeaderStyled>
      <div>
        <CustomLink to={'/vitrine'} title={'Vitrine'} />
        <CustomLink to={'/contato'} title={'Contato'} />
        <CustomLink to={'/sobre'} title={'Sobre'} />
      </div>

      <h1>
        <Link to={'/'}>
          tech4caps
        </Link>
      </h1>

      <section>
        <IconButton variant={'heart'} />
        <IconButton variant={'cart'} />
      </section>
    </HeaderStyled>
  );
};

export default Header;