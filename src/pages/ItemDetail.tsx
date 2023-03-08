import "./scss/ItemDetail.scss";
import { useState, useEffect, useContext, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { AppContext } from "../appContext";

function ItemDetail() {
  const [item, setItem] = useState({
    id: 0,
    name: "",
    price: 0,
    img: "",
    description: "",
    isFavorite: false,
    forBeginners: false,
    isPetSafe: false,
  });
  const context = useContext(AppContext);
  const [quantity, setQuantity] = useState(1);
  const minusRef = useRef<HTMLButtonElement>(null);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    context?.allItems.forEach((item) => {
      if (item.id === Number(id)) {
        setItem(item);
      }
    });
  }, []);

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

  return (
    <div className="container">
      <button type="button" className="back-btn" onClick={() => navigate(-1)}>
        &larr; Go Back
      </button>
      <div className="detail-container">
        <img src={item.img} />
        <div className="info-wrapper">
          <h2>{item.name}</h2>
          <div className="plant-type-labels">
            {item.forBeginners && (
              <div className="beginner-friendly">For beginners</div>
            )}
            {item.isPetSafe && <div className="pet-friendly">Pet-friendly</div>}
          </div>
          <div className="price">€{item.price}.00</div>
          <div className="description">{item.description}</div>
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
    </div>
  );
}

export default ItemDetail;
