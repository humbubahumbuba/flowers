import { FC, useEffect, useState } from 'react';
import './hero-section.scss';
import { Flower, flowersApi } from '@/entities/flower';

export const HeroSection: FC = () => {
  const [flowers, setSetFlowers] = useState<Flower[]>([]);

  const fetchFlowers = async () => {
    setSetFlowers(await flowersApi.getFlowers());
  };

  useEffect(() => {
    fetchFlowers();
  }, []);

  return (
    <section className="hero-section">
      <div className="container">
        <h1 className="hero-section__title">
          Kyiv
          <br />
          LuxeBouquets<sup>®</sup>
        </h1>
        <p className="hero-section__description">
          Discover Uniquely Crafted Bouquets and Gifts for Any Ocassion: Spread
          Joy with Our Online Flower Delivery Service
        </p>
        <div className="separator"></div>
        <div className="hero-section__footer">
          <div className="hero-section__image-wrapper">
            <img
              src="https://images.unsplash.com/photo-1509719662282-b82bed65a96b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3750&q=80"
              alt="Flower"
              className="hero-section__image"
            />
          </div>
          <div className="hero-section__footer-description">
            Experience the joy of giving with our modern floral studio. Order
            online and send fresh flowers, plants and gifts today.
          </div>
        </div>
      </div>
      <div className="hero-section__products">
        {flowers.map((flower) => (
          <div key={flower.common_name} className="hero-section__product">
            <div className="hero-section__product-info">
              <h2 className="hero-section__product-title j-product-title">
                {flower.common_name}
              </h2>
              <button type="button" className="hero-section__shop-button">
                <svg width="24" height="24">
                  <use href="/icons/sprite.svg#icon-arrow-left"></use>
                </svg>
                Shop now
              </button>
            </div>
            <img
              src={flower.cover_image}
              alt="Flower"
              className="hero-section__product-image j-product-image"
            />
          </div>
        ))}
      </div>
    </section>
  );
};
