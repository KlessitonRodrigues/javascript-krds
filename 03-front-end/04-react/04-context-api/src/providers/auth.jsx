import React from "react";

export const AuthContext = React.createContext({});

export const AuthProvider = (props) => {
  const user = {
    name: "Test User",
    id: 23,
    url: "https://cdn.icon-icons.com/icons2/2643/PNG/512/male_boy_person_people_avatar_icon_159358.png",
  };
  return (
    <AuthContext.Provider value={user}>{props.children}</AuthContext.Provider>
  );
};
