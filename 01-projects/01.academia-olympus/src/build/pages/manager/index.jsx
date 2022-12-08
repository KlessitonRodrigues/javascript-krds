import React, { useContext } from "react";

import "./style.sass";

import Header from "../../components/header/index";
import SidePanel from "../../components/sidepanel/index";
import DashBoard from "../../components/dashBoard/index";
import { GlobalContext } from "../../providers/global/index";

const Manager = (props) => {
  const [state] = useContext(GlobalContext);
  const { name } = state.user;

  return (
    <div className="manager-page">
      <Header
        loginClick={() => (window.location.hash = "home")}
        loginName={`Sair (${name})`}
      />
      <div className="mp__row">
        <SidePanel />
        <DashBoard />
      </div>
    </div>
  );
};

export default Manager;
