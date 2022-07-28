import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper";

import "swiper/css";
import "swiper/css/navigation";

const MainSlidre = () => {

  const images = [
    'https://m.media-amazon.com/images/I/711Y9Al9RNL._SX3000_.jpg',
    'https://m.media-amazon.com/images/I/71qid7QFWJL._SX3000_.jpg',
    'https://m.media-amazon.com/images/I/61jovjd+f9L._SX3000_.jpg',
    'https://m.media-amazon.com/images/I/61DUO0NqyyL._SX3000_.jpg'
  ]

  return (
    <section className='main__slider'>
      <Swiper 
        navigation={true} 
        className="mySwiper"
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        speed={2000}
        loop={true}
        modules={[Navigation, Autoplay]} 
      >
        {images.map((img, i) => (
          <SwiperSlide key={i}>
            <img src={img} alt="" />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}

export default MainSlidre