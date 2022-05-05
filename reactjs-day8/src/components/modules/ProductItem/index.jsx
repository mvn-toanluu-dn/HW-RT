import React, { useState, useContext } from "react";
import { FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toggle } from "../../../store/favSlice";

export default function ProductItem({ product }) {
  const dispatch = useDispatch();
  const [products, setProducts] = useState([]);
  const fav = useSelector((state) => state.fav.value);
  console.log(fav);
  const handleFav = (e, id) => {
    e.preventDefault();
    const newProducts = products.map((e) => {
      if (e.id === id) {
        e.fav = !e.fav;
      }
      return e;
    });
    setProducts(newProducts);
    dispatch(toggle(id));
  };
  return (
    <>
      <Link to={`/products/${product.id}`}>
        <div className="product">
          <div className="product-item-img">
            <img src={product.image} alt={product.title} />
            <span
              className={`${product.fav ? "active" : ""}`}
              onClick={(e) => handleFav(e, product.id)}
            >
              <FaHeart className={fav.includes(product.id) ? "active" : ""} />
            </span>
          </div>
          <div className="product-info">
            <h3 className="product-name m-10">{product.title}</h3>
            <h4 className="product-price m-10">${product.price}</h4>
          </div>
        </div>
      </Link>
    </>
  );
}
