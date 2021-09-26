import React, { useContext } from "react";

import FlatInput from "../../templates/flatInput/index"
import { UserData } from "../../providers/info";
import "./style.css"

const UserDashboard = () => {
  const userData = useContext(UserData);

  return (
    <div className="user-dashboard">
      <div className="__row">
        <span className="__title">Name</span>
        {userData.name}
      </div>
      <FlatInput label="Name" holder="test"/>
    </div>
  );
};

export default UserDashboard;
