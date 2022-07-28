import React, { useContext } from 'react'
import Header from './components/header/Header'
import Home from './pages/home/Home'
import { Routes, Route } from 'react-router-dom'
import Cart from './pages/cart/Cart'
import Login from './pages/login/Login'
import { CartContext } from './store/cart-context'
import { Navigate } from 'react-router-dom'
import Payment from './pages/payment/Payment'
import Orders from './pages/orders/Orders'
import ProductDetails from './pages/productDetails/ProductDetails'
import Footer from './components/footer/Footer'

const App = () => {

  const ctx = useContext(CartContext);

  const RequireAuth = ({ children }) => (
    ctx.auth ? <Navigate to='/' /> : children
  )
  const RequireLogin = ({ children }) => (
    ctx.auth ? children : <Navigate to='/login' />
  );


  const DUMMY_PRODUCTS = [
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
    {
      id: 7,
      title: 'Smart Watch - Nanphn Activity Fitness Tracker',
      img: 'https://m.media-amazon.com/images/I/51c-7ReyoQL._AC_SX425_.jpg',
      desc: '1.8 inches Large HD Screen & Customize Watch Face】The curved 1.8-inch HD screen of this smart watch, covered in 3D glass, boasts a crystal-clear 320ppi pixel density, and the bezel-less design naturally transitions to the alloy watch body for an enhanced visual aesthetic and a wider content display area. The app has more than 100 cloud watch faces to choose from. Also, you can customize the watch face through the app, and upload family photos or any photo as the watch face background.',
      price: 39.00,
      rating: 3,
      images: [
        'https://m.media-amazon.com/images/I/51c-7ReyoQL._AC_SX425_.jpg',
        'https://m.media-amazon.com/images/I/51MnUvggJsL._AC_US200_.jpg',
        'https://m.media-amazon.com/images/I/51qsMcYl+rL._AC_US200_.jpg',
        'https://m.media-amazon.com/images/I/511D3DgLEzL._AC_US200_.jpg'
      ],
      type: 'espresso_machines'
    },
    {
      id: 8,
      title: 'Withings Steel HR Hybrid Smartwatch - Activity',
      img: 'https://m.media-amazon.com/images/I/71SIPtmwGlL._AC_SX425_.jpg',
      desc: 'MULTISPORT TRACKING - Tracks 30+ sports and maps your session with distance, elevation and pace via connected GPS. DAILY ACTIVITY TRACKING - Automatically counts steps, calories and distance, UTOMATIC SLEEP MONITORING - Wake to a Sleep Score based on light & deep sleep cycles, interruptions, depth & regularity.',
      price: 199.00,
      rating: 3,
      images: [
        'https://m.media-amazon.com/images/I/71SIPtmwGlL._AC_SX425_.jpg',
        'https://m.media-amazon.com/images/I/41jBrRXOUOL._AC_US200_.jpg',
        'https://m.media-amazon.com/images/I/41Cwp7mdvgL._AC_US200_.jpg',
        'https://m.media-amazon.com/images/I/41rGP0JUQTL._AC_US200_.jpg'
      ],
      type: 'espresso_machines'
    },
    {
      id: 9,
      title: 'Withings Steel HR Sport - Multisport hybrid Smartwatch, connected GPS, heart rate',
      img: 'https://m.media-amazon.com/images/I/81MQG9RCEJL._AC_SX425_.jpg',
      desc: 'MULTISPORT TRACKING -Delivers Fitness Level via VO2 max estimation | Tracks 30+ sports and maps your session with distance, elevation, and pace via connected GPS RECORD BATTERY LIFE - Spend more time moving and less time charging with a rechargeable battery that lasts up to 25 days WATER RESISTANT TO 50M - Steel HR Sport is a life-friendly hybrid smartwatch that can accompany you to the pool or hit the showers.',
      price: 199.00,
      rating: 4,
      images: [
        'https://m.media-amazon.com/images/I/81MQG9RCEJL._AC_SX425_.jpg',
        'https://m.media-amazon.com/images/I/318Pd6IrxqL._AC_US200_.jpg',
        'https://m.media-amazon.com/images/I/41bmnMJo7LL._AC_US200_.jpg',
        'https://m.media-amazon.com/images/I/514-rWNBPrL._AC_US200_.jpg'
      ],
      type: 'espresso_machines'
    },
    {
      id: 10,
      title: 'Smart Watch with Earbuds,ICARER FAMILY',
      img: 'https://m.media-amazon.com/images/I/71YBoeAvVYL._AC_SX425_.jpg',
      desc: "3 in 1 Desgin:This newly designed smart watch integrates Smart bracelet,TWS Bluetooth headphone,Bluetooth Speaker,3 functions in one product.Switch between three playback modes.The Watch built-in 128mb memory, which can store about 30-40 songs, very innovative design. Smart Watch Answer Calls:Smart watch has the function of receiving and making calls. When the watch is connected to the phone's bluetooth,you can directly use the dial pad of the watch to make calls and talk directly.",
      price: 119.00,
      rating: 5,
      images: [
        'https://m.media-amazon.com/images/I/71YBoeAvVYL._AC_SX425_.jpg',
        'https://m.media-amazon.com/images/I/51ppjrsj7CL._AC_US200_.jpg',
        'https://m.media-amazon.com/images/I/51a8-s+T9NL._AC_US200_.jpg',
        'https://m.media-amazon.com/images/I/51RbbjoPQtL._AC_US200_.jpg'
      ],
      type: 'espresso_machines'
    },
    {
      id: 11,
      title: 'Heartbeat of a Gamer 2 Adult Hooded Sweatshirt',
      img: 'https://images-na.ssl-images-amazon.com/images/I/616PbyOB4dL.__AC_SY445_SX342_QL70_FMwebp_.jpg',
      desc: "Products with electrical plugs are designed for use in the US. Outlets and voltage differ internationally and this product may require an adapter or converter for use in your destination. Please check compatibility before purchasing.",
      price: 30.00,
      rating: 2,
      type: 'gaming_apparel'
    },
    {
      id: 12,
      title: 'Ripple Junction Playstation Vintage Icon Adult T-Shirt',
      img: 'https://m.media-amazon.com/images/I/51Kdv2v95VS._AC_UX522_.jpg',
      desc: "3 in 1 Desgin:This newly designed smart watch integrates Smart bracelet,TWS Bluetooth headphone,Bluetooth Speaker,3 functions in one product.Switch between three",
      price: 24.00,
      rating: 3,
      type: 'gaming_apparel'
    },
    {
      id: 13,
      title: 'eskCycle 2 Under Desk Bike Pedal',
      img: 'https://images-na.ssl-images-amazon.com/images/I/61k4fqIuEYL.__AC_SX300_SY300_QL70_FMwebp_.jpg',
      desc: `Smooth & Silent: Our patented under desk bike uses premium magnetic resistance for an extra smooth pedal motion. This is easier on your joints and whisper-quiet, so you won't bother those around you, Drop It Low: DeskCycle 2 mini exercise bike is adjustable. Drop it down to 9" for the lowest max pedal height of any desk bike pedal exerciser on the market! Works with desks as low as 27" for people 5'10" & under.`,
      price: 199.00,
      rating: 5,
      images: [
        'https://images-na.ssl-images-amazon.com/images/I/61k4fqIuEYL.__AC_SX300_SY300_QL70_FMwebp_.jpg',
        'https://m.media-amazon.com/images/I/514fuhTWc5L._AC_US200_.jpg',
        'https://m.media-amazon.com/images/I/419Ccz59eHL._AC_US200_.jpg',
        'https://m.media-amazon.com/images/I/51GPv32xXpL._AC_US200_.jpg'
      ],
      type: 'fitness'
    },
    {
      id: 14,
      title: 'Marcy Dual Action Cross Training Recumbent Exercise Bike with Arm Exercisers',
      img: 'https://m.media-amazon.com/images/I/71E+oh38ZqL._AC_SX425_.jpg',
      desc: "Dual Action Recumbent Exercise Bike: This gym equipment includes adjustable handle bars that move back and forth, like an elliptical. You can use these arm exercisers while pedaling on the stationary bike to help you",
      price: 349.00,
      rating: 3,
      type: 'fitness',
      images: [
        'https://m.media-amazon.com/images/I/71E+oh38ZqL._AC_SX425_.jpg',
        'https://m.media-amazon.com/images/I/416K1BkijNL._AC_US200_.jpg',
        'https://m.media-amazon.com/images/I/41jjlbOoFiL._AC_US200_.jpg',
        'https://m.media-amazon.com/images/I/413xP0YLpbL._AC_US200_.jpg'
      ]
    },
    {
      id: 15,
      title: 'UPUP 100 FT LED Strip Lights,Bluetooth LED Lights for Bedroom',
      img: 'https://m.media-amazon.com/images/I/81uJft3IzWS._AC_SX679_.jpg',
      desc: "mart APP control: Control the LED lights for room via Apollo App, and 24-key remote control. Different modes can be chosen, like Flashing, Quick, Jump, Fade, Firmly stick and Easily install: With strong adhesive, the strip lights can be firmly sticked on wooden or lacquer wall and other clean surfaces. Besides, the whole.",
      price: 24.00,
      rating: 3,
      type: 'fitness'
    },
    {
      id: 16,
      title: 'Amazon Basics Rubber Encased Hex Dumbbell Hand Weight',
      img: 'https://images-na.ssl-images-amazon.com/images/I/81YvGI3D0HL.__AC_SY300_SX300_QL70_FMwebp_.jpg',
      desc: "Dumbbell for resistance training—great for arms, chest, back, core, and legs, Solid cast-iron core for reliable strength; will not bend or break after repeated use",
      price: 80.00,
      rating: 4,
      type: 'fitness',
      images: [
        'https://images-na.ssl-images-amazon.com/images/I/81YvGI3D0HL.__AC_SY300_SX300_QL70_FMwebp_.jpg',
        'https://m.media-amazon.com/images/I/41+jGJEJoUL._AC_US200_.jpg',
        'https://m.media-amazon.com/images/I/31zA8mqRpAS._AC_US200_.jpg'
      ]
    },
  ]

  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home products={DUMMY_PRODUCTS} />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/login' element={<RequireAuth ><Login /></RequireAuth>} />
        <Route path='/payment' element={<RequireLogin><Payment /></RequireLogin>} />
        <Route path='/orders' element={<RequireLogin><Orders /></RequireLogin>} />
        <Route path='/product/:ID' element={<ProductDetails products={DUMMY_PRODUCTS} />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
