import React from 'react'
import { Link } from 'react-router-dom';
import { useCart } from 'react-use-cart';

const Basket = () => {
    const { totalItems}= useCart();
  return (
    <>
      <div className="shopicon">
        <Link to="/cart" >
          <i className="fa-solid fa-cart-shopping"></i>
        </Link>
        <div className="number">
          <span> {totalItems}</span>
        </div>
      </div>
    </>
  );
}

export default Basket