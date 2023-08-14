import { useDispatch, useSelector } from "react-redux";
import {
  addItemsToCart,
  removeItemsFromCart,
  clearItemsFromCart,
} from "../../store/cart/cart.action";
import { selectCartItems } from "../../store/cart/cart.selector";

import "./checkout-item.styles.scss";

const CheckoutItem = ({ cartItem }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);

  const { name, imageUrl, price, quantity } = cartItem;
  const clearItemHandler = () =>
    dispatch(clearItemsFromCart(cartItems, cartItem));
  const removeItemsToCartHandler = () =>
    dispatch(removeItemsFromCart(cartItems, cartItem));
  const addItemsToCartHandler = () =>
    dispatch(addItemsToCart(cartItems, cartItem));

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
