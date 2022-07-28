import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import ProductCart from '../../components/productCart/ProductCart'
import { CartContext } from '../../store/cart-context'
import Card from '../../UI/card/Card'

import './cart.css'

const Cart = () => {

  const ctx = useContext(CartContext);
  const navigate = useNavigate()
  const products = [
    {
      id: 1,
      title: 'MSI Gaming GeForce RTX 3070 LHR 8GB GDRR6 256-Bit HDMI/DP Nvlink Torx Fan 4 RGB Ampere Architecture OC Graphics Card (RTX 3070 Gaming Z Trio 8G LHR)',
      img: 'https://m.media-amazon.com/images/I/81-oggyu7MS._AC_SY200_.jpg',
      desc: ' Products with electrical plugs are designed for use in the US. Outlets and voltage differ internationally and this product may require an adapter or converter for use in your destination. Please check compatibility before purchasing.',
      price: 699,
      rating: 4
    },
    {
      id: 2,
      title: 'MSI Gaming GeForce RTX 3070 LHR 8GB GDRR6 256-Bit HDMI/DP Nvlink Torx Fan 4 RGB Ampere Architecture OC Graphics Card (RTX 3070 Gaming Z Trio 8G LHR)',
      img: 'https://m.media-amazon.com/images/I/81-oggyu7MS._AC_SY200_.jpg',
      desc: ' Products with electrical plugs are designed for use in the US. Outlets and voltage differ internationally and this product may require an adapter or converter for use in your destination. Please check compatibility before purchasing.',
      price: 699,
      rating: 4
    },
    {
      id: 3,
      title: 'MSI Gaming GeForce RTX 3070 LHR 8GB GDRR6 256-Bit HDMI/DP Nvlink Torx Fan 4 RGB Ampere Architecture OC Graphics Card (RTX 3070 Gaming Z Trio 8G LHR)',
      img: 'https://m.media-amazon.com/images/I/81-oggyu7MS._AC_SY200_.jpg',
      desc: ' Products with electrical plugs are designed for use in the US. Outlets and voltage differ internationally and this product may require an adapter or converter for use in your destination. Please check compatibility before purchasing.',
      price: 699,
      rating: 4
    },
    {
      id: 4,
      title: 'MSI Gaming GeForce RTX 3070 LHR 8GB GDRR6 256-Bit HDMI/DP Nvlink Torx Fan 4 RGB Ampere Architecture OC Graphics Card (RTX 3070 Gaming Z Trio 8G LHR)',
      img: 'https://m.media-amazon.com/images/I/81-oggyu7MS._AC_SY200_.jpg',
      desc: ' Products with electrical plugs are designed for use in the US. Outlets and voltage differ internationally and this product may require an adapter or converter for use in your destination. Please check compatibility before purchasing.',
      price: 699,
      rating: 4
    },
    {
      id: 5,
      title: 'MSI Gaming GeForce RTX 3070 LHR 8GB GDRR6 256-Bit HDMI/DP Nvlink Torx Fan 4 RGB Ampere Architecture OC Graphics Card (RTX 3070 Gaming Z Trio 8G LHR)',
      img: 'https://m.media-amazon.com/images/I/81-oggyu7MS._AC_SY200_.jpg',
      desc: ' Products with electrical plugs are designed for use in the US. Outlets and voltage differ internationally and this product may require an adapter or converter for use in your destination. Please check compatibility before purchasing.',
      price: 699,
      rating: 4
    },
  ];

  if(!ctx.items.length) {
    return (
      <div className="empty__cart">
        <h1>There's No Items, Go To Add Items</h1>
        <Link to='/'>Home</Link>
      </div>
    )
  }

  return (
    <div className="cart__page">
      <div className="container">
        <div className="cart__content flex space-between align-start">
          <div className="left__cart flex column justify-start">
            {ctx.items?.map(p => (
              <ProductCart 
                key={p.id} 
                title={p.title} 
                desc={p.desc} 
                price={p.price} 
                rating={p.rating}
                img={p.img}
                id={p.id}
              />
            ))}
          </div>
          <div className="right__cart flex column">
            <Card>
              <div className="checkout__cart">
                <p>Subtotal (1 item): <strong>${ctx.totalPrice}</strong></p>
                <button onClick={() => navigate(`${ctx.auth ? '/payment' : '/login'}`)}>Proceed to checkout</button>
              </div>
            </Card>
            <Card>
              <div className='related__products'>
                <p>Sponsored Products related to items in your cart</p>
                <div className="flex column">
                  {products.map(p => (
                    <div key={p.id} className='related__project flex justify-start'>
                      <img src={p.img} alt="" />
                      <div className="flex column align-start">
                        {p.title.length >= 15 ? `${p.title.slice(0, 15)}...` : p.title}
                        <span>${p.price}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart