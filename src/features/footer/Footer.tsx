import { FC } from 'react';
import './footer.scss';
import { AButton } from '@/shared/components';

export const Footer: FC = () => {
  return (
    <footer className="footer">
      <div className="footer__block">
        <p className="footer__info-text">
          Remember to offer beautiful flowers from Kyiv LuxeBouquets Valentines
          Day, Mothers Day, Christmas... Reminds you 7 days before. No spam or
          sharing your address
        </p>
        <form className="footer__form">
          <input type="text" className="input footer__input" />
          <AButton type="submit">Remind</AButton>
        </form>
      </div>
      <div className="footer__block">
        <h2 className="footer__title">Contact Us</h2>
        <ul>
          <li className="footer__info-nav">
            <p className="footer__nav-description">Address</p>
            <a href="#" className="footer__info-contact-link">
              15/4 Khreshchatyk Street, Kyiv
            </a>
          </li>
          <li className="footer__info-nav">
            <p className="footer__nav-description">Phone</p>
            <a href="#" className="footer__info-contact-link">
              +380980099777
            </a>
          </li>
          <li className="footer__info-nav">
            <p className="footer__nav-description">General Enquiry:</p>
            <a href="#" className="footer__info-contact-link">
              Kiev.Florist.Studio@gmail.com
            </a>
          </li>
        </ul>
        <h2 className="footer__title">Follow Us</h2>
        <div className="footer__social-link-icon-wrapper">
          <div>
            <a className="footer__social-link-icon" href="#">
              <svg width="24" height="24">
                <use href="/icons/social-link-icon.svg#icon-instagram"></use>
              </svg>
            </a>
          </div>
          <div>
            <a className="footer__social-link-icon" href="#">
              <svg width="24" height="24">
                <use href="/icons/social-link-icon.svg#icon-pinterest"></use>
              </svg>
            </a>
          </div>
          <div>
            <a className="footer__social-link-icon" href="#">
              <svg width="24" height="24">
                <use href="/icons/social-link-icon.svg#icon-facebook"></use>
              </svg>
            </a>
          </div>
          <div>
            <a className="footer__social-link-icon" href="#">
              <svg width="24" height="24">
                <use href="/icons/social-link-icon.svg#icon-twitter"></use>
              </svg>
            </a>
          </div>
          <div>
            <a className="footer__social-link-icon" href="#">
              <svg width="24" height="24">
                <use href="/icons/social-link-icon.svg#icon-telegram"></use>
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div className="footer__block">
        <h2 className="footer__title">Shop</h2>
        <div className="footer__info-block">
          <a href="#" className="footer__info-nav-link">
            All Products
          </a>
          <a href="#" className="footer__info-nav-link">
            Fresh Flowers
          </a>
          <a href="#" className="footer__info-nav-link">
            Dried Flowers
          </a>
          <a href="#" className="footer__info-nav-link">
            Live Plants
          </a>
          <a href="#" className="footer__info-nav-link">
            Designer Vases
          </a>
          <a href="#" className="footer__info-nav-link">
            Aroma Candles
          </a>
          <a href="#" className="footer__info-nav-link">
            Freshener Diffuser
          </a>
        </div>
        <h2 className="footer__title">Services</h2>
        <div className="footer__info-block">
          <a href="#" className="footer__info-nav-link">
            Flower Subcription
          </a>
          <a href="#" className="footer__info-nav-link">
            Wedding & Event Decor
          </a>
        </div>
      </div>
      <div className="footer__block">
        <h2 className="footer__title">About Us</h2>
        <div className="footer__info-block">
          <a href="#" className="footer__info-nav-link">
            Our story
          </a>
          <a href="#" className="footer__info-nav-link">
            Blog
          </a>
        </div>
        <div className="footer__info-block">
          <a href="#" className="footer__info-nav-link">
            Shipping & returns
          </a>
          <a href="#" className="footer__info-nav-link">
            Terms & conditions
          </a>
          <a href="#" className="footer__info-nav-link">
            Privacy policy
          </a>
        </div>
      </div>
    </footer>
  );
};
