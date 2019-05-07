import React from "react";
import Login from "./components/Login/Login";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <Login />
        <p>Test for GitHub PR</p>
      </header>
    </div>
  );
}

export default App;