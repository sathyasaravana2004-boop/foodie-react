import { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const { cartCount } = useCart();

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">

      <Link
        to="/"
        className="logo"
        onClick={closeMenu}
      >
        Foodie
      </Link>


      {/* Desktop / Mobile Links */}

      <div
        className={
          menuOpen
            ? "nav-links mobile-open"
            : "nav-links"
        }
      >
        <Link to="/" onClick={closeMenu}>
          Home
        </Link>

        <Link to="/menu" onClick={closeMenu}>
          Menu
        </Link>

        <Link
          to="/restaurants"
          onClick={closeMenu}
        >
          Restaurants
        </Link>

        <Link to="/contact" onClick={closeMenu}>
          Contact
        </Link>

        <Link
          to="/cart"
          className="mobile-cart"
          onClick={closeMenu}
        >
          🛒 Cart

          {cartCount > 0 && (
            <span className="cart-count">
              {cartCount}
            </span>
          )}
        </Link>
      </div>


      {/* Desktop Cart */}

      <Link to="/cart" className="cart desktop-cart">
        🛒 Cart

        {cartCount > 0 && (
          <span className="cart-count">
            {cartCount}
          </span>
        )}
      </Link>


      {/* Mobile Menu Button */}

      <button
        className="menu-toggle"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle navigation menu"
      >
        {menuOpen ? "✕" : "☰"}
      </button>

    </nav>
  );
}

export default Navbar;