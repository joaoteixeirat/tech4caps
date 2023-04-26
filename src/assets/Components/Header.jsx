import styled from 'styled-components';
import Link from './Link';
import IconButton from './Buttons/IconButton';

const HeaderStyled = styled.header`

  width: 100vw;
  height: 100px;
  border: 1px solid rgba(22, 21, 21, 1);
  display: grid;
  place-content: center;
  box-shadow: 2px 2px 4px rgba(22, 21, 21, 1);
  background-color: rgb(22, 19, 20);
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 50px;
  position: relative;
`

const ContainerLink = styled.div`

  display: flex;
  justify-content: start;
  align-items: center;
  gap: 30px;
  width: 30%;
  height: 100%;
  font-family: 'Courier New', Courier, monospace;
`

const ContainerButtons = styled.div`

  display: flex;
  justify-content: end;
  align-items: center;
  width: 10%;
  height: 100%;
`

const Title = styled.h1`

  position: absolute;
  width: 100%;
  left: 0;
  text-align: center;
  z-index: 0;
  font-family: 'Courier New', Courier, monospace;
`

const Header = (props) => {

  return (

    <HeaderStyled>
      
      <ContainerLink>
        <Link href={'#'} title={'Newsletter'} />
        <Link href={'#'} title={'Contato'} />
        <Link href={'#'} title={'Sobre'} />
      </ContainerLink>

      <Title>tech4caps</Title>

      <ContainerButtons>
        <IconButton variant={'heart'}/>
        <IconButton variant={'cart'}/>
      </ContainerButtons>

    </HeaderStyled>
  );
};

export default Header;