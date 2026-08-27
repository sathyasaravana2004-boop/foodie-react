import { Link } from "react-router-dom";
import FoodCard from "../components/FoodCard";
import RestaurantCard from "../components/RestaurantCard";

import  foods  from "../data/foods";
import  restaurants  from "../data/restaurants";

function Home() {
  return (
    <main>

      {/* ================= HERO ================= */}

      <section className="home-hero">

        <div className="hero-overlay"></div>

        <div className="hero-content">

          <p className="hero-tagline">
            GOOD FOOD. GOOD MOOD.
          </p>

          <h1>
            Discover Your
            <br />
            Next Favorite Meal
          </h1>

          <p className="hero-description">
            Explore delicious dishes and discover
            the best restaurants around you.
          </p>

          <div className="hero-buttons">

            <Link
              to="/menu"
              className="primary-btn"
            >
              Explore Menu
            </Link>

            <Link
              to="/restaurants"
              className="secondary-btn"
            >
              Find Restaurants
            </Link>

          </div>

        </div>

      </section>


      {/* ================= FEATURED FOOD ================= */}

      <section className="home-section">

        <div className="section-heading">

          <div>
            <p className="section-label">
              OUR SPECIALS
            </p>

            <h2>
              Popular Dishes
            </h2>
          </div>

          <Link
            to="/menu"
            className="view-all"
          >
            View All →
          </Link>

        </div>


        <div className="food-grid">

          {foods.slice(0, 3).map((food) => (
            <FoodCard
              key={food.id}
              food={food}
            />
          ))}

        </div>

      </section>


      {/* ================= RESTAURANTS ================= */}

      <section className="home-section restaurants-section">

        <div className="section-heading">

          <div>
            <p className="section-label">
              EXPLORE
            </p>

            <h2>
              Top Restaurants
            </h2>
          </div>

          <Link
            to="/restaurants"
            className="view-all"
          >
            View All →
          </Link>

        </div>


        <div className="restaurant-grid">

          {restaurants.slice(0, 3).map(
            (restaurant) => (
              <RestaurantCard
                key={restaurant.id}
                restaurant={restaurant}
              />
            )
          )}

        </div>

      </section>


      {/* ================= CTA ================= */}

      <section className="home-cta">

        <div className="cta-content">

          <p className="section-label">
            READY TO EAT?
          </p>

          <h2>
            Your next delicious
            <br />
            meal is waiting.
          </h2>

          <p>
            Browse our menu and discover
            something you'll love.
          </p>

          <Link
            to="/menu"
            className="primary-btn"
          >
            Order Now
          </Link>

        </div>

      </section>

    </main>
  );
}

export default Home;