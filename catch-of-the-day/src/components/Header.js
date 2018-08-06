import React from "react";

const Header = props => (
  <header className="top">
    <h1>
      Catch
      <button className="ofThe">
        <button className="of">Of</button>
        <button className="the">The</button>
      </button>
      Day
    </h1>
    <h3 className="tagline">
      <button>{props.tagline}</button>
    </h3>
  </header>
);

export default Header;
