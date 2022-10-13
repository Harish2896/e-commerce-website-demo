import "./checkout.styles.scss";

import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

import CheckoutItem from "../../Components/checkout-item/checkout-item.component";

const Checkout = () => {
  const { cartItems, cartTotal } = useContext(CartContext);

  // console.log(cartItems);
  // eslint-disable-next-line no-lone-blocks
  {
    /*
  const totalPrice = cartItems.reduce(
    (total, cartItem) => total + cartItem.quantity * cartItem.price,
    0
    );
  */
  }

  // eslint-disable-next-line no-lone-blocks
  {
    /* const remove = (item) => {
    return setCartItems(
      cartItems.map((cartItem) =>
        cartItem.id === item.id && cartItem.quantity > 1
          ? { ...cartItem, quantity: cartItem.quantity - 1 }
          : cartItem
      )
    );
  }; */
  }
  // eslint-disable-next-line no-lone-blocks
  {
    /*
  const deleteItem = (item) => {
    cartItems.splice(cartItems.indexOf(item), 1);
    const newCartitems = cartItems.map((cartItem) => {
      return cartItem;
    });
    return setCartItems(newCartitems);
  };
*/
  }

  return (
    <div className="checkout-container">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map((cartItem) => {
        return <CheckoutItem key={cartItem.id} cartItem={cartItem} />;
      })}
      <span className="total">Total: ${cartTotal}</span>
    </div>
  );
};

export default Checkout;
