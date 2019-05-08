import React from "react";
import Login from "./components/Login/Login";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Schools from "../src/components/School/Schools";
import NewUser from "../src/components/NewUser/NewUser";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Navbar />
          <div>
            <Route exact path="/credentials/loginRoutes" component={Login} />

            <Route exact path="/schools/schoolRoutes" component={Schools} />
            <Route path="/credentials/registerRoutes" component={NewUser} />
            {/* <Route path="/contact" component={Contact} /> */}
          </div>

          <p>Test for GitHub PR</p>
        </header>
      </div>
    </Router>
  );
}

export default App;
