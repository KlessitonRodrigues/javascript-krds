import React, { useContext, useEffect, useState } from "react";

import TextInput from "../../templates/textInput/index";
import FloatRight from "../../templates/floatRight/index";
import { UserDataContext } from "../../providers/userData";

import "./style.css";

/** @type { UserEditor } */
const UserEditor = ({ showState }) => {
  const [userData, setUserData] = useContext(UserDataContext);
  const [formData, setFormData] = useState(userData);

  const handleSaveBtn = () => {
    setUserData(formData);
    showState.setShow(false);
  };

  useEffect(() => setFormData(userData), [userData]);

  return (
    <div className={`user-editor --show-${showState.show}`}>
      <div className="ue__content">
        <FloatRight>
          <span
            className="ue__close-btn"
            onClick={() => showState.setShow(!showState.show)}
          >
            &times;
          </span>
        </FloatRight>
        <TextInput
          label="name"
          value={formData.name}
          onChange={(value) => setFormData({ ...formData, name: value })}
        />
        <TextInput
          label="age"
          type="number"
          value={formData.age}
          onChange={(value) => setFormData({ ...formData, age: value })}
        />
        <TextInput
          label="country"
          value={formData.country}
          onChange={(value) => setFormData({ ...formData, country: value })}
        />
        <span className="ue__send-btn" onClick={() => handleSaveBtn()}>
          Save
        </span>
      </div>
    </div>
  );
};

export default UserEditor;

/** @typedef {( props: {
 * showState: {show: boolean, setShow: function}
 * }) => JSX.Element } UserEditor
 */
