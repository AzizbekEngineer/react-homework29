import React, { useEffect, useState } from "react";
import { API_URL } from "../../static";
import { categoryData } from "../../static";
import "./product.scss";
import { NavLink } from "react-router-dom";
console.log(categoryData);

const Product = () => {
  const [count, setCount] = useState(1);
  const [categoryValue, setCategoryValue] = useState("");
  let oldCount = 5;

  const filterCategory = API_URL.filter(
    (el) => categoryValue === "" || el.category === categoryValue
  );
  const categoryItem = categoryData.map((el) => {
    return (
      <li key={el}>
        <data value={el} onClick={(e) => setCategoryValue(e.target.value)}>
          {el}
        </data>
      </li>
    );
  });

  console.log(categoryValue);
  let productItem = filterCategory?.slice(0, oldCount * count)?.map((el) => (
    <div key={el.id} className="product__card">
      <div className="product__img">
        <NavLink to={`product/${el.id}`}>
          <img src={el.images[0]} alt="" />
        </NavLink>
      </div>
      <div className="product__infos">
        <div className="product__info__img">
          <img src={el.images[0]} alt="" />
        </div>
        <div className="product__info">
          <h3 className="product__title">{el.title}</h3>
          <p className="product__desc">{el.description}</p>
        </div>
      </div>
    </div>
  ));
  return (
    <div className="product container">
      <div className="product__category__top">
        <h2>Product</h2>
        <ul className="product__category__list">
          <li>
            <data value="" onClick={(e) => setCategoryValue(e.target.value)}>
              All
            </data>
          </li>
          {categoryItem}
        </ul>
      </div>
      <div className="product__wrapper">{productItem}</div>
      <button
        className="product__see__more"
        onClick={() => setCount((prev) => prev + 1)}
      >
        See More
      </button>
    </div>
  );
};

export default Product;
