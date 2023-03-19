import "./scss/ItemDetail.scss";
import { useState, useEffect, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { AppContext } from "../appContext";
import AddToCartButton from "../components/AddToCartButton";

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
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    context?.allItems.forEach((item) => {
      if (Number(item.id) === Number(id)) {
        setItem(item);
      }
    });
  }, [context?.cart]);

  return (
    <div className="container">
      <button type="button" className="back-btn" onClick={() => navigate(-1)}>
        &larr; Go Back
      </button>
      <div className="detail-container">
        <img src={item.img} alt="Plant image" />
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
          <AddToCartButton id={item.id} />
        </div>
      </div>
    </div>
  );
}

export default ItemDetail;
