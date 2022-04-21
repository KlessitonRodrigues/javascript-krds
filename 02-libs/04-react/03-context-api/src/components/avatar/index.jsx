import React, { useContext } from "react";

import { UserDataContext } from "../../providers/userData";
import "./style.css";

const Avatar = () => {
  const [userData] = useContext(UserDataContext);
  return (
    <div className="avatar-panel">
      <div className="ap__image">
        <img src={userData.url} alt="user" />
      </div>
      <div className="ap__info">
        <span className="ap__field-name">{userData.name}</span>
        <span className="ap__field-country">{userData.country}</span>
      </div>
    </div>
  );
};

export default Avatar;
