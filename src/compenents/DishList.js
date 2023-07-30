import React from "react";

const DishList = ({ dishes }) => {
  return (
    <div>
      <h3>Dishes</h3>
      {dishes.length > 0 ? (
        <ul>
          {dishes.map((dish) => (
            <li key={dish.id}>
              {dish.name} - ${dish.price.toFixed(2)}
            </li>
          ))}
        </ul>
      ) : (
        <p>No dishes found.</p>
      )}
    </div>
  );
};

export default DishList;