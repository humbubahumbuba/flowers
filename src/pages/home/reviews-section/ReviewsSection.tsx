import { FC } from 'react';
import './reviews-section.scss';
import { Swiper } from '@/shared/components/Swiper';
import { SwiperSlide } from 'swiper/react';
import { AButton } from '@/shared/components';

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
      <Swiper>
        <>
          <SwiperSlide>
            <div className="reviews-section__slide">
              <p className="reviews-section__slide-text">
                “Ordered flowers online and they were the best bouquet!
                Impressed everyone around. Highly recommend this flower shop!”
              </p>
              <p className="reviews-section__slide-reviewer">
                – Ronald Richards
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="reviews-section__slide">
              <p className="reviews-section__slide-text">
                “Ordered flowers online and they were the best bouquet!
                Impressed everyone around. Highly recommend this flower shop!”
              </p>
              <p className="reviews-section__slide-reviewer">
                – Ronald Richards
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="reviews-section__slide">
              <p className="reviews-section__slide-text">
                “Ordered flowers online and they were the best bouquet!
                Impressed everyone around. Highly recommend this flower shop!”
              </p>
              <p className="reviews-section__slide-reviewer">
                – Ronald Richards
              </p>
            </div>
          </SwiperSlide>
        </>
      </Swiper>
      <AButton className="button button--secondary reviews-section__button uppercase">
        Read Reviews
      </AButton>
    </section>
  );
};
