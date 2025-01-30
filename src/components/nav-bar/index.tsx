import { FC, useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { logoutBySessionDelete } from "../../lib/appwrite";

import { useCartDrawer } from "../../hooks/cart";
import { UserAuthContext } from "../../providers/user-auth-provider/user-auth-context";
import CartDrawer from "../cart-panel/index";
import toast from "react-hot-toast";
import { CartContext } from "../../providers/cart-provider/cart-context";

const Header: FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { state: { totalQuantity }} = useContext(CartContext);
  const { toggleCartPanel } = useCartDrawer();
  const { user, setUser } = useContext(UserAuthContext);

  const isAuthPage =
    location.pathname === "/login" || location.pathname === "/signup";

  /**
   * Handles user logout by deleting the current session, updating user state,
   * and redirecting to the login page.
   *
   * @throws Will log an error to the console if the logout process fails.
   */

  async function handleLogout() {
    try {
      logoutBySessionDelete();
      setUser(null);
      navigate("/login");
    } catch (error) {
      console.error(error);
      toast.error("Error while logging out!");
    }
  }

  return (
    <nav className="bg-gray-600 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo Section */}
          <div className="flex items-center">
            <Link to="/" className="text-white font-bold text-xl">
              <img className="h-8 w-8" src="/vite.svg" alt="Logo" />
            </Link>
            <Link to="/" className="p-1 text-white hover:text-white focus:outline-none focus:ring-offset-gray-800 focus:ring-white">
              Home
            </Link>
          </div>

          {/* Right Section based on auth page or not */}
          {!isAuthPage && (
            <div className="flex items-center space-x-4">
              {/* Cart Panel button */}
              <button
                type="button"
                onClick={toggleCartPanel}
                className="p-1 text-white hover:text-white focus:outline-none focus:ring-offset-gray-800 focus:ring-white"
              >
                <span className="text-lg text-white">🛒</span> Cart
                {totalQuantity > 0 &&<sup className="inline-flex items-center py-0.5 px-1.5 rounded-full text-xs animate-pulse bg-red-500 font-medium text-white">{totalQuantity}</sup>}
              </button>

              {/* Login/Logout based on user login Button */}
              {user ? (
                <button
                  onClick={handleLogout}
                  className="text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700"
                >
                  Logout
                </button>
              ) : (
                <Link
                  to="/login"
                  className="text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700"
                >
                  Login
                </Link>
              )}
            </div>
          )}
        </div>
        {!isAuthPage && <CartDrawer />}
      </div>
    </nav>
  );
};

export default Header;
