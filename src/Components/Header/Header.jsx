import StyledHeader from './StyledHeader';
import CustomLink from '../CustomLink/CustomLink';
import IconButton from '../Buttons/IconButton';
import { Link } from 'react-router-dom';

const Header = () => {

  return (
    <StyledHeader>
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
    </StyledHeader>
  );
};

export default Header;