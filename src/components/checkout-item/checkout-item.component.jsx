import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

import "./checkout-item.styles.scss";

const CheckoutItem = ({ cartItem }) => {
  const { addItemsToCart, removeItemsToCart, clearItemsFromCart } =
    useContext(CartContext);
  const { name, imageUrl, price, quantity } = cartItem;
  const clearItemHandler = () => clearItemsFromCart(cartItem);
  const removeItemsToCartHandler = () => removeItemsToCart(cartItem);
  const addItemsToCartHandler = () => addItemsToCart(cartItem);

  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={`${name}`} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={removeItemsToCartHandler}>
          &#10094;
        </div>
        {quantity}
        <div className="arrow" onClick={addItemsToCartHandler}>
          &#10095;
        </div>
      </span>
      <span className="price">${price}</span>
      <span className="remove-button" onClick={clearItemHandler}>
        &#10005;
      </span>
    </div>
  );
};

export default CheckoutItem;
