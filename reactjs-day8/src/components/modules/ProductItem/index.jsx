import React from "react";
import { Link } from "react-router-dom";

export default function ProductItem({ product }) {
  return (
    <>
      <Link to={`/products/${product.id}`}>
        <div className="product-item-img">
          <img src={product.image} alt={product.title} />
        </div>
        <div className="product-info">
          <h3 className="product-name m-10">{product.title}</h3>
        </div>
      </Link>
      <div className="add-cart m-10">
        <button className="btn-add-cart">Add to cart</button>
      </div>
    </>
  );
}
