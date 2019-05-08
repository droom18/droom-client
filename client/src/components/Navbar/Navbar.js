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
        <Link className="school-form" to="/schools/schoolRoutes">
          Participating Schools
        </Link>
      </div>
      <div>
        <Link className="donation-list" to="/donations/donationRoutes">
          Donation List
        </Link>
      </div>
      <div>
        <Link className="admin" to="/admins/adminRoutes">
          Admin page
        </Link>
      </div>
      <div>
        <Link className="add-school" to="/donors/donorRoutes">
          Add School
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
