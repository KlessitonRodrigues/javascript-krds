import React from "react";

import "./style.sass";

const Service = (props) => (
  <div className="service-card">
    <div className="sc__title">
      <h3>{props.title}</h3>
      <hr />
    </div>
    <img className="sc__img" src={props.img} alt={props.alt} />
    <div className="sc__content">
      <ul>{props.children}</ul>
    </div>
  </div>
);

export default Service;
