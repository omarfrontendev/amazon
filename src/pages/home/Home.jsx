import React from 'react'
import MainSlidre from '../../components/MainSlidre'
import ProductCard from '../../components/productCard/ProductCard'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper";

import './home.css'
import "swiper/css";

const Home = ({ products }) => {

  const Row1 = products.filter(p => p.type === 'electronics');
  const Row2 = products.filter(p => p.type === 'espresso_machines');
  const Row3 = products.filter(p => p.type === 'gaming_apparel');
  const Row4 = products.filter(p => p.type === 'fitness');

  return (
    <>
      <MainSlidre />
      <div className="container">
        <div className="home__content">
          <section className='products__section'>
            <div className="home__row flex space-between">
              {Row1.map(p => (
                <ProductCard 
                key={p.id}
                id={p.id} 
                title={p.title} 
                desc={p.desc} 
                img={p.img} 
                rating={p.rating} 
                price={p.price} 
                />
              ))}
            </div>
          </section>
          <section className='products__section'>
            <div className="home__row">
              <Swiper
                navigation={true} 
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
                }}
                speed={1000}
                slidesPerView={1}
                breakpoints={{
                  640: {
                    slidesPerView: 2,
                  },
                  768: {
                    slidesPerView: 3,
                  },
                }}
                spaceBetween={20}
                loop={true}
                modules={[Navigation, Autoplay]} 
                className="products-Swiper"
              >
                {Row2.map(p => (
                  <SwiperSlide key={p.id}>
                    <ProductCard 
                      key={p.id}
                      id={p.id} 
                      title={p.title} 
                      desc={p.desc} 
                      img={p.img} 
                      rating={p.rating} 
                      price={p.price} 
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </section>
          <section className='products__section'>
            <div className="home__row flex space-between">
              {Row3.map(p => (
                    <ProductCard 
                      key={p.id} 
                      id={p.id} 
                      title={p.title} 
                      desc={p.desc} 
                      img={p.img} 
                      rating={p.rating} 
                      price={p.price} 
                    />              
                  ))}
            </div>
          </section>
          <section className='products__section'>
            <div className="home__row">
              <Swiper
                navigation={true} 
                autoplay={{
                  delay: 4000,
                  disableOnInteraction: false,
                }}
                speed={2000}
                slidesPerView={1}
                spaceBetween={20}
                loop={true}
                modules={[Navigation, Autoplay]} 
                className="products-Swiper"
              >
                {Row4.map(p => (
                  <SwiperSlide key={p.id}>
                    <ProductCard
                      key={p.id} 
                      id={p.id} 
                      title={p.title} 
                      desc={p.desc} 
                      img={p.img} 
                      rating={p.rating} 
                      price={p.price} 
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </section>
        </div>
      </div>
    </>
  )
}

export default Home