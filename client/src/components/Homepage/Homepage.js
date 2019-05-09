import React from "react";
import { Link } from "react-router-dom";
// import LoginForm from "../LoginForm";

const Homepage = () => {
  return (
    <div className="homepage">
      <h3>Luncher</h3>
      <p>
        There are kids today in this country who go without student lunches.
      </p>

      <p>
        This app allows schools to broadcast the needs of their students by
        declaring a donation amount they would need to be fulfilled in order to
        provide lunches for those that go without.
      </p>

      {/* <LoginForm /> */}

      <div className="homepage-register">
        <p>If you are new to Luncher</p>
        <Link className="sign-up" to="/credentials/registerRoutes">
          click here to create a profile
        </Link>
      </div>
    </div>
  );
};

export default Homepage;
