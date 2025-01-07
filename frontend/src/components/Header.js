import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../App";

const Header = () => {
  const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    navigate("/login");
  };

  return (
    <header className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">DataExpertsIQ</h1>
        <nav>
          <Link to="/" className="mx-2">
            Home
          </Link>
          {!isLoggedIn && (
            <>
              <Link to="/login" className="mx-2">
                Login
              </Link>
              <Link to="/signup" className="mx-2">
                Signup
              </Link>
            </>
          )}
          {isLoggedIn && (
            <button
              className="bg-red-500 text-white px-3 py-1 rounded"
              onClick={handleLogout}
            >
              Logout
            </button>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
