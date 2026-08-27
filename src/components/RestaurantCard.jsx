function RestaurantCard({ restaurant }) {
  return (
    <div className="restaurant-card">
      <img
        src={restaurant.image}
        alt={restaurant.name}
      />

      <div className="restaurant-card-content">
        <div className="restaurant-card-top">
          <h3>{restaurant.name}</h3>
          <span>⭐ {restaurant.rating}</span>
        </div>

        <p>
          {restaurant.cuisine} • {restaurant.price}
        </p>

        <p className="restaurant-location">
          📍 {restaurant.location}
        </p>

        <button className="view-btn">
          View Restaurant
        </button>
      </div>
    </div>
  );
}

export default RestaurantCard;