import { FC } from 'react';
import './reviews-section';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './swiper.scss';



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

     <Swiper
            modules={[Navigation, Pagination, EffectCoverflow]}
            pagination={{
                el: '.swiper-pagination',
                clickable: true
            }}
            navigation={{
                nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
            }}
           loop={true}
      slidesPerView={1}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
            <SwiperSlide>
                <div className="reviews-section__slide">
              <p className="reviews-section__slide-text">
                “Ordered flowers online and they were the best bouquet!
                Impressed everyone around. Highly recommend this flower shop!”
              </p>
              <p className="reviews-section__slide-reviewer">– Ronald Richards</p>
            </div>
      </SwiperSlide>
            <SwiperSlide>
                <div className="reviews-section__slide">
              <p className="reviews-section__slide-text">
                “Ordered flowers online and they were the best bouquet!
                Impressed everyone around. Highly recommend this flower shop!”
              </p>
              <p className="reviews-section__slide-reviewer">– Ronald Richards</p>
            </div>
      </SwiperSlide>
            <SwiperSlide>
                <div className="reviews-section__slide">
              <p className="reviews-section__slide-text">
                “Ordered flowers online and they were the best bouquet!
                Impressed everyone around. Highly recommend this flower shop!”
              </p>
              <p className="reviews-section__slide-reviewer">– Ronald Richards</p>
            </div>
          </SwiperSlide>
          
      <div className="swiper-pagination"></div>
        <div className="swiper-button-prev"></div>
        <div className="swiper-button-next"></div>
        
        </Swiper>
      <button
        type="button"
        className="button button--secondary reviews-section__button uppercase"
      >
        Read Reviews
      </button>
    </section>
    )
}