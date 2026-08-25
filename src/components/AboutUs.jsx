import React from 'react';
import { Link } from 'react-router-dom';
import './AboutUs.css';

function AboutUs() {
  return (
    <div className="about-us-container">
      <nav className="navbar">
        <div className="navbar-brand">
          <Link to="/">🌿 Paradise Nursery</Link>
        </div>
        <div className="navbar-links">
          <Link to="/">Home</Link>
          <Link to="/products">Plants</Link>
          <Link to="/cart">Cart</Link>
        </div>
      </nav>

      <div className="about-us-content">
        <h1>About Paradise Nursery</h1>
        <p>
          Paradise Nursery was founded with a simple belief: every home deserves
          a little more green. We are a small team of plant enthusiasts dedicated
          to bringing healthy, beautiful houseplants directly to your doorstep.
        </p>
        <p>
          Each plant in our collection is hand-selected and nurtured with care
          before it reaches you. Whether you're a seasoned plant parent or just
          starting your journey into indoor gardening, we're here to help you
          find the perfect green companion for your space.
        </p>
        <p>
          Our mission is to make plant ownership accessible, sustainable, and
          joyful — one leaf at a time.
        </p>
        <Link to="/products" className="about-us-button">
          Browse Our Plants
        </Link>
      </div>
    </div>
  );
}

export default AboutUs;