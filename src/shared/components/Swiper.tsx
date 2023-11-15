import { FC, ReactNode } from 'react';
import { Swiper as ReactSwiper } from 'swiper/react';
import { Navigation, Pagination, EffectCoverflow } from 'swiper/modules';

interface SwiperProps {
  children: ReactNode;
}

export const Swiper: FC<SwiperProps> = ({ children }) => {
  return (
    <ReactSwiper
      modules={[Navigation, Pagination, EffectCoverflow]}
      pagination={{
        el: '.swiper-pagination',
        clickable: true,
      }}
      navigation={{
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }}
      loop={true}
      slidesPerView={1}
    >
      {children}
      <div className="swiper-pagination"></div>
      <div className="swiper-button-prev"></div>
      <div className="swiper-button-next"></div>
    </ReactSwiper>
  );
};
