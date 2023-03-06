import "./scss/Shop.scss";
import { useState, useContext } from "react";
import { AppContext } from "../appContext";
import Item from "../components/Item";

function Shop() {
  const context = useContext(AppContext);

  const displayItems = context?.allItems.map((item) => (
    <Item key={item.id} plantData={item} />
  ));

  return <div className="shop-container">{displayItems}</div>;
}

export default Shop;
