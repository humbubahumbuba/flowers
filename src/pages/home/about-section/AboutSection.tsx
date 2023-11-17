import { FC } from 'react';
import './about-section.scss';
import { AButton } from '@/shared/components';

export const AboutSection: FC = () => {
  return (
    <section className="about-section">
      <div className="container">
        <h2 className="about-section__title">About us</h2>
      </div>
      <div className="about-section__description container">
        <p className="about-section__description-story">our story</p>
        <h2 className="about-section__description-header">Kyiv LuxeBouquets</h2>
        <p className="about-section__description-text">
          We are a modern local floral studio, which specializes in the design
          and delivery of unique bouquets. We have the best florists who
          carefully select each look, our studio cooperates directly with farms
          for growing different flowers, so we always have fresh flowers, which
          are collected by our florists in exquisite bouquets. We have a
          collection of fresh bouquets, collections of dried bouquets, house
          plants, as well as fragrant candles from luxury brands to create the
          perfect atmosphere. Make someone's day amazing by sending flowers,
          plants and gifts the same or next day. Ordering flowers online has
          never been easier.
        </p>

        <AButton type="submit" variant="ghost" width="custom">
          Learn More
        </AButton>
      </div>
    </section>
  );
};
