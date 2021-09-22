import React, { useContext } from "react";

import { AuthContext } from "../../providers/auth";
import "./style.css";

const Avatar = () => {
  const user = useContext(AuthContext);
  return (
    <div className="avatar">
      <div className="__image">
        <img src={user.url} alt="user" />
      </div>
      <div className="__info">
        <span className="__field-name">{user.name}</span>
        <span className="__field-id">ID {user.id}</span>
      </div>
    </div>
  );
};

export default Avatar;
