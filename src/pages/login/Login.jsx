import React, { useContext, useState } from 'react'
import { auth } from '../../firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword  } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../../store/cart-context';

import './login.css'

const Login = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const ctx = useContext(CartContext);
  const navigate = useNavigate();


  const createUserHandler = () => {
    createUserWithEmailAndPassword(auth, email, password)
    .then((data) => {
      ctx.setAuth(data.user);
      localStorage.setItem('auth', JSON.stringify(data.user));
      window.goBack();
      setPassword('');
      setEmail('');
    })
    .catch((error) => {
      alert(error.message)
    });
  };

  const signInHandler = e => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
    .then((data) => {
      ctx.setAuth(data.user);
      localStorage.setItem('auth', JSON.stringify(data.user));
      navigate('/amazon');
      setPassword('');
      setEmail('');
    })
    .catch((error) => {
      alert(error.message)
    });
  };

  return (
    <div className="login__page">
      <div className="container">
        <div className="login__content">
          <form onSubmit={signInHandler}>
            <h1>Sign-in</h1>
            <div className="input__control">
              <label htmlFor="email">E-mail</label>
              <input type="email" placeholder='E-mail' required id='email' value={email} onChange={e => setEmail(e.target.value)}/>
            </div>
            <div className="input__control">
              <label htmlFor="password">Password</label>
              <input type="password" placeholder='Password' required id='password' value={password} onChange={e => setPassword(e.target.value)}/>
            </div>
            <button type='submit'>Sign In</button>
          </form>
          <button onClick={createUserHandler}>Create Your Amazon Account</button>
        </div>
      </div>
    </div>
  )
}

export default Login