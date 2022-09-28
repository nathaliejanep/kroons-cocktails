import './Nav.scss';
import cocktailLogo from '../../assets/images/cocktail-logo-small.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBars,
  faCartShopping,
  faXmark,
} from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

const Nav = () => {
  // State för att öppna hamburger nav
  const [openNav, setOpenNav] = useState(false);

  return (
    <header className="Nav">
      <nav className="navbar">
        <a href="/" className="navbar__brandname">
          Kroons Cocktails
        </a>

        <img src={cocktailLogo} alt="logo" className="navbar__logo" />

        {/* Ändrar class, mobil nav meny styrs via css */}
        <div className={openNav ? 'navbar__menu expanded' : 'navbar__menu'}>
          {openNav ? (
            <button className="navbar__menu-x">
              <FontAwesomeIcon
                icon={faXmark}
                onClick={() => {
                  setOpenNav(!openNav);
                }}
              />
            </button>
          ) : (
            ''
          )}
          <ul>
            <li>
              <a href="#products">Produkter</a>
            </li>
            <li>
              <a href="#about">Om</a>
            </li>
            <li>
              <a href="#contact">Kontakt</a>
            </li>
            <li>
              <img
                src={cocktailLogo}
                alt="logo"
                className="navbar__menu-logo"
              />
            </li>
          </ul>
        </div>

        <div className="navbar__icons">
          <button>
            <FontAwesomeIcon icon={faCartShopping} color="black" />
          </button>
          <button>
            <FontAwesomeIcon
              icon={faBars}
              color="black"
              onClick={() => {
                setOpenNav(!openNav);
              }}
              className="navbar__icons-burger"
            />
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
