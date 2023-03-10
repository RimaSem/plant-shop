import "./scss/AddToCartButton.scss";
import { useState, useContext, useRef } from "react";
import { AppContext } from "../appContext";

type AddToCartButtonProps = {
  id: string | number | undefined;
};

function AddToCartButton({ id }: AddToCartButtonProps) {
  const context = useContext(AppContext);
  const [quantity, setQuantity] = useState(1);
  const minusRef = useRef<HTMLButtonElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  function minus() {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
      let copyCart: { id: number; quantity: number; price: number }[] = [];
      context?.cart?.forEach((item) => copyCart.push(item));
      context?.setCart(
        copyCart.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        )
      );
    }
  }

  function plus() {
    setQuantity((prev) => prev + 1);
    let copyCart: { id: number; quantity: number; price: number }[] = [];
    context?.cart?.forEach((item) => copyCart.push(item));
    context?.setCart(
      copyCart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  }

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
        onClick={() =>
          context?.addToCart(
            Number(id),
            Number(quantity),
            Number(context?.allItems?.filter((item) => item.id === id)[0].price)
          )
        }
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
