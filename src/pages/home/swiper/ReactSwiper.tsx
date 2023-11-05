
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './swiper.scss';

export default () => {
    return (
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
        
  );
};