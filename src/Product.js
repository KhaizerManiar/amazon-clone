import React from 'react';
import "./Product.css";

function Product() {
  return (
    <div className="product">
        <div className="product_info">
            <p>Sony Playstation 5</p>
            <p className="product_price">
                <small>$</small>
                <strong>649.96</strong>
            </p>
            <div className="product_rating">
                <p>⭐</p>
                <p>⭐</p>
                <p>⭐</p>
                <p>⭐</p>
            </div>
        </div>

        <img src="https://m.media-amazon.com/images/I/51eOztNdCkL._AC_SY400_.jpg" alt="Image of PS5" />
        <button>Add to Basket</button>
    </div>
  )
}

export default Product