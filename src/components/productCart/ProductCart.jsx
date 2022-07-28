import React, { useContext } from 'react'
import { AiFillStar } from 'react-icons/ai'
import { CartContext } from '../../store/cart-context';
import Card from '../../UI/card/Card';
import { useNavigate } from 'react-router-dom'

import './productCart.css'

const ProductCart = ({ title, desc, img, price, rating, id }) => {

  const ratingStars = [1,2,3,4,5];
  const ctx = useContext(CartContext);
  const navigate = useNavigate()

  return (
    <Card>
      <div className='product__cart flex'>
        <div onClick={()=> navigate(`/product/${id}`)} className="product__img">
          <img src={img} alt="Product__image" />
        </div>
        <div className="product__info flex column align-start">
          <h3>{title}</h3>
          <p>{desc}</p>
          <span>${price}</span>
          <div className="flex">
            {ratingStars.map((i) => <AiFillStar key={i} className={`rating__star ${i <= rating ? 'gold' : ''}`} />)}
          </div>
          <button onClick={() => ctx.removeItemFromCart(id)} className='remove__btn'>Remove From Cart</button>
        </div>
      </div>
    </Card>
  )
}

export default ProductCart