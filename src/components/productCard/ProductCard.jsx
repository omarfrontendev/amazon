import React, { useContext, useEffect, useState } from 'react'
import { AiFillStar } from 'react-icons/ai'
import { CartContext } from '../../store/cart-context';
import { useNavigate } from 'react-router-dom'

import './productCard.css'

const ProductCard = ({ title, desc, price, img, rating, id }) => {

  const navigate = useNavigate()
  const [onCart, setOnCart] = useState(false);
  const ratingStars = [1,2,3,4,5];
  const ctx = useContext(CartContext);

  const addToCartHandler = () => {
    setOnCart(prev => !prev);
    if(onCart) {
      ctx.removeItemFromCart(id)
    }else {
      ctx.addItemToCart({
        title,
        desc,
        price,
        img,
        rating,
        id
      });
    }
  };

  useEffect(() => {
    if(ctx.items.find(i => i.id === id)) {
      setOnCart(true);
    }else {
      setOnCart(false);
    }
  }, [ctx.items, id])

  const classes = ctx.items.find(i => i.id === id) ? 'on__cart' : '';

  return (
    <div className='product__card flex column align-start'>
      <h3>{title && title.length > 20 ? `${title.slice(0, 20)}...` : title}</h3>
      <p>{desc && desc?.length > 100 ? `${desc.slice(0, 100)}...` : desc}</p>
      <span>{price && `$${price}`}</span>
      <div className="flex rating__container">
        {rating && ratingStars.map((i, idx) => <AiFillStar key={idx} className={`rating__star ${i <= rating ? 'gold' : ''}`} />)}
      </div>
      <img src={img} alt="" />
      <div className="flex btns">
        <button onClick={() => navigate(`/product/${id}`)}>View</button>
      <button 
        onClick={addToCartHandler}
        className={classes}
      >{onCart ? 'On Cart' : 'Add To Cart'}</button>
      </div>
    </div>
  )
}

export default ProductCard