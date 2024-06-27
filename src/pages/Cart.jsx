import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { remove } from '../store/cartSlice';

const Cart = () => {
  const products = useSelector(state => state.cart);
  const dispatch = useDispatch();

  return (
    <>

      <h2 className='text-center mt-5  text-4xl text-purple-700 font-serif'>Carts</h2>
      <div className="products-section grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4">
      {products.map(product => (
        <div className="cardss" key={product.id}>
          <img src={product.image} className='cart-img' alt={product.title} />
          <h4 className='cart-title'>{product.title}</h4>
          <p className='cart-price' >{product.price}</p>
          <button className='cart-btn' onClick={() => dispatch(remove(product))}>Remove</button>

        </div>
      ))}
      </div>
    </>
  );
};

export default Cart;
