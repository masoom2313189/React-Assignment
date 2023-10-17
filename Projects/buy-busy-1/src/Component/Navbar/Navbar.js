// custom context hook
import { useAuthValue } from "../../authContext";

// css styles
import styles from "../../styles/navbar.module.css";

// import form react router
import { Outlet, NavLink } from "react-router-dom";

// Navbar Component
export default function Navbar() {
  // user's login status
  const { isLoggedIn, signOut } = useAuthValue();

  return (
    <>
      {/* main container */}
      <div className={styles.navbarContainer}>
        {/* app heading */}
        <div className={styles.appName}>
          <NavLink to="/">
            {/* logo of the app */}
            <i className="fa-solid fa-shop"></i>
            Buy Busy
          </NavLink>
        </div>

        {/* all the navigation link */}
        <div className={styles.navLinks}>
          {/* homepage link */}
          <NavLink to="/">
            <span>
              {/* home logo */}
              <i className="fa-solid fa-house"></i>
              Home
            </span>
          </NavLink>

          {/* myorder link */}
          {/* show when user is logged in */}
          {isLoggedIn && (
            <NavLink to="/myorder">
              <span>
                {/* my order logo */}
                <i className="fa-solid fa-bag-shopping"></i>
                My Order
              </span>
            </NavLink>
          )}

          {/* cart link */}
          {/* show when user is logged in */}
          {isLoggedIn && (
            <NavLink to="/cart">
              <span>
                {/* cart icon */}
                <i className="fa-sharp fa-solid fa-cart-shopping"></i>
                Cart
              </span>
            </NavLink>
          )}

          {/* for signIN and signOut */}
          <NavLink to={!isLoggedIn ? "/signin" : "/"}>
            <span>
              {!isLoggedIn ? (
                <>
                  {/* sign in icon */}
                  <i className="fa-solid fa-right-to-bracket"></i>
                  SignIn
                </>
              ) : (
                <>
                  {/* sign out icon */}
                  <i className="fa-solid fa-right-from-bracket"></i>
                  {/* sign out user  */}
                  <span onClick={signOut}>LogOut</span>
                </>
              )}
            </span>
          </NavLink>
        </div>
      </div>
      {/* render child pages */}
      <Outlet />
    </>
  );
}
