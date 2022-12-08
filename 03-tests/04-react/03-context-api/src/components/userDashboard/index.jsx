import React, { useContext, useState } from "react";

import UserEditor from "../userEditor/index";
import FloatRight from "../../templates/floatRight/index";
import { UserDataContext } from "../../providers/userData";
import "./style.css";

const UserDashboard = () => {
  const [userDate] = useContext(UserDataContext);
  const [showEditor, setShowEditor] = useState(false);

  return (
    <div className="user-dashboard">
      <div className="ud__row">
        <b className="ud__label">Name</b>
        {userDate.name}
      </div>
      <div className="ud__row">
        <b className="ud__label">Age</b>
        {userDate.age}
      </div>
      <div className="ud__row">
        <b className="ud__label">Country</b>
        {userDate.country}
      </div>
      <FloatRight>
        <button className="ud__edit-btn" onClick={() => setShowEditor(true)}>
          Edit
        </button>
      </FloatRight>
      <UserEditor showState={{ show: showEditor, setShow: setShowEditor }} />
    </div>
  );
};

export default UserDashboard;
