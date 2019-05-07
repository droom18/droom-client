import React from "react";
import Login from "./components/Login/Login";
import Navbar from "./components/Navbar/Navbar";
import { Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <div>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={SchoolList} />
          <Route path="/contact" component={Contact} />
        </div>
        <Login />
        <p>Test for GitHub PR</p>
      </header>
    </div>
  );
}

export default App;