import React, { useContext, useState } from 'react'
import { CartContext } from '../../store/cart-context'
import ProductCart from '../../components/productCart/ProductCart'

import './payment.css'

const Payment = () => {

  const ctx = useContext(CartContext);
  const [data, setData] = useState({});

  const changeDataHandler = (id, value) => {
    setData({
      ...data,
      [id]: value
    });
  };

  const orederHandler = event => {
    event.preventDefault();
    ctx.setAuth({
      ...ctx.auth,
      orders: ctx?.auth?.orders ? [...ctx?.auth?.orders, {order: ctx.items, userData: data}] : [{order: ctx.items, userData: data}]
    });
    localStorage.setItem('auth', JSON.stringify({
      ...ctx.auth,
      orders: ctx?.auth?.orders ? [...ctx?.auth?.orders, {order: ctx.items, userData: data}] : [{order: ctx.items, userData: data}]
    }));
    ctx.setItems([])
  };

  return (
    <div className="payment__page">
      <div className="container">
        <div className="payment__content">
          <div className="flex column product__container">
            {ctx?.items?.map(p => (
              <ProductCart 
                key={p.id}
                title={p.title} 
                img={p.img} 
                desc={p.desc} 
                rating={p.rating} 
                price={p.price}
              />
            ))}
          </div>
          <div className="payment__form">
            <div className="total__price">Subtotal ({ctx.items.length} item): ${ctx.totalPrice}</div>
          <div className="login__content">
            <form onSubmit={orederHandler}>
              <h1>Checkout</h1>
              <div className="input__control">
                <label htmlFor="country">Country</label>
                <input onChange={e => changeDataHandler('country', e.target.value)} type="text" placeholder='Country' required id='country' />
              </div>
              <div className="input__control">
                <label htmlFor="city">City</label>
                <input onChange={e => changeDataHandler('city', e.target.value)} type="text" placeholder='City' required id='city' />
              </div>
              <div className="input__control">
                <label htmlFor="street">Street</label>
                <input onChange={e => changeDataHandler('street', e.target.value)} type="text" placeholder='Street' required id='street' />
              </div>
              <div className="input__control">
                <label htmlFor="phone_number">Phone Number</label>
                <input onChange={e => changeDataHandler('phone_number', e.target.value)} type="number" placeholder='Phone Number' required id='phone_number' />
              </div>
              <div className="input__control">
                <label htmlFor="visa">VISA</label>
                <input onChange={e => changeDataHandler('visa', e.target.value)} type="number" placeholder='VISA' required id='visa' />
              </div>
              <button type='submit'>Order</button>
            </form>
        </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Payment