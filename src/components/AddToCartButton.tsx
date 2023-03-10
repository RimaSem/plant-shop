import { useState, useContext, useRef, SyntheticEvent } from "react";
import { AppContext } from "../appContext";

type AddToCartButtonProps = {
  id: string | number | undefined;
};

function AddToCartButton({ id }: AddToCartButtonProps) {
  const [quantity, setQuantity] = useState(1);
  const minusRef = useRef<HTMLButtonElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
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

  //   function handleButton() {
  //     if (context?.cart?.some((obj) => obj.id === id)) {
  //       if (buttonRef.current) {
  //         buttonRef.current.innerText = "Item Added";
  //         buttonRef.current.disabled = true
  //       }
  //     } else {
  //         if (buttonRef.current) {
  //             buttonRef.current.innerText = "Add to Cart";
  //             buttonRef.current.disabled = false
  //           }
  //     }
  //   }

  return (
    <div className="add-to-cart-wrapper">
      <div className="quantity-wrapper">
        <button
          ref={minusRef}
          onClick={minus}
          className="quantity-button minus"
          disabled={context?.cart?.some((obj) => obj.id === id)}
        >
          −
        </button>
        <div className="quantity-value">{quantity}</div>
        <button
          onClick={plus}
          className="quantity-button"
          disabled={context?.cart?.some((obj) => obj.id === id)}
        >
          +
        </button>
      </div>
      <button
        ref={buttonRef}
        className="add-to-cart-btn"
        type="button"
        onClick={() => context?.addToCart(Number(id), Number(quantity))}
        disabled={context?.cart?.some((obj) => obj.id === id)}
      >
        {context?.cart?.some((obj) => obj.id === id)
          ? "Item Added"
          : "Add to Cart"}
      </button>
    </div>
  );
}

export default AddToCartButton;
