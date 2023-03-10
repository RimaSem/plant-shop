import "./scss/Item.scss";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Icon } from "@mdi/react";
import { mdiHeartOutline, mdiHeart } from "@mdi/js";
import { AppContext } from "../appContext";
import AddToCartButton from "./AddToCartButton";

type plantDataProps = {
  plantData: {
    id: number;
    name: string;
    price: number;
    img: string;
    description: string;
    isFavorite: boolean;
    forBeginners: boolean;
    isPetSafe: boolean;
  };
};

function Item({ plantData }: plantDataProps) {
  const [itemID, setItemID] = useState(plantData.id);
  const context = useContext(AppContext);

  function favorite(e: React.SyntheticEvent) {
    e.stopPropagation();
    context?.toggleFavorite(itemID);
  }

  return (
    <div className="item-card">
      <div className="heart-icon-wrapper" onClick={favorite}>
        {plantData.isFavorite ? (
          <Icon className="heart-icon" path={mdiHeart} size={1} />
        ) : (
          <Icon className="heart-icon" path={mdiHeartOutline} size={1} />
        )}
      </div>

      <Link to={`/plant-shop/shop/${plantData.id}`}>
        <img src={plantData.img} />
      </Link>
      <div className="item-info">
        <Link to={`/plant-shop/shop/${plantData.id}`}>
          <div className="item-name">{plantData.name}</div>
        </Link>
        <div className="item-price">€{plantData.price}.00</div>
        <AddToCartButton id={itemID} />
      </div>
    </div>
  );
}

export default Item;
