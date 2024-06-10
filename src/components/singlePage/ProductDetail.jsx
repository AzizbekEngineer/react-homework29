import React from "react";
import { useParams } from "react-router-dom";
import { API_URL } from "../../static";
import "./singlePage.scss";

const ProductDetail = () => {
  let { id } = useParams();
  console.log(id);
  let product = API_URL[id - 1];
  return (
    <div>
      <div className="productDetail container">
        <div className="productDetail__img">
          <img src={product?.images[0]} alt="" />
        </div>
        <div className="productDetail__info">
          <h3 className="productDetail__title">{product?.title}</h3>
          <h4 className="productDetail__brand">{product?.brand}</h4>
          <p className="productDetail__desc">{product?.description}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
