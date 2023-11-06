import { FC } from 'react';
import './service-section.scss';

export const ServiceSection: FC = () => {
  return (
    <section className="service-section">
      <div>
        <h2 className="service-section__header">Our Services</h2>
      </div>
      <div className="service-section__layout">
        <div className="service-section__image-wrapper">
          <img
            className="service-section__image"
            src="/images/flowwr-subs.jpg"
            alt="flower shop entrance"
          />
        </div>
        <div className="container service-section__wrapper">
          <span className="service-section__subtitle touppercase">Service</span>
          <h3 className="service-section__title">Flower Subscriptions</h3>
          <p className="service-section__description">
            Experience the convenience and savings of regular flower deliveries
            with our flexible subscription service - up to 30% more profitable
            than one-time purchases.
          </p>
          <button type="submit" className="button button--secondary">
            Subscribe Now
          </button>
        </div>
      </div>
      <div className="service-section__service">
        <div className="container service-section__wrapper service-section__wrapper--light">
          <span className="service-section__subtitle touppercase">Service</span>
          <h3 className="service-section__title">Wedding & Event Decor</h3>
          <p className="service-section__description">
            Let our team of expert florists and designers create stunning,
            on-trend floral décor for your special day. Trust us to bring your
            vision to life.
          </p>
          <button type="submit" className="button button--tertiary">
            Inquire Now
          </button>
        </div>
      </div>
    </section>
  );
};
