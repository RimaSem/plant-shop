import "./scss/Shop.scss";
import { useContext, useLayoutEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { AppContext } from "../appContext";
import Item from "../components/Item";

function Shop() {
  const context = useContext(AppContext);
  const [searchParams, setSearchParams] = useSearchParams();
  const forBeginnersFilter = searchParams.get("forBeginners");
  const petSafeFilter = searchParams.get("isPetSafe");

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });

  function filterItems() {
    if (forBeginnersFilter) {
      return context?.allItems.filter((item) => item.forBeginners === true);
    } else if (petSafeFilter) {
      return context?.allItems.filter((item) => item.isPetSafe === true);
    }
    return context?.allItems;
  }

  const displayItems = filterItems()?.map((item) => (
    <Item key={item.id} plantData={item} />
  ));

  return (
    <div className="shop-container">
      <div className="filter-btns">
        <Link
          to="."
          className={forBeginnersFilter || petSafeFilter ? "" : "selected"}
        >
          All
        </Link>
        <Link
          to="?forBeginners=true"
          className={forBeginnersFilter ? "selected" : ""}
        >
          For Beginners
        </Link>
        <Link to="?isPetSafe=true" className={petSafeFilter ? "selected" : ""}>
          Pet-Friendly
        </Link>
      </div>
      <div className="item-list">{displayItems}</div>
    </div>
  );
}

export default Shop;
