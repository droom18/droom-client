import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <div>
        <Link className=" navLink home" to="/">
          Home
        </Link>
      </div>

      <div>
        <Link className="navLink login" to="/credentials/loginRoutes">
          Login
        </Link>
      </div>

      <div>
        <Link className="navLink sign-up" to="/credentials/registerRoutes">
          Sign Up
        </Link>
      </div>

      <div>
        <Link className="navLink school-form" to="/schools/schoolRoutes">
          Participating Schools
        </Link>
      </div>
      <div>
        <Link className="navLink donation-list" to="/donations/donationRoutes">
          Donation List
        </Link>
      </div>
      <div>
        <Link className="navLink admin" to="/admins/adminRoutes">
          Admin page
        </Link>
      </div>
      <div>
        <Link className="navLink add-school" to="/donors/donorRoutes">
          Add School
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
