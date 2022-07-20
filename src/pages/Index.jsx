import React from "react";
import { Link } from "react-router-dom";
import logo from "../logo.svg";

function Index() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>{`Hello ${process.env.REACT_APP_NAME}`}</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Link className="App-link" to="/contact">
          Go to contact page
        </Link>
      </header>
    </div>
  );
}

export default Index;
