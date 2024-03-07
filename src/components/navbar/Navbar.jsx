import { ShoppingCartIcon } from "lucide-react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
// import SearchBar from "../searchBar/SearchBar";

// New Navbar
// https://www.material-tailwind.com/docs/react/navbar

const Navbar = () => {
  // get user from localStorage
  const user = JSON.parse(localStorage.getItem("users"));

  // navigate
  const navigate = useNavigate();

  // logout function
  const logout = () => {
    localStorage.clear("users");
    navigate("/login");
  };

  // CartItems
  const cartItems = useSelector((state) => state.cart);

  // navList Data
  const navList = (
    <ul className="flex space-x-3 text-white font-medium text-md px-5 ">
      {/* Home */}
      {/* <li className="hover:underline">
        <Link to={"/"}>Home</Link>
      </li> */}

      {/* All Product */}
      <li className="hover:underline">
        <Link to={"/allproduct"}>All Products</Link>
      </li>

      {/* Cart */}
      <li className="">
        <Link to={"/cart"}>
          <p className="flex flex-row relative">
            <ShoppingCartIcon className="size-4" />
            <sup className="text-xs">{cartItems.length}</sup>
          </p>
        </Link>
      </li>

      {/* Signup */}
      {!user ? (
        <li className="hover:underline">
          <Link to={"/login"}>Login</Link>
        </li>
      ) : null}

      {/* Signup */}
      {!user ? (
        <li className="hover:underline">
          <Link to={"/signup"}>Signup</Link>
        </li>
      ) : null}

      {/* User */}
      {user?.role === "user" && (
        <li className="hover:underline">
          <Link to={"/user-dashboard"}>User</Link>
        </li>
      )}

      {/* Admin */}
      {user?.role === "admin" && (
        <li className="hover:underline">
          <Link to={"/admin-dashboard"}>Admin</Link>
        </li>
      )}

      {/* logout */}
      {user && (
        <li className="hover:underline cursor-pointer" onClick={logout}>
          Logout
        </li>
      )}
    </ul>
  );
  return (
    <nav className="bg-pink-600 sticky top-0">
      {/* main  */}
      <div className="lg:flex container mx-auto lg:justify-between items-center py-3 ">
        {/* left  */}
        <div className="left py-3 lg:py-0">
          <Link to={"/"}>
            <h2 className=" font-bold text-white text-2xl text-center">
              E-Bharat
            </h2>
          </Link>
        </div>

        {/* right  */}
        <div className="right flex justify-center mb-4 lg:mb-0">{navList}</div>

        {/* Search Bar  */}
        {/* <SearchBar /> */}
      </div>
    </nav>
  );
};

export default Navbar;
