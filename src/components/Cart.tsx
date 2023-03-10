import "./scss/Cart.scss";
import { useRef, useContext } from "react";
import { AppContext } from "../appContext";
import Icon from "@mdi/react";
import { mdiWindowClose, mdiTrashCanOutline } from "@mdi/js";

function Cart() {
  const context = useContext(AppContext);
  const minusRef = useRef<HTMLButtonElement>(null);
  const closeRef = useRef<HTMLDivElement>(null);

  function closeCart() {
    const overlay = document.querySelector(".overlay") as HTMLElement;
    const body = document.querySelector("body") as HTMLElement;
    if (closeRef.current) {
      closeRef.current.classList.remove("active");
      overlay.style.visibility = "hidden";
      body.style.overflowY = "visible";
    }
  }

  function removeItem(id: number) {
    let copyCart: { id: number; quantity: number; price: number }[] = [];
    context?.cart?.forEach((item) => copyCart.push(item));
    context?.setCart(copyCart.filter((item) => item.id !== id));
  }

  function minus(id: number, quantity: number) {
    if (quantity > 1) {
      let copyCart: { id: number; quantity: number; price: number }[] = [];
      context?.cart?.forEach((item) => copyCart.push(item));
      context?.setCart(
        copyCart.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        )
      );
    }
  }

  function plus(id: number) {
    let copyCart: { id: number; quantity: number; price: number }[] = [];
    context?.cart?.forEach((item) => copyCart.push(item));
    context?.setCart(
      copyCart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  }

  return (
    <div ref={closeRef} className="cart-container">
      <div className="close-cart-btn" onClick={closeCart}>
        <Icon path={mdiWindowClose} />
      </div>
      <div className="cart-content">
        {!context?.cart?.length ? (
          <h1>Your cart is empty</h1>
        ) : (
          context?.cart?.map((item) => (
            <div key={item.id} className="item">
              <div onClick={() => removeItem(item.id)}>
                <Icon className="delete-item-btn" path={mdiTrashCanOutline} />
              </div>
              <img
                src={
                  context?.allItems?.filter((obj) => obj.id === item.id)[0].img
                }
              />
              <div className="item-details">
                <h4 className="item-name">
                  {
                    context?.allItems?.filter((obj) => obj.id === item.id)[0]
                      .name
                  }
                </h4>
                <h4>
                  €
                  {context?.allItems?.filter((obj) => obj.id === item.id)[0]
                    .price * item.quantity}
                  .00
                </h4>
                <div className="quantity-wrapper">
                  <button
                    ref={minusRef}
                    onClick={() => minus(item.id, item.quantity)}
                    className="quantity-button minus"
                  >
                    −
                  </button>
                  <div className="quantity-value">{item.quantity}</div>
                  <button
                    onClick={() => plus(item.id)}
                    className="quantity-button"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          ))
        )}

        {Number(context?.cart?.length) > 0 && (
          <div className="checkout-wrapper">
            <h3>
              Total: €
              {context?.cart?.reduce((prev, current) => {
                return prev + current.quantity * current.price;
              }, 0)}
              .00
            </h3>
            <button type="button">Checkout</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Cart;
