import "./scss/Item.scss";
import { useState, useRef } from "react";
import Icon from "@mdi/react";
import { mdiHeartOutline, mdiHeart } from "@mdi/js";

type plantDataProps = {
  plantData: {
    id: number;
    name: string;
    price: string;
    img: string;
    description: string;
    isFavorite: boolean;
    forBeginners: boolean;
    isPetSafe: boolean;
  };
};

function Item({ plantData }: plantDataProps) {
  // const [name, setName] = useState("");
  // const [price, setPrice] = useState(18);
  const [isFavorite, setIsFavorite] = useState(false);
  const [quantity, setQuantity] = useState(1);

  const minusRef = useRef<HTMLButtonElement>(null);

  function minus() {
    if (quantity > 1) {
      if (quantity === 2 && minusRef.current) {
        minusRef.current.style.color = "rgb(207, 207, 207)";
      }
      setQuantity((prev) => prev - 1);
    }
  }

  function plus() {
    setQuantity((prev) => prev + 1);
    if (minusRef.current) {
      minusRef.current.style.color = "rgb(49, 50, 50)";
    }
  }

  function favorite(e: React.SyntheticEvent) {
    e.stopPropagation();
    setIsFavorite((prev) => !prev);
  }

  return (
    <div className="item-card">
      <div className="heart-icon-wrapper" onClick={favorite}>
        {isFavorite ? (
          <Icon className="heart-icon" path={mdiHeart} size={1} />
        ) : (
          <Icon className="heart-icon" path={mdiHeartOutline} size={1} />
        )}
      </div>

      <img src={plantData.img} />
      <div className="item-info">
        <div className="item-name">{plantData.name}</div>
        <div className="item-price">€{plantData.price}.00</div>
        <div className="add-to-cart-wrapper">
          <div className="quantity-wrapper">
            <button
              ref={minusRef}
              onClick={minus}
              className="quantity-button minus"
            >
              −
            </button>
            <div className="quantity-value">{quantity}</div>
            <button onClick={plus} className="quantity-button">
              +
            </button>
          </div>
          <button className="add-to-cart-btn" type="button">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default Item;
