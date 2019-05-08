import React from "react";
import { Link } from "react-router-dom";

const Homepage = () => {
  return (
    <div>
      <p>list of schools in need</p>
      <Link className="sign-up" to="/credentials/registerRoutes">
        <button>Create profile</button>
      </Link>
    </div>
  );
};

export default Homepage;
