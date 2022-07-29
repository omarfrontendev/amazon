import React, { useContext, useState } from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import { FaShoppingCart } from 'react-icons/fa'
import { CgMenuRound } from 'react-icons/cg'
import { AiOutlineCloseCircle } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'
import { CartContext } from '../../store/cart-context'
import { signOut } from "firebase/auth";
import { auth } from '../../firebase'
import Logo from '../../assets/amazon_PNG11.png'

import './header.css'

const Header = () => {

  const navigate = useNavigate()
  const [toggleMenu, setToggleMenu] = useState(false);
  const ctx = useContext(CartContext);

  const authenticationHandler = () => {
    if(ctx.auth) {
      signOut(auth).then(() => {
        ctx.setAuth(null);
        localStorage.removeItem('auth');
      }).catch((error) => {
        alert(error.message)
      });
    }else {
      navigate('/login');
    }
  }

  return (
    <header className='header flex justify-center'>
      <div className="container flex justify-center">
        <nav className='nav flex space-between'>
          <div className="logo" onClick={() => navigate('/amazon')}>
            <img src={Logo} alt="Logo" />
          </div>
          <div className="search-input flex">
            <input type="text" name="search" id="search" placeholder='Search' />
            <button>
              <AiOutlineSearch className='search-icon' />
            </button>
          </div>
          <div className={`header__option flex justify-end ${toggleMenu ? 'active' : ''}`}>
            <button className='flex column align-start' onClick={authenticationHandler}>
                Hello
                <span>{ctx.auth ? 'Sign out' : 'Sign in'}</span>
            </button>
            <button onClick={() => navigate('/orders')} className='flex column align-start'>
                Returns
                <span>& Orders</span>
            </button>
          </div>
          <div className="cart">
            <button className='relative' onClick={() => navigate('/cart')}>
              <FaShoppingCart className='cart-icons' />
              <span className='absolute'>{ctx?.items.length}</span>
            </button>
          </div>
          <button className='menu__btn' onClick={() => setToggleMenu(prev => !prev)}>
           {!toggleMenu ? <CgMenuRound /> : <AiOutlineCloseCircle className='close__btn' />}
          </button>
        </nav>
      </div>
    </header>
  )
}

export default Header