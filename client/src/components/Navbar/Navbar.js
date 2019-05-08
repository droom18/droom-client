import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <div>
        <Link className="home" to="/">
          Home
        </Link>
      </div>

      <div>
        <Link className="login" to="/credentials/loginRoutes">
          Login
        </Link>
      </div>

      <div>
        <Link className="sign-up" to="/credentials/registerRoutes">
          Sign Up
        </Link>
      </div>

      <div>
        {/* check api for link for schools */}
        <Link className="school-form" to="/schools/schoolRoutes">
          Participating Schools
        </Link>
        {/* ./donations/donationRoutes */}
      </div>
      <div>
        <Link className="donation-list" to="/donations/donationRoutes">
          Donation List
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
