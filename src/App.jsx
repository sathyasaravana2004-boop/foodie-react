import "./App.css";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import { CartProvider } from "./context/CartContext";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Restaurants from "./pages/Restaurants";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <CartProvider>

        <Navbar />

        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route
            path="/restaurants"
            element={<Restaurants />}
          />
          <Route
            path="/contact"
            element={<Contact />}
          />
          <Route path="/cart" element={<Cart />} />
        </Routes>
        <Footer/>

      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
