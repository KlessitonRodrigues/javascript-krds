import React from "react";

import "./style.sass";

const Header = (props) => (
  <header className="page-header">
    <i className="icon icon-logo" />
    <div className="ph__row">
      <h1 className="ph__title">Academia Olympus</h1>
      <a className="ph__login-btn" onClick={props.loginClick}> {props.loginName}</a>
    </div>
  </header>
);

export default Header;
