import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut();
  };

  return (
    <div className="sticky top-0 z-50">
      <div className="relative w-full bg-white shadow-lg ">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 sm:px-6 lg:px-8 ">
          <div className="inline-flex items-center space-x-2">
            <span></span>
            <Link to={"/"}>
              <span className="font-bold text-2xl">Assignment 11</span>
            </Link>
          </div>
          <div className="hidden grow items-start lg:flex">
            <ul className="ml-12 inline-flex space-x-8 ">
              <li>
                <Link
                  to={"/"}
                  className="inline-flex  items-center text-lg font-semibold text-gray-800 hover:text-gray-900"
                >
                  Home
                  <span></span>
                </Link>
              </li>
              <li>
                <Link
                  to={"/about"}
                  className="inline-flex  items-center text-lg font-semibold text-gray-800 hover:text-gray-900"
                >
                  About
                  <span></span>
                </Link>
              </li>
              <li>
                <Link
                  to={"/services"}
                  className="inline-flex  items-center text-lg font-semibold text-gray-800 hover:text-gray-900"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to={"/contact"}
                  className="inline-flex  items-center text-lg font-semibold text-gray-800 hover:text-gray-900"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  to={"/users"}
                  className="inline-flex  items-center text-lg font-semibold text-gray-800 hover:text-gray-900"
                >
                  Users
                </Link>
              </li>
            </ul>
          </div>
          <div className="hidden space-x-2 lg:block">
            {user ? (
              <p></p>
            ) : (
              <Link to={"/register"}>
                <button
                  type="button"
                  className="rounded-md  bg-transparent px-3 py-2 text-lg font-semibold text-black hover:bg-black/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                >
                  Register
                </button>
              </Link>
            )}
            {user ? (
              <button
                type="button"
                onClick={handleLogOut}
                className="rounded-md border border-black px-3 py-2 text-lg font-semibold text-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              >
                Log Out
              </button>
            ) : (
              <Link to={"/login"}>
                <button
                  type="button"
                  className="rounded-md border border-black px-3 py-2 text-lg font-semibold text-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                >
                  Log In
                </button>
              </Link>
            )}
          </div>
          <div className="lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6 cursor-pointer"
            >
              <line x1="4" y1="12" x2="20" y2="12"></line>
              <line x1="4" y1="6" x2="20" y2="6"></line>
              <line x1="4" y1="18" x2="20" y2="18"></line>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
