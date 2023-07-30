// SearchPage.js
import React, { useState } from "react";
import RestaurantCard from "./RestaurantCard";

const SearchPage = () => {
  const [restaurants, setRestaurants] = useState([
    {
      id: 1,
      name: "Delicious Bites",
      cuisine: "Italian",
      address: "123 Main St",
      rating: 4.5,
    },
    {
      id: 2,
      name: "Spicy Sizzlers",
      cuisine: "Mexican",
      address: "456 Maple Ave",
      rating: 4.2,
    },
    {
      id: 3,
      name: "Sushi Paradise",
      cuisine: "Indian",
      address: "789 Oak Rd",
      rating: 4.8,
    },
    {
      id: 4,
      name: "Mexican Fiesta",
      cuisine: "Chinese",
      address: "101 Elm St",
      rating: 4.0,
    },
    {
      id: 5,
      name: "Tasty Thai",
      cuisine: "American",
      address: "555 Pine Rd",
      rating: 4.3,
    },
  ]);

  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearch = () => {
    // Filter the restaurants based on the search query
    const filteredRestaurants = restaurants.filter((restaurant) =>
      restaurant.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setRestaurants(filteredRestaurants);
  };

  return (
    <div>
      <h1>Search Page</h1>
      <div>
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearchChange}
          placeholder="Search for restaurants..."
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      {}
      {restaurants.map((restaurant) => (
        <RestaurantCard key={restaurant.id} restaurant={restaurant} />
      ))}
    </div>
  );
};

export default SearchPage;
