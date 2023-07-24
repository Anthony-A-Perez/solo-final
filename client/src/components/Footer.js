import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Auth from "../utils/auth";

const Footer = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  return (
    <footer className="w-100 bg-gray-light-7 pt-3 pb-3 mt-5 display-f">
    <div className="container">
      copyright 2023 solo Designs
      <Link className="ml-5 text-hover-red" onClick={logout} to="/">Logout</Link>
    </div>
    {location.pathname !== '/' && (
          <button
            className="btn-outlined-orange text-blue text-hover-white mr-5"
            onClick={() => navigate(-1)}
          >
            Go Back
          </button>
          
        )}
  </footer>
  );
};

export default Footer;