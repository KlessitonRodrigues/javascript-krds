import React, { useContext } from "react";

import { UserData } from "../../providers/userData";
import "./style.css";

const UserDashboard = () => {
  const userData = useContext(UserData)
  
  return (
    <div className="user-dashboard">
      <div className="__row">
        <span className="__title">Name</span>
        {userData.name}
      </div>
    </div>
  );
};

export default UserDashboard;
