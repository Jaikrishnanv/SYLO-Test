import React from "react";
import { useCart } from "./CartContext";

const CartPage = () => {
  const { cartItems, removeFromCart } = useCart();

  const handleRemoveFromCart = (itemId) => {
    removeFromCart(itemId);
  };

  // Calculate the total amount in the cart
  const totalAmount = cartItems.reduce((total, item) => total + item.price, 0);

  return (
    <div>
      <h2>Shopping Cart</h2>
      {cartItems.map((item) => (
        <div key={item.id}>
          <p>{item.name} - ${item.price}</p>
          <button onClick={() => handleRemoveFromCart(item.id)}>Remove</button>
        </div>
      ))}
      <p>Total: ${totalAmount}</p>
      {/* Add checkout functionality */}
    </div>
  );
};

export default CartPage;