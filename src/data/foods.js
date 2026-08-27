import classic_burger from "../assets/foods/classic_burger.jpeg";
import cheese_burger from "../assets/foods/cheese_burger.jfif";
import chicken_burger from "../assets/foods/chicken_burger.jpg";
import margherita_pizza from "../assets/foods/margherita_pizza.jfif";
import farmhouse_pizza from "../assets/foods/farmhouse_pizza.jfif";
import pepperoni_pizza from "../assets/foods/pepperoni_pizza.jfif";
import chicken_biriyani from "../assets/foods/chicken_biriyani.avif";
import paneer_butter_masala from "../assets/foods/paneer_butter_masala.jfif";
import masala_dosa from "../assets/foods/masala_dosa.jfif";
import butter_chicken from "../assets/foods/butter_chicken.jfif";
import creamy_pasta from "../assets/foods/creamy_pasta.jfif";
import penne_arrabbiata from "../assets/foods/penne_arrabbiata.jfif";
import pesto_pasta from "../assets/foods/pesto_pasta.jfif";
import chocolate_cake from "../assets/foods/chocolate_cake.jfif";
import cheese_cake from "../assets/foods/cheese_cake.jfif";
import brownie_sundae from "../assets/foods/brownie_sundae.jfif";
import fresh_lemonade from "../assets/foods/fresh_lemonade.jfif";
import mango_smoothie from "../assets/foods/mango_smoothie.jfif";
import cold_coffee from "../assets/foods/cold_coffee.jfif";
import strawberry_shake from "../assets/foods/strawberry_shake.jfif";
import french_fries from "../assets/foods/french_fries.jpg";
import garlic_bread from "../assets/foods/garlic_bread.jfif";
const foods = [
  {
    id: 1,
    name: "Classic Burger",
    category: "Burgers",
    description:
      "Juicy grilled burger with fresh vegetables, cheese and special sauce.",
    price: 149,
    rating: 4.8,
    image: classic_burger
  },

  {
    id: 2,
    name: "Cheese Burger",
    category: "Burgers",
    description:
      "Crispy lettuce, grilled patty and melted cheese served in a toasted bun.",
    price: 179,
    rating: 4.7,
    image: cheese_burger
  },

  {
    id: 3,
    name: "Chicken Burger",
    category: "Burgers",
    description:
      "Crispy chicken fillet with lettuce, cheese and creamy mayonnaise.",
    price: 189,
    rating: 4.8,
    image: chicken_burger
  },

  {
    id: 4,
    name: "Margherita Pizza",
    category: "Pizza",
    description:
      "Classic pizza topped with tomato, mozzarella and fresh basil.",
    price: 249,
    rating: 4.7,
    image: margherita_pizza
  },

  {
    id: 5,
    name: "Farmhouse Pizza",
    category: "Pizza",
    description:
      "Loaded with onions, capsicum, mushrooms, tomatoes and mozzarella.",
    price: 299,
    rating: 4.8,
    image: farmhouse_pizza
  },

  {
    id: 6,
    name: "Pepperoni Pizza",
    category: "Pizza",
    description:
      "Classic Italian-style pizza topped with spicy pepperoni and mozzarella.",
    price: 329,
    rating: 4.9,
    image:pepperoni_pizza
  },

  {
    id: 7,
    name: "Chicken Biryani",
    category: "Indian",
    description:
      "Aromatic basmati rice cooked with flavorful spices and tender chicken.",
    price: 199,
    rating: 4.9,
    image: chicken_biriyani
  },

  {
    id: 8,
    name: "Paneer Butter Masala",
    category: "Indian",
    description:
      "Soft paneer cooked in a rich, creamy tomato and butter gravy.",
    price: 219,
    rating: 4.8,
    image: paneer_butter_masala
  },

  {
    id: 9,
    name: "Masala Dosa",
    category: "Indian",
    description:
      "Crispy South Indian dosa filled with spiced potato masala.",
    price: 119,
    rating: 4.7,
    image: masala_dosa
  },

  {
    id: 10,
    name: "Butter Chicken",
    category: "Indian",
    description:
      "Tender chicken pieces cooked in a creamy tomato and butter gravy.",
    price: 249,
    rating: 4.9,
    image: butter_chicken
  },

  {
    id: 11,
    name: "Creamy Pasta",
    category: "Italian",
    description:
      "Creamy pasta prepared with herbs, vegetables and parmesan cheese.",
    price: 229,
    rating: 4.6,
    image: creamy_pasta
  },

  {
    id: 12,
    name: "Penne Arrabbiata",
    category: "Italian",
    description:
      "Penne pasta tossed in a spicy tomato sauce with garlic and herbs.",
    price: 199,
    rating: 4.6,
    image: penne_arrabbiata
  },

  {
    id: 13,
    name: "Pesto Pasta",
    category: "Italian",
    description:
      "Fresh pasta tossed with basil pesto, parmesan and roasted vegetables.",
    price: 249,
    rating: 4.7,
    image: pesto_pasta
  },

  {
    id: 14,
    name: "Chocolate Cake",
    category: "Desserts",
    description:
      "Rich chocolate cake covered with smooth chocolate frosting.",
    price: 129,
    rating: 4.8,
    image: chocolate_cake
  },

  {
    id: 15,
    name: "Cheesecake",
    category: "Desserts",
    description:
      "Creamy cheesecake with a buttery biscuit base and berry topping.",
    price: 159,
    rating: 4.8,
    image: cheese_cake
  },

  {
    id: 16,
    name: "Brownie Sundae",
    category: "Desserts",
    description:
      "Warm chocolate brownie served with vanilla ice cream and chocolate sauce.",
    price: 149,
    rating: 4.9,
    image: brownie_sundae
  },

  {
    id: 17,
    name: "Fresh Lemonade",
    category: "Drinks",
    description:
      "Refreshing homemade lemonade served chilled with fresh lemon.",
    price: 79,
    rating: 4.5,
    image: fresh_lemonade
  },

  {
    id: 18,
    name: "Mango Smoothie",
    category: "Drinks",
    description:
      "Creamy mango smoothie prepared with fresh ripe mangoes.",
    price: 119,
    rating: 4.7,
    image: mango_smoothie 
  },

  {
    id: 19,
    name: "Cold Coffee",
    category: "Drinks",
    description:
      "Chilled creamy coffee blended with milk and a touch of sweetness.",
    price: 109,
    rating: 4.6,
    image: cold_coffee
  },

  {
    id: 20,
    name: "Strawberry Shake",
    category: "Drinks",
    description:
      "Smooth and creamy strawberry milkshake made with fresh strawberries.",
    price: 129,
    rating: 4.8,
    image: strawberry_shake
  },

  {
    id: 21,
    name: "French Fries",
    category: "Sides",
    description:
      "Golden crispy fries seasoned with herbs and a touch of salt.",
    price: 99,
    rating: 4.6,
    image: french_fries
  },

  {
    id: 22,
    name: "Garlic Bread",
    category: "Sides",
    description:
      "Toasted bread topped with garlic butter, herbs and melted cheese.",
    price: 119,
    rating: 4.7,
    image: garlic_bread
  },
];

export default foods;