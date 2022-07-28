import React, { useContext } from 'react'
import { CartContext } from '../../store/cart-context'
import Card from '../../UI/card/Card'

import './orders.css'

const Orders = () => {

  const ctx = useContext(CartContext);

  return (
    <div className="orders__page">
      <div className="container">
        <h3>Your Orders: {ctx.auth.orders.length}</h3>
        <div className="orders__content flex space-between">
          {ctx.auth.orders.map((order,i) => (
            <div className='order__card' key={i}>
              <Card>
                <div className="flex card__content space-between align-start">
                  <div className="left">
                  <h5>your Informatios:</h5>
                    <ul>
                      <li>County: {order.userData.country}</li>
                      <li>City: {order.userData.city}</li>
                      <li>Phone Number: {order.userData.phone_number}</li>
                      <li>Street: {order.userData.street}</li>
                      <li>vISA: {order.userData.visa}</li>
                    </ul>
                    <p>Your Prdocuts: {order.order.length}</p>
                  </div>
                  <div className="rigth">
                    <span>Bending</span>
                    <button>Cancel Oreder</button>
                    <button>Change Order oreder</button>
                    <button>View</button>
                    {/* <p>Please Wait We Will Call You!</p> */}
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Orders