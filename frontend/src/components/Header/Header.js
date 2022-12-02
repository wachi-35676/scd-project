import React from "react";
import "./styles.css";

function Header(props) {
  return (
    <div className="Header" data-testid="Header">
        <div className="SubHeading">{props.pageName}</div>
        <div className="MainHeading">My Fitness Diary</div>
    </div>
  );
}

export default Header;