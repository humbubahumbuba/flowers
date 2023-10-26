import { FC } from 'react';
import './navbar.scss';

export const Navbar: FC = () => {
  return (
    <nav className="navbar">
      <div className="navbar__block">
        <a href="#!" className="navbar__link">
          Shop
        </a>
        <a href="#!" className="navbar__link">
          Contact
        </a>
      </div>
      <div className="navbar__block">
        <a href="#!" className="navbar__link">
          Sign In
        </a>
        <a href="#!" className="navbar__link">
          Cart
        </a>
      </div>
    </nav>
  );
};
