import "./scss/Cart.scss";
import { useState, useRef, useContext } from "react";
import { AppContext } from "../appContext";
import Icon from "@mdi/react";
import { mdiWindowClose, mdiTrashCanOutline } from "@mdi/js";

function Cart() {
  const context = useContext(AppContext);
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

  return (
    <div className="cart-container">
      <Icon className="close-cart-btn" path={mdiWindowClose} />
      <div className="cart-content">
        <div className="item">
          <Icon className="delete-item-btn" path={mdiTrashCanOutline} />
          <img src={context?.cart.img} alt="" />
          <div className="item-details">
            <h4 className="item-name">{context?.cart.name}</h4>
            <h4>€{context?.cart.price}.00</h4>
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
          </div>
        </div>
        <div className="item">
          <Icon className="delete-item-btn" path={mdiTrashCanOutline} />
          <img src={context?.cart.img} alt="" />
          <div className="item-details">
            <h4 className="item-name">{context?.cart.name}</h4>
            <h4>€{context?.cart.price}.00</h4>
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
          </div>
        </div>
        <div className="item">
          <Icon className="delete-item-btn" path={mdiTrashCanOutline} />
          <img src={context?.cart.img} alt="" />
          <div className="item-details">
            <h4 className="item-name">{context?.cart.name}</h4>
            <h4>€{context?.cart.price}.00</h4>
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
          </div>
        </div>
        <div className="checkout-wrapper">
          <h3>Total: €58.00</h3>
          <button type="button">Checkout</button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
