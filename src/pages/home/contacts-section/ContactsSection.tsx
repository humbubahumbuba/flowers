import { FC } from 'react';
import './contacts-section.scss';
import { AButton } from '@/shared/components';

export const ContactsSection: FC = () => {
  return (
    <section className="contacts-section">
      <div className="contacts-section__wrapper">
        <div className="container">
          <h2 className="contacts-section__title">To Contact Us</h2>
          <p className="contacts-section__form-text">We will call you back</p>
          <form className="contacts-section__form">
            <input
              className="input contacts-section__input"
              type="tel"
              name="phone"
              required
              placeholder="+380XXXXXXXXX"
            />
            <AButton type="submit">Book a call</AButton>
          </form>
        </div>

        <div className="contacts-section__contacts">
          <div className="contacts-section__contact-block">
            <h3 className="contacts-section__contacts-title">Phone</h3>
            <div className="contacts-section__contact-wrapper">
              <span className="contacts-section__contacts-item bold">
                <svg
                  className="contact-section__call-icon"
                  width="24"
                  height="24"
                >
                  <use href="/icons/sprite.svg#icon-call"></use>
                </svg>
                +380980099777
              </span>
              <span className="contacts-section__contacts-item bold">
                <svg
                  className="contact-section__call-icon"
                  width="24"
                  height="24"
                >
                  <use href="/icons/sprite.svg#icon-call"></use>
                </svg>
                +380980099111
              </span>
            </div>
          </div>
          <div className="contacts-section__contact-block">
            <h3 className="contacts-section__contacts-title">Address</h3>
            <div className="contacts-section__contact-wrapper">
              <span className="contacts-section__contacts-item touppercase">
                opening hours: 8 to 11 p.m.
              </span>
              <span className="contacts-section__contacts-item bold">
                <svg width="24" height="24">
                  <use href="/icons/sprite.svg#icon-pin-drop"></use>
                </svg>
                15/4 Khreshchatyk Street, Kyiv
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="contacts-section__about">
        <img
          className="contacts-section__image"
          src="/images/flower-entrance.jpg"
          alt="Shop entrance"
        />
        <div className="contacts-section__social">
          <div className="contacts-section__social-wrapper">
            <div className="contacts-section__social-text">Follow us</div>
          </div>
          <div className="contacts-section__social-wrapper">
            <div className="contacts-section__social-links">
              <a className="contacts-section__social-link" href="#">
                <svg width="24" height="24">
                  <use href="/icons/social-link-icon.svg#icon-instagram"></use>
                </svg>
              </a>
              <a className="contacts-section__social-link" href="#">
                <svg width="24" height="24">
                  <use href="/icons/social-link-icon.svg#icon-pinterest"></use>
                </svg>
              </a>
              <a className="contacts-section__social-link" href="#">
                <svg width="24" height="24">
                  <use href="/icons/social-link-icon.svg#icon-facebook"></use>
                </svg>
              </a>
              <a className="contacts-section__social-link" href="#">
                <svg width="24" height="24">
                  <use href="/icons/social-link-icon.svg#icon-twitter"></use>
                </svg>
              </a>
              <a className="contacts-section__social-link" href="#">
                <svg width="24" height="24">
                  <use href="/icons/social-link-icon.svg#icon-telegram"></use>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
