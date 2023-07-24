import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Auth from "../utils/auth";

const Header = () => {
  const [isLoading, setIsLoading] = useState(true); // Initially set to true to indicate loading
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Initially set to false until token is verified

  useEffect(() => {
    // Check if there's a token in localStorage
    const token = localStorage.getItem("id_token");

    // If there's a token and it's not expired, set isLoggedIn to true
    const checkLoggedIn = async () => {
      if (token && !Auth.isTokenExpired(token)) {
        setIsLoggedIn(true);
      }
      setIsLoading(false); // Mark the loading process as complete
    };

    checkLoggedIn();
  }, []); // The empty dependency array ensures the effect runs only once, on component mount

  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
    setIsLoggedIn(false); // Update the isLoggedIn state after logging out
  };

  return (
    <header className="text-orange-light-3 bg-blue-dark-4 o-90 justify-between">
      <div className="container">
        <div>
          <Link to="/">
            <h1 className="font-xxl text-hover-secondary">phoneBook</h1>
          </Link>
        </div>
        <div>
          {isLoading ? (
            // Show a loading indicator or nothing while verifying the token
            <p>Loading...</p>
          ) : isLoggedIn ? (
            // Show the links when isLoggedIn is true
            <>
              <ul className="display-f">
                <li className="ml-1 text-hover-secondary">
                  <Link to="/posts">Posts</Link>
                </li>
                {/* Other links */}
                <li className="ml-1 text-hover-secondary">
                  <Link onClick={logout} to="/">
                    Logout
                  </Link>
                </li>
              </ul>
            </>
          ) : (
            // Show the login and signup links when isLoggedIn is false
            <>
              <ul className="display-f">
                <li className="ml-1 text-hover-secondary">
                  <Link to="/signup">Signup</Link>
                </li>
                <li className="ml-1 text-hover-secondary">
                  <Link to="/logon">Login</Link>
                </li>
              </ul>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
