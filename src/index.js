// index.js
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { CartProvider } from "./compenents/CartContext"; // Correct the import path

ReactDOM.render(
  <CartProvider>
    <App />
  </CartProvider>,
  document.getElementById("root")
);
