import React from "react";
import { NavLink, Link } from "react-router-dom";

const Header = ({isAuth}) => {
  return (
    <>
       <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo on the left */}
        <div>
          <Link to="/" className="text-white text-lg font-bold">Logo</Link>
        </div>
        
        {/* Navigation links on the right */}
        <div className="flex items-center space-x-4 mr-8">
          <Link to="/" className="text-white text-2xl ">Home</Link>
          {isAuth ? (
            <Link to="/dashboard" className="text-white text-2xl">Dashboard</Link>
          ) : (
            <>
              <Link to="/login" className="text-white text-2xl">Login</Link>
              <Link to="/signup" className="text-white text-2xl">SignUp</Link>
            </>
          )}
        </div>

        {/* Logout button if user is authenticated */}
        {isAuth && (
          <button className="text-white">Logout</button>
        )}
      </div>
    </nav>
    </>
  );
};

export default Header;