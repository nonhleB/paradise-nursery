import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { removeItem, incrementQuantity, decrementQuantity } from '../redux/CartSlice';
import './CartItem.css';

function CartItem() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cartItems = useSelector((state) => state.cart.items);

  const totalQuantity = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const parsePrice = (cost) => parseFloat(cost.replace('$', ''));

  const calculateItemTotal = (item) => {
    return (parsePrice(item.cost) * item.quantity).toFixed(2);
  };

  const calculateTotalAmount = () => {
    return cartItems
      .reduce((sum, item) => sum + parsePrice(item.cost) * item.quantity, 0)
      .toFixed(2);
  };

  const handleIncrement = (name) => {
    dispatch(incrementQuantity(name));
  };

  const handleDecrement = (name) => {
    dispatch(decrementQuantity(name));
  };

  const handleRemove = (name) => {
    dispatch(removeItem(name));
  };

  const handleCheckout = () => {
    alert('Coming Soon!');
  };

  const handleContinueShopping = () => {
    navigate('/products');
  };

  return (
    <div className="cart-container">
      <nav className="navbar">
        <div className="navbar-brand">
          <Link to="/">🌿 Paradise Nursery</Link>
        </div>
        <div className="navbar-links">
          <Link to="/">Home</Link>
          <Link to="/products">Plants</Link>
          <Link to="/cart" className="cart-icon">
            🛒 Cart ({totalQuantity})
          </Link>
        </div>
      </nav>

      <div className="cart-content">
        <h1>Shopping Cart</h1>
        <h2 className="cart-total">Total: ${calculateTotalAmount()}</h2>

        {cartItems.length === 0 ? (
          <p className="empty-cart-message">Your cart is empty.</p>
        ) : (
          <div className="cart-items-list">
            {cartItems.map((item) => (
              <div key={item.name} className="cart-item">
                <img src={item.image} alt={item.name} className="cart-item-thumbnail" />
                <div className="cart-item-details">
                  <h3>{item.name}</h3>
                  <p className="cart-item-unit-price">Unit Price: {item.cost}</p>
                  <div className="quantity-controls">
                    <button onClick={() => handleDecrement(item.name)}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => handleIncrement(item.name)}>+</button>
                  </div>
                  <p className="cart-item-total">
                    Total: ${calculateItemTotal(item)}
                  </p>
                  <button
                    className="delete-button"
                    onClick={() => handleRemove(item.name)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="cart-actions">
          <button className="continue-shopping-button" onClick={handleContinueShopping}>
            Continue Shopping
          </button>
          <button className="checkout-button" onClick={handleCheckout}>
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartItem;