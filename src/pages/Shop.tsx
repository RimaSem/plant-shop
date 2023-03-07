import "./scss/Shop.scss";
import { useState, useContext } from "react";
import { AppContext } from "../appContext";
import Item from "../components/Item";

function Shop() {
  const context = useContext(AppContext);

  const displayItems = context?.allItems.map((item) => (
    <Item key={item.id} plantData={item} />
  ));

  return (
    <div className="shop-container">
      <div className="filter-btns">
        <button type="button" className="filter-all-btn">
          All
        </button>
        <button type="button" className="filter-for-beginners-btn">
          For Beginners
        </button>
        <button type="button" className="filter-pet-friendly-btn">
          Pet-Friendly
        </button>
      </div>
      <div className="item-list">{displayItems}</div>
    </div>
  );
}

export default Shop;
