import { useState, useContext, useRef } from "react";
import { AppContext } from "../appContext";

type AddToCartButtonProps = {
  id: string | number | undefined;
};

function AddToCartButton({ id }: AddToCartButtonProps) {
  const [quantity, setQuantity] = useState(1);
  const minusRef = useRef<HTMLButtonElement>(null);
  const context = useContext(AppContext);

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
      <button
        className="add-to-cart-btn"
        type="button"
        onClick={() => context?.addToCart(Number(id), Number(quantity))}
      >
        Add to Cart
      </button>
    </div>
  );
}

export default AddToCartButton;
