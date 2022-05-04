import React, { useState, useEffect } from "react";
import ProductItem from "../../components/modules/ProductItem/index";

export default function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((products) => setProducts(products));
  }, []);
  return (
    <div className="page-products">
      <section className="section-products mt-70 mb-70">
        <div className="container">
          <ul className="product-list flex-around row mt-20 mb-20">
            {products.map((product, index) => {
              return (
                <li
                  className="product-item col-3 col-small-6 col-wide-3 col-large-3"
                  key={index}
                >
                  <ProductItem product={product} />
                </li>
              );
            })}
          </ul>
        </div>
      </section>
    </div>
  );
}
