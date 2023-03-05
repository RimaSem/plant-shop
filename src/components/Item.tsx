import "./scss/Item.scss";

function Item() {
  return (
    <div className="item-card">
      <img src="../../public/marble_queen.jpg" />
      <div className="item-info">
        <div className="item-name">Marble Queen Pothos</div>
        <div className="item-price">€18.00</div>
        <div className="add-to-cart-wrapper">
          <div className="quantity-wrapper">
            <button className="quantity-button">−</button>
            <div className="quantity-value">1</div>
            <button className="quantity-button">+</button>
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
