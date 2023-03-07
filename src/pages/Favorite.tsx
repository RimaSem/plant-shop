import "./scss/Favorite.scss";
import { useContext } from "react";
import { AppContext } from "../appContext";
import Item from "../components/Item";

function Favorite() {
  const context = useContext(AppContext);

  const displayItems = context?.allItems
    .filter((item) => item.isFavorite)
    .map((item) => <Item key={item.id} plantData={item} />);

  return (
    <div className="favorite-container">
      {displayItems?.length ? (
        <h3>Your Favorite Plants</h3>
      ) : (
        <h3>No favorite plants &#128533;</h3>
      )}
      <div className="favorite-list">{displayItems}</div>
    </div>
  );
}

export default Favorite;
