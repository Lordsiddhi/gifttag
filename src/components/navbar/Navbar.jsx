import {
  Button,
  Collapse,
  IconButton,
  MobileNav,
  Navbar,
  Typography,
} from "@material-tailwind/react";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import * as Scroll from "react-scroll";
import { Link as HashLink } from "react-scroll";

const StickyNavbar = () => {
  const [openNav, setOpenNav] = useState(false);

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

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal hover:text-primary"
      >
        <Link to="/allproduct" className="flex items-center">
          Products
        </Link>
      </Typography>

      {user ? (
        <Typography
          as="li"
          variant="small"
          color="blue-gray"
          className="p-1 font-normal hover:text-primary"
        >
          <Link
            to={user.role == "admin" ? "/admin-dashboard" : "/user-dashboard"}
            className="flex items-center"
          >
            Account
          </Link>
        </Typography>
      ) : null}
    </ul>
  );

  return (
    <div className="">
      <Navbar className="sticky top-0 z-10 h-max max-w-full rounded-none px-4 py-2 lg:px-8 lg:py-4">
        <div className="flex items-center justify-between text-blue-gray-900 container mx-auto">
          <Link to="/">
            <Typography className="font-bold space-x-2 text-lg flex flex-row justify-center items-center text-primary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path d="M9.375 3a1.875 1.875 0 0 0 0 3.75h1.875v4.5H3.375A1.875 1.875 0 0 1 1.5 9.375v-.75c0-1.036.84-1.875 1.875-1.875h3.193A3.375 3.375 0 0 1 12 2.753a3.375 3.375 0 0 1 5.432 3.997h3.943c1.035 0 1.875.84 1.875 1.875v.75c0 1.036-.84 1.875-1.875 1.875H12.75v-4.5h1.875a1.875 1.875 0 1 0-1.875-1.875V6.75h-1.5V4.875C11.25 3.839 10.41 3 9.375 3ZM11.25 12.75H3v6.75a2.25 2.25 0 0 0 2.25 2.25h6v-9ZM12.75 12.75v9h6.75a2.25 2.25 0 0 0 2.25-2.25v-6.75h-9Z" />
              </svg>
              <span>GIFT TAG</span>
            </Typography>
          </Link>
          <div className="flex items-center gap-4">
            <div className="mr-4 hidden lg:block">{navList}</div>
            <div className="flex items-center gap-x-1">
              {user ? (
                <Link to="/cart">
                  <Button
                    variant="text"
                    size="sm"
                    className="hidden lg:inline-block"
                  >
                    <span className="flex flex-row relative">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-6 h-6"
                      >
                        <path d="M2.25 2.25a.75.75 0 0 0 0 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 0 0-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 0 0 0-1.5H5.378A2.25 2.25 0 0 1 7.5 15h11.218a.75.75 0 0 0 .674-.421 60.358 60.358 0 0 0 2.96-7.228.75.75 0 0 0-.525-.965A60.864 60.864 0 0 0 5.68 4.509l-.232-.867A1.875 1.875 0 0 0 3.636 2.25H2.25ZM3.75 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM16.5 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z" />
                      </svg>
                      <sup className="absolute right-0 top-0">
                        {cartItems.length}
                      </sup>
                    </span>
                  </Button>
                </Link>
              ) : null}

              {user ? (
                <Button
                  variant=""
                  size="sm"
                  ripple="true"
                  className="hidden bg-primary lg:inline-block shadow-sm"
                  onClick={logout}
                >
                  <span>Logout</span>
                </Button>
              ) : (
                <Link to="/signup">
                  <Button
                    variant=""
                    size="sm"
                    ripple="true"
                    className="hidden bg-primary lg:inline-block shadow-sm"
                  >
                    <span>Sign up</span>
                  </Button>{" "}
                </Link>
              )}
            </div>
            <IconButton
              variant="text"
              className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
              ripple={false}
              onClick={() => setOpenNav(!openNav)}
            >
              {openNav ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </IconButton>
          </div>
        </div>
        <Collapse open={openNav}>
          {navList}
          <div className="flex flex-col items-center justify-center w-full">
            {user ? (
              <Link to="/cart" className="w-full">
                <Button variant="text" size="sm" className="w-full">
                  <span className="flex flex-row items-center justify-center relative">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-6 h-6"
                    >
                      <path d="M2.25 2.25a.75.75 0 0 0 0 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 0 0-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 0 0 0-1.5H5.378A2.25 2.25 0 0 1 7.5 15h11.218a.75.75 0 0 0 .674-.421 60.358 60.358 0 0 0 2.96-7.228.75.75 0 0 0-.525-.965A60.864 60.864 0 0 0 5.68 4.509l-.232-.867A1.875 1.875 0 0 0 3.636 2.25H2.25ZM3.75 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM16.5 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z" />
                    </svg>
                    <sup className="absolute right-[47%] top-0">
                      {cartItems.length}
                    </sup>
                  </span>
                </Button>
              </Link>
            ) : (
              <Link to="/signup" className="w-full">
                <Button
                  variant=""
                  size="sm"
                  ripple="true"
                  className="hidden bg-primary lg:inline-block shadow-sm"
                >
                  <span>Sign up</span>
                </Button>{" "}
              </Link>
            )}

            {user ? (
              <Button
                variant=""
                size="sm"
                ripple="true"
                className="bg-primary w-full"
                onClick={logout}
              >
                <span>Logout</span>
              </Button>
            ) : (
              <Link to="/signup" className="w-full">
                <Button
                  fullWidth
                  variant=""
                  size="sm"
                  ripple="true"
                  className="bg-primary"
                >
                  <span>Sign Up</span>
                </Button>
              </Link>
            )}
          </div>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default StickyNavbar;
