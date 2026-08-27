import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

function Cart() {
  const {
    cartItems,
    cartTotal,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
  } = useCart();

  if (cartItems.length === 0) {
    return (
      <main className="cart-page">

        <div className="empty-cart">
          <div className="empty-cart-icon">
            🛒
          </div>

          <h1>Your Cart is Empty</h1>

          <p>
            Looks like you haven't added anything yet.
          </p>

          <Link to="/menu" className="browse-btn">
            Browse Menu
          </Link>
        </div>

      </main>
    );
  }

  return (
    <main className="cart-page">

      <section className="cart-header">
        <p>YOUR ORDER</p>
        <h1>Shopping Cart</h1>
      </section>

      <section className="cart-content">

        <div className="cart-items">

          {cartItems.map((item) => (
            <div className="cart-item" key={item.id}>

              <img
                src={item.image}
                alt={item.name}
              />

              <div className="cart-item-info">

                <h3>{item.name}</h3>

                <p>{item.category}</p>

                <span>
                  ₹{item.price}
                </span>

              </div>

              <div className="quantity-controls">

                <button
                  onClick={() =>
                    decreaseQuantity(item.id)
                  }
                >
                  −
                </button>

                <span>{item.quantity}</span>

                <button
                  onClick={() =>
                    increaseQuantity(item.id)
                  }
                >
                  +
                </button>

              </div>

              <div className="cart-item-total">
                ₹{item.price * item.quantity}
              </div>

              <button
                className="remove-btn"
                onClick={() =>
                  removeFromCart(item.id)
                }
              >
                Remove
              </button>

            </div>
          ))}

        </div>


        <aside className="cart-summary">

          <h2>Order Summary</h2>

          <div className="summary-row">
            <span>Subtotal</span>
            <span>₹{cartTotal}</span>
          </div>

          <div className="summary-row">
            <span>Delivery</span>
            <span>Free</span>
          </div>

          <hr />

          <div className="summary-total">
            <span>Total</span>
            <span>₹{cartTotal}</span>
          </div>

          <button className="checkout-btn">
            Proceed to Checkout
          </button>

        </aside>

      </section>

    </main>
  );
}

export default Cart;