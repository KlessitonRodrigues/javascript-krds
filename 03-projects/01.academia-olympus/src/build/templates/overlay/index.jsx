import React from "react";

import "./style.sass";

function stopScroll(stop) {
  const bodyStyle = document.querySelector("body").style;
  if (stop) {
    bodyStyle.overflow = "hidden";
    bodyStyle.width = "100vw";
  } else {
    bodyStyle.overflow = "";
    bodyStyle.width = "";
  }
}

/** @type { Overlay } */
const Overlay = ({ show, setShow, children }) => {
  stopScroll(show);
  return (
    <div className={`overlay-tool --active-${show}`}>
      <div className="ot__cover" onClick={() => setShow(false)} />
      <div className="ot__content scroll-bar">{children}</div>
    </div>
  );
};

export default Overlay;

/** @typedef {( props: {
 * show: boolean
 * setShow: function
 * }) => JSX.Element } Overlay
 * */
