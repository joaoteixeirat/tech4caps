import { useState } from 'react';
import CustomLink from '../CustomLink/CustomLink';
import StyledNavbar from './StyledNavbar';

const Navbar = () => {

  const [ ativa, setAtiva ] = useState(false);

  return (
    <StyledNavbar ativa={ativa}>
      <span onClick={() => setAtiva(prev => !prev)}>
        {
          ativa ? <i className="fa-solid fa-xmark"></i> : <i className="fa-solid fa-bars"></i>
        }
      </span>

      {
        !ativa ? null : (

          <div>
            <span>
              <i className="fa-solid fa-bag-shopping"></i>
              <CustomLink to={'/vitrine'} title={'Vitrine'} />
            </span>

            <span>
              <i className="fa-solid fa-phone"></i>
              <CustomLink to={'/contato'} title={'Contato'} />
            </span>
            <span>
              <i className="fa-solid fa-info"></i>
              <CustomLink to={'/sobre'} title={'Sobre'} />
            </span>
          </div>
        )
      }
    </StyledNavbar>
  );
};

export default Navbar;