import React from "react";
import ReactDOM from "react-dom";
import Logo from './Logo'
import UserMenu from './UserMenu'

function App() {
  return (
    <div className="header">
      <Logo />
      <UserMenu />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
