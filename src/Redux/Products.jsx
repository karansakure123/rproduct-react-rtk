import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { add } from '../store/cartSlice';

const Products = () => {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch('https://fakestoreapi.com/products');
      const data = await res.json();
      setProducts(data);
    };
    fetchProducts();
  }, []);

  const handleAddToCart = (product) => {
    dispatch(add(product));
  };

  return (
    <div className="products-section grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4">
      {products.map(product => (
        <div className="cards" key={product.id}>
          <div className="card">
            <div className="card-img">
              <img src={product.image} className='card-imgs' alt={product.title} />
            </div>
            <div className="card-body p-1">
              <div className="card-title mb-7">
                <h3>{product.title}</h3>
              </div>
              <div className="card-price mb-1">
                <p>Rs. {product.price}</p>
              </div>
              <button className='prodbtn' onClick={() => handleAddToCart(product)}>Add to cart</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;
