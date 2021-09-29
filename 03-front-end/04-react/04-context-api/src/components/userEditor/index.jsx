import React, { useState } from "react";

import TextInput from "../../templates/textInput/index";

import "./style.css";

const UserEditor = (props) => {
  const [show, setShow] = useState(props.show || false);
  const [formData, setFormData] = useState({
    fullName: "",
    age: 0,
    country: "",
  });

  return (
    <div className={`user-editor --show-${show}`}>
      <div className="__content">
        <span className="__close-btn" onClick={() => setShow(!show)}>
          &times;
        </span>
        <TextInput
          label="Full name"
          value={formData.fullName}
          onChange={(value) => setFormData({ ...formData, fullName: value })}
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
        <span className="__send-btn">Save</span>
      </div>
    </div>
  );
};

export default UserEditor;
