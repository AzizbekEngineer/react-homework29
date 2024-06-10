import React, { useState } from "react";
import { IoSearch } from "react-icons/io5";
import headerLogo from "../../assets/img/logo.jpg";
import { FaMicrophone } from "react-icons/fa";
import { MdOutlineVideoCall } from "react-icons/md";
import { FaRegBell } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import "./header.scss";
import { API_URL } from "../../static";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [searchValue, setSearchValue] = useState("");

  const filterData = API_URL.filter((el) =>
    el.title.toLowerCase().includes(searchValue.toLowerCase().trim())
  );

  let filterProduct = filterData.map((el) => (
    <div key={el.id} className="filter__product">
      <NavLink className="filter__product" to={`product/${el.id}`}>
        <img src={el.images[0]} alt="" />
        <p>{el.title}</p>
      </NavLink>
    </div>
  ));

  return (
    <header className="header">
      <div className="header__container container">
        <div className="header__logo">
          <NavLink to="/">
            <img src={headerLogo} alt="" />
          </NavLink>
        </div>
        <form action="" className="header__form">
          <div className="header__serach__input">
            <input
              type="search"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              placeholder="Search.."
            />
            <div className="header__search__icon">
              <IoSearch />
            </div>
          </div>
          <div
            className={`filter__products container ${
              searchValue ? "filter__products__hide" : ""
            }`}
          >
            {searchValue ? filterProduct : <></>}
          </div>

          <div className="header__mic__icon">
            <FaMicrophone />
          </div>
        </form>
        <div className="header__icons">
          <MdOutlineVideoCall className="header__video__icon" />
          <FaRegBell />
          <FaUser />
        </div>
      </div>
    </header>
  );
};

export default Header;
