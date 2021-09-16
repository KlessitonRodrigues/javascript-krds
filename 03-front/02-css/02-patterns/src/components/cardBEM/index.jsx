import React, { useState } from "react";

import "./style.sass";

const cardBEM = () => {
  const [dark, setDark] = useState(false);

  return (
    <div className={"card-bem" + (dark ? " --dark" : "")}>
      <h3 className="__title"> BEM (Block Element Modifie)</h3>
      <div className="__content">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat aliquam
        magni ex sit nostrum iure, veniam earum nam numquam expedita
        necessitatibus, quaerat consequatur quibusdam dolorum aspernatur
        corrupti eos doloribus ad?
      </div>
      <button className="__button" onClick={() => setDark(!dark)}>
        Turn {dark ? "Light" : "Dark"}
      </button>
    </div>
  );
};

export default cardBEM;
