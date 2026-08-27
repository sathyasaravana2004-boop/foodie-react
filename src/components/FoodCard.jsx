import { useState } from "react";
import { useCart } from "../context/CartContext";

function FoodCard({ food }) {
  const { addToCart } = useCart();

  const [added, setAdded] = useState(false);

  const handleAddToCart = () => {
    addToCart(food);

    setAdded(true);

    setTimeout(() => {
      setAdded(false);
    }, 1000);
  };

  return (
    <div className="food-card">
      <img src={food.image} alt={food.name} />

      <div className="food-card-content">

        <div className="food-card-top">
          <h3>{food.name}</h3>
          <span>⭐ {food.rating}</span>
        </div>

        <p>{food.description}</p>

        <div className="food-card-bottom">
          <span className="food-price">
            ₹{food.price}
          </span>

          <button
            className={`add-btn ${added ? "added" : ""}`}
            onClick={handleAddToCart}
          >
            {added ? "✓ Added" : "Add to Cart"}
          </button>
        </div>

      </div>
    </div>
  );
}

export default FoodCard;