import { Link, Outlet } from "react-router-dom";
import { Fragment, useContext } from "react";
import { ReactComponent as Logo } from "../../assets/crown.svg";

import { UserContext } from "../../contexts/user.context";
import { signOutUser } from "../../utils/firebase/firebase.utils";

import { CartContext } from "../../contexts/cart.context";

import CartIcon from "../../Components/cart-icon/cart-icon-component";
import CartDropdown from "../../Components/cart-dropdown/cart-dropdown.component";

import NavigationContainer from "./navigation.styles";

const Navigation = () => {
  const { isCartOpen } = useContext(CartContext);

  const { currentUser } = useContext(UserContext);

  return (
    <Fragment>
      <NavigationContainer>
        {/*<Link className="logo-container" to="/">
          <div className="logo">
            <Logo />
          </div>
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            Shop
          </Link>
          {currentUser ? (
            <Link className="nav-link" onClick={signOutUser}>
              Sign Out
            </Link>
          ) : (
            <Link className="nav-link" to="/auth">
              Sign In
            </Link>
          )}
          <CartIcon />
        </div>
          {isCartOpen && <CartDropdown />}*/}
      </NavigationContainer>

      <Outlet />
    </Fragment>
  );
};

export default Navigation;
