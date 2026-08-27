import { useState } from "react";
import restaurants from "../data/restaurants";
import RestaurantCard from "../components/RestaurantCard";

function Restaurants() {
  const [search, setSearch] = useState("");
  const [selectedCuisine, setSelectedCuisine] = useState("All");

  const cuisines = [
    "All",
    "Indian",
    "Italian",
    "Multi-cuisine",
  ];

  const filteredRestaurants = restaurants.filter((restaurant) => {
    const matchesSearch = restaurant.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCuisine =
      selectedCuisine === "All" ||
      restaurant.cuisine === selectedCuisine;

    return matchesSearch && matchesCuisine;
  });

  return (
    <main className="restaurants-page">

      {/* Page Header */}

      <section className="restaurants-header">
        <p>DISCOVER</p>

        <h1>Top Restaurants</h1>

        <span>
          Find the perfect place for your next delicious meal.
        </span>
      </section>


      {/* Search & Filters */}

      <section className="restaurant-controls">

        <div className="search-box">
          <input
            type="text"
            placeholder="Search restaurants..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <div className="cuisine-filters">
          {cuisines.map((cuisine) => (
            <button
              key={cuisine}
              className={
                selectedCuisine === cuisine
                  ? "filter-btn active"
                  : "filter-btn"
              }
              onClick={() => setSelectedCuisine(cuisine)}
            >
              {cuisine}
            </button>
          ))}
        </div>

      </section>


      {/* Restaurant Cards */}

      <section className="restaurant-results">

        {filteredRestaurants.length > 0 ? (
          <div className="restaurant-grid">
            {filteredRestaurants.map((restaurant) => (
              <RestaurantCard
                key={restaurant.id}
                restaurant={restaurant}
              />
            ))}
          </div>
        ) : (
          <div className="no-results">
            <h3>No restaurants found</h3>
            <p>
              Try searching for another restaurant or cuisine.
            </p>
          </div>
        )}

      </section>

    </main>
  );
}

export default Restaurants;