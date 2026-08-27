import { useState } from "react";
import foods from "../data/foods";
import FoodCard from "../components/FoodCard";

function Menu() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = [
    "All",
    "Burgers",
    "Pizza",
    "Indian",
    "Italian",
    "Desserts",
    "Drinks",
  ];

  const filteredFoods =
    selectedCategory === "All"
      ? foods
      : foods.filter(
          (food) => food.category === selectedCategory
        );

  return (
    <main className="menu-page">
      <section className="menu-header">
        <p>EXPLORE OUR MENU</p>
        <h1>Delicious Food</h1>
        <span>
          Choose from our selection of freshly prepared dishes.
        </span>
      </section>

      <section className="menu-content">
        <div className="category-filters">
          {categories.map((category) => (
            <button
              key={category}
              className={
                selectedCategory === category
                  ? "filter-btn active"
                  : "filter-btn"
              }
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="food-grid">
          {filteredFoods.map((food) => (
            <FoodCard key={food.id} food={food} />
          ))}
        </div>

        {filteredFoods.length === 0 && (
          <p className="no-food">
            No food available in this category.
          </p>
        )}
      </section>
    </main>
  );
}

export default Menu;