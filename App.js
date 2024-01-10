import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQP-Stp3j9l7A7FmeODEQvEwQcBTz_-55i1uZrCXG6lyA&s"></img>
      </div>
      <div className="navitems">
        <ul>
            <li>Home</li>
            <li>About</li>
            <li>contact</li>
            <li>cart</li>

        </ul>
      </div>
    </div>
  );
};

const Applayout = () => {
  return <div className="app">
    <Header/>
  </div>;
};
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<Applayout/>)
