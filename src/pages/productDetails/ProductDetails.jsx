import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { AiFillStar } from 'react-icons/ai'
import { CartContext } from '../../store/cart-context'
import Card from '../../UI/card/Card'
import { useNavigate } from 'react-router-dom'

import './productDetails.css'

const ProductDetails = ({ products }) => {

  const ratingStars = [1,2,3,4,5];
  const params = useParams().ID;
  const currentProduct = products.find(p => p.id === +params);
  const ctx = useContext(CartContext);
  const navigate = useNavigate();
  const [mainImage, setMainImage] = useState(currentProduct.img);
  const [onCart, setOnCart] = useState(false);

  useEffect(() => {
    setMainImage(currentProduct.img);
  }, [currentProduct]);

  useEffect(() => {
    if(ctx.items.find(i => i.id === currentProduct.id)) {
      setOnCart(true);
    }else {
      setOnCart(false);
    }
  }, [ctx.items, currentProduct])

  const addToCartHandler = () => {
    setOnCart(prev => !prev);
    if(onCart) {
      ctx.removeItemFromCart(currentProduct.id)
    }else {
      ctx.addItemToCart(currentProduct);
    }
  }

  if(!currentProduct) {
    return (
      <h1>Ther's No Products Here, Back Home</h1>
    );
  };

  const relatiedProducts = [
    {
      id: 1,
      title: 'Apple AirPods',
      img: 'https://m.media-amazon.com/images/I/7120GgUKj3L._AC_SX425_.jpg',
      desc: ' Apple AirPods (2nd Generation) Wireless Earbuds with Lightning Charging Case Included. Over 24 Hours of Battery Life, Effortless Setup. Bluetooth Headphones for iPhone',
      price: 27.00,
      rating: 3,
      images: [
        'https://m.media-amazon.com/images/I/7120GgUKj3L._AC_SX425_.jpg',
        'https://m.media-amazon.com/images/G/01/appcore/AMZ_AirPods_ChargingCase_Desktop_02._CB410666777_.jpg',
        'https://m.media-amazon.com/images/G/01/appcore/AMZ_AirPods_ChargingCase_Desktop_03._CB410666782_.jpg',
        'https://m.media-amazon.com/images/G/01/appcore/AMZ_AirPods_ChargingCase_Desktop_04._CB410666782_.jpg',
        'https://m.media-amazon.com/images/G/01/appcore/AMZ_AirPods_ChargingCase_Desktop_05._CB410666782_.jpg'
      ],
      type: 'electronics'
    },
    {
      id: 2,
      title: 'Sony WH-1000XM4 Wireless Premium Noise Canceling Overhead Headphones',
      img: 'https://m.media-amazon.com/images/I/71o8Q5XJS5L._AC_SX425_.jpg',
      desc: 'ndustry-leading noise canceling with Dual Noise Sensor technology Next-level music with Edge-AI, co-developed with Sony Music Studios Tokyo, Up to 30-hour battery life with quick charging (10 min charge for 5 hours of playback), Touch Sensor controls to pause play skip tracks, control volume, activate your voice assistant, and answer phone calls',
      price: 348.00,
      rating: 4,
      images: [
        'Sony WH-1000XM4 Wireless Premium Noise Canceling Overhead Headphones',
        'https://m.media-amazon.com/images/I/51Na6aX4N4L._AC_US200_.jpg',
        'https://m.media-amazon.com/images/I/4139o9Pg4iL._AC_US200_.jpg',
        'https://m.media-amazon.com/images/I/51UivMH2U8L._AC_US200_.jpg',
        'https://m.media-amazon.com/images/I/51UivMH2U8L._AC_US200_.jpg'
      ],
      type: 'electronics'
    },
    {
      id: 3,
      title: 'Sceptre 24" Professional Thin 75Hz 1080p LED Monitor',
      img: 'https://m.media-amazon.com/images/I/71rXSVqET9L._AC_SX425_.jpg',
      desc: 'Products with electrical plugs are designed for use in the US. Outlets and voltage differ internationally and this product may require an adapter or converter for use in your destination. Please check compatibility before purchasing.',
      price: 129.00,
      rating: 4,
      images: [
        'https://m.media-amazon.com/images/I/71rXSVqET9L._AC_SX425_.jpg',
        'https://m.media-amazon.com/images/I/41T-EdqjZ5L._AC_US200_.jpg',
        'https://m.media-amazon.com/images/I/51WvkrzaLML._AC_US200_.jpg',
        'https://m.media-amazon.com/images/I/51VVrbEr54L._AC_US200_.jpg',
        'https://m.media-amazon.com/images/I/41wvFya9CuL._AC_US200_.jpg'
      ],
      type: 'electronics'
    },
    {
      id: 4,
      title: 'Logitech C922x Pro Stream Webcam',
      img: 'https://m.media-amazon.com/images/I/712xpaJPT6L._AC_SX425_.jpg',
      desc: 'Web camera specifically designed and optimized for professional quality video streaming on social gaming and entertainment sites like Twitch and YouTube, Full HD glass lens and premium autofocus deliver razor sharp, clear video in consistent high definition while 2 built in mics capture your voice in rich stereo audio.',
      price: 94.00,
      rating: 3,
      images: [
        'https://m.media-amazon.com/images/I/712xpaJPT6L._AC_SX425_.jpg',
        'https://m.media-amazon.com/images/I/41xaS2XThmL._AC_US200_.jpg',
        'https://m.media-amazon.com/images/I/419XZn4t3zL._AC_US200_.jpg',
        'https://m.media-amazon.com/images/I/51h1ytJo8zL._AC_US200_.jpg'
      ],
      type: 'electronics'
    },
    {
      id: 5,
      title: 'Calphalon Espresso Machine with Tamper',
      img: 'https://m.media-amazon.com/images/I/81s+tw0hwzL._AC_SX569_.jpg',
      desc: '15-Bar Italian pump delivers the right amount of pressure for maximum flavor extraction and produces a beautiful layer of crema for your Espresso, Dial interface for selecting steam, hot water, and pre-programmed single and double shots',
      price: 349.00,
      rating: 5,
      images: [
        'https://m.media-amazon.com/images/I/81s+tw0hwzL._AC_SX569_.jpg',
        'https://m.media-amazon.com/images/I/41iiClaJbKL._AC_US40_.jpg',
        'https://m.media-amazon.com/images/I/51UKgb8slJL._AC_US40_.jpg',
        'https://m.media-amazon.com/images/I/41YfOAx0-0L._AC_US40_.jpg'
      ],
      type: 'espresso_machines'
    },
    {
      id: 6,
      title: 'Mr. Coffee Espresso and Cappuccino Machine',
      img: 'https://m.media-amazon.com/images/I/71w+WubwwkL._AC_SX569_.jpg',
      desc: 'Semi automatic 3 in 1 espresso maker, cappuccino maker, and latte maker, 15 Bar Pump System Brews Rich Tasting Espresso Coffee, Trouble Free Automatic Milk Frother Removes the Guesswork. Do not wash the water.',
      price: 199.00,
      rating: 5,
      images: [
        'https://m.media-amazon.com/images/I/71w+WubwwkL._AC_SX569_.jpg',
        'https://m.media-amazon.com/images/I/41JMwfQS9jL._AC_US40_.jpg',
        'https://m.media-amazon.com/images/I/41bO+HZLUUL._AC_US40_.jpg',
        'https://m.media-amazon.com/images/I/51XXLajgrJL._AC_US40_.jpg'
      ],
      type: 'espresso_machines'
    },
  ];

  const classes = ctx.items.find(i => i.id === currentProduct.id) ? 'on__cart' : '';

  return (
    <div className="product__page">
      <div className="container">
        <div className="product__content flex space-between align-start">
          <div className="left__product__col">
            <div className="product__image flex column">
              <div className="main__img">
                <img src={mainImage} alt="" />
              </div>
              <div className="flex images__container">
                {currentProduct?.images?.map((img, i) => (
                  <div key={i} onClick={() => setMainImage(img)}>
                    <img src={img} alt='Product__Image' />
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="right__product__col">
            <h2>{currentProduct.title}</h2>
            <div className="flex rating__container">
                {currentProduct.rating && ratingStars.map((i, idx) => <AiFillStar key={idx} className={`rating__star ${i <= currentProduct.rating ? 'gold' : ''}`} />)}
            </div>
            <span>${currentProduct.price}</span>
            <p>{currentProduct.desc}</p>
            <button onClick={addToCartHandler} className={classes}>
              {onCart ? 'On Cart' : 'Add To Cart'}
            </button>
          </div>
        </div>
        <h3>Sponsored Products related to items in your cart</h3>
        <div className="realtied__products flex">
          {relatiedProducts.map(p => (
            <Card key={p.id}>
              <div onClick={() => navigate(`/product/${p.id}`)} key={p.id} className='related__project flex column justify-start'>
                <div className='image__'>
                  <img src={p.img} alt="" />
                </div>
                <div className="flex column align-start">
                  {p.title.length >= 15 ? `${p.title.slice(0, 15)}...` : p.title}
                  <span>${p.price}</span>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProductDetails