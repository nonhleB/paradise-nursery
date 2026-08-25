import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../redux/CartSlice';
import './ProductList.css';

const plantsData = [
  {
    category: 'Air Purifying Plants',
    plants: [
      { name: 'Snake Plant', image: 'https://images.unsplash.com/photo-1593482892290-f54927ae1bb6?auto=format&fit=crop&w=400&q=80', cost: '$25' },
      { name: 'Spider Plant', image: 'https://images.unsplash.com/photo-1572688484438-313a6e50c333?auto=format&fit=crop&w=400&q=80', cost: '$18' },
      { name: 'Peace Lily', image: 'https://images.unsplash.com/photo-1593691509543-c55fb32d8de5?auto=format&fit=crop&w=400&q=80', cost: '$22' },
      { name: 'Boston Fern', image: 'https://images.unsplash.com/photo-1614594975525-e45190c55d0b?auto=format&fit=crop&w=400&q=80', cost: '$20' },
      { name: 'Rubber Plant', image: 'https://images.unsplash.com/photo-1620127252536-03bdfcf6d5b1?auto=format&fit=crop&w=400&q=80', cost: '$28' },
      { name: 'Aloe Vera', image: 'https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&w=400&q=80', cost: '$15' },
    ],
  },
  {
    category: 'Succulents',
    plants: [
      { name: 'Echeveria', image: 'https://images.unsplash.com/photo-1509937528035-ad76254b0356?auto=format&fit=crop&w=400&q=80', cost: '$12' },
      { name: 'Jade Plant', image: 'https://images.unsplash.com/photo-1459156212016-c812468e2115?auto=format&fit=crop&w=400&q=80', cost: '$16' },
      { name: 'Haworthia', image: 'https://images.unsplash.com/photo-1509587584298-0f3b3a3a1797?auto=format&fit=crop&w=400&q=80', cost: '$14' },
      { name: 'Barrel Cactus', image: 'https://images.unsplash.com/photo-1459156212016-c812468e2115?auto=format&fit=crop&w=400&q=80', cost: '$18' },
      { name: 'String of Pearls', image: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=400&q=80', cost: '$20' },
      { name: 'Zebra Plant', image: 'https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&w=400&q=80', cost: '$17' },
    ],
  },
  {
    category: 'Flowering Plants',
    plants: [
      { name: 'Orchid', image: 'https://images.unsplash.com/photo-1524598171353-e5652c46c9e8?auto=format&fit=crop&w=400&q=80', cost: '$30' },
      { name: 'African Violet', image: 'https://images.unsplash.com/photo-1463154545680-d59320fd685d?auto=format&fit=crop&w=400&q=80', cost: '$16' },
      { name: 'Hibiscus', image: 'https://images.unsplash.com/photo-1597305877032-0668b3c6413a?auto=format&fit=crop&w=400&q=80', cost: '$24' },
      { name: 'Begonia', image: 'https://images.unsplash.com/photo-1533616688419-b7a585564566?auto=format&fit=crop&w=400&q=80', cost: '$19' },
      { name: 'Geranium', image: 'https://images.unsplash.com/photo-1509937528035-ad76254b0356?auto=format&fit=crop&w=400&q=80', cost: '$15' },
      { name: 'Anthurium', image: 'https://images.unsplash.com/photo-1463320726281-696a485928c7?auto=format&fit=crop&w=400&q=80', cost: '$26' },
    ],
  },
];

function ProductList() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const [addedItems, setAddedItems] = useState({});

  const totalQuantity = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));
    setAddedItems((prev) => ({ ...prev, [plant.name]: true }));
  };

  return (
    <div className="product-list-container">
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

      <div className="product-list-content">
        {plantsData.map((categoryGroup) => (
          <div key={categoryGroup.category} className="category-section">
            <h2>{categoryGroup.category}</h2>
            <div className="plant-grid">
              {categoryGroup.plants.map((plant) => (
                <div key={plant.name} className="plant-card">
                  <img src={plant.image} alt={plant.name} className="plant-thumbnail" />
                  <h3>{plant.name}</h3>
                  <p className="plant-price">{plant.cost}</p>
                  <button
                    className="add-to-cart-button"
                    disabled={!!addedItems[plant.name]}
                    onClick={() => handleAddToCart(plant)}
                  >
                    {addedItems[plant.name] ? 'Added to Cart' : 'Add to Cart'}
                  </button>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;