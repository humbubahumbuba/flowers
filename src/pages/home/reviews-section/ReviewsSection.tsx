import { FC } from 'react';
import './reviews-section';


export const ReviewsSection: FC = () => {
    return (
         <section className="reviews-section container">
      <div className="reviews-section__review-block">
        <svg width="77" height="28">
          <use href="/icons/sprite.svg#google"></use>
        </svg>
        <p className="reviews-section__text">Reviews</p>
        <h2 className="reviews-section__header">Our Clients say</h2>
      </div>

      <div className="swiper j-swiper">
        <div className="swiper-wrapper">
          <div className="swiper-slide">
            <div className="reviews-section__slide">
              <p className="reviews-section__slide-text">
                “Ordered flowers online and they were the best bouquet!
                Impressed everyone around. Highly recommend this flower shop!”
              </p>
              <p className="reviews-section__slide-reviewer">– Ronald Richards</p>
            </div>
          </div>
          <div className="swiper-slide">
            <div className="reviews-section__slide">
              <p className="reviews-section__slide-text">
                “Ordered flowers online and they were the best bouquet!
                Impressed everyone around. Highly recommend this flower shop!”
              </p>
              <p className="reviews-section__slide-reviewer">– Ronald Richards</p>
            </div>
          </div>
          <div className="swiper-slide">
            <div className="reviews-section__slide">
              <p className="reviews-section__slide-text">
                “Ordered flowers online and they were the best bouquet!
                Impressed everyone around. Highly recommend this flower shop!”
              </p>
              <p className="reviews-section__slide-reviewer">– Ronald Richards</p>
            </div>
          </div>
        </div>
        <div className="swiper-pagination"></div>
        <div className="swiper-button-prev"></div>
        <div className="swiper-button-next"></div>
      </div>
      <button
        type="button"
        className="button button--secondary reviews-section__button uppercase"
      >
        Read Reviews
      </button>
    </section>
    )
}