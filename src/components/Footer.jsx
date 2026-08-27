import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* Brand */}

        <div className="footer-brand">
          <Link to="/" className="footer-logo">
            Foodie
          </Link>

          <p>
            Discover delicious food and the best restaurants
            around you.
          </p>
        </div>


        {/* Quick Links */}

        <div className="footer-column">
          <h3>Quick Links</h3>

          <Link to="/">Home</Link>
          <Link to="/menu">Menu</Link>
          <Link to="/restaurants">Restaurants</Link>
          <Link to="/contact">Contact</Link>
        </div>


        {/* Contact */}

        <div className="footer-column">
          <h3>Contact</h3>

          <p>📍 Bangalore, India</p>
          <p>📞 +91 98765 43210</p>
          <p>✉️ hello@foodie.com</p>
        </div>


        {/* Social */}

        <div className="footer-column">
          <h3>Follow Us</h3>

          <div className="social-links">
            <a href="#" aria-label="Instagram">
              Instagram
            </a>

            <a href="#" aria-label="Facebook">
              Facebook
            </a>

            <a href="#" aria-label="Twitter">
              Twitter
            </a>
          </div>
        </div>

      </div>


      <div className="footer-bottom">
        <p>
          © 2026 Foodie. All rights reserved.
        </p>
      </div>

    </footer>
  );
}

export default Footer;