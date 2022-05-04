import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

export default function ProductDetail(props) {
  const { id } = useParams();
  const [productDetail, setProductDetail] = useState({});
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((product) => setProductDetail(product));
  }, [id]);

  console.log(productDetail);
  return (
    <div className="page-product-detail">
      <h3 className="page-detail-title m-30">Product Detail</h3>
      <div className="product-detail-item flex-around row">
        <div className="product-detail-img col-3">
          <img src={productDetail.image}></img>
        </div>
        <div className="product-detail-content col-7 ml-10 mb-30">
          <h4 className="product-title">{productDetail.title}</h4>
          <p className="product-price">
            Price: <span>${productDetail.price},00</span>
          </p>
          <p className="product-category">Category: {productDetail.category}</p>
          <label>Description: </label>
          <p className="product-description ml-10">
            {productDetail.description}
          </p>
        </div>
      </div>
    </div>
  );
}
