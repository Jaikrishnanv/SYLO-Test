import React from "react";

const RestaurantCard = ({ restaurant }) => {
  return (
    <div className="restaurant-card">
      <h2>{restaurant.name}</h2>
      <p>Cuisine: {restaurant.cuisine}</p>
      <p>Address: {restaurant.address}</p>
      <p>Rating: {restaurant.rating}</p>
      {}
    </div>
  );
};

export default RestaurantCard;
