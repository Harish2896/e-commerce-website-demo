import { Outlet } from "react-router-dom";
import { Fragment, useContext } from "react";
import { ReactComponent as Logo } from "../../assets/crown.svg";

import { UserContext } from "../../contexts/user.context";
import { signOutUser } from "../../utils/firebase/firebase.utils";

import { CartContext } from "../../contexts/cart.context";

import CartIcon from "../../Components/cart-icon/cart-icon-component";
import CartDropdown from "../../Components/cart-dropdown/cart-dropdown.component";

import { NavigationContainer, NavLinks } from "./navigation.styles";
import { LogoContainer, NavLink } from "./navigation.styles";

const Navigation = () => {
  const { isCartOpen } = useContext(CartContext);

  const { currentUser } = useContext(UserContext);

  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to="/">
          <div className="logo">
            <Logo />
          </div>
        </LogoContainer>
        <NavLinks>
          <NavLink to="/shop">Shop</NavLink>
          {currentUser ? (
            <NavLink onClick={signOutUser}>Sign Out</NavLink>
          ) : (
            <NavLink to="/auth">Sign In</NavLink>
          )}
          <CartIcon />
        </NavLinks>
        {isCartOpen && <CartDropdown />}
      </NavigationContainer>

      <Outlet />
    </Fragment>
  );
};

export default Navigation;
