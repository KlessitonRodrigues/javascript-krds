import React, { useEffect, useState } from "react";

const INITIAL_STATE = {
  id: "01",
  name: "test",
  age: 22,
  country: "brazil",
  url: "https://img.icons8.com/doodle/48/000000/user-male--v1.png",
};

export const UserDataContext = React.createContext({});

export const UserDataProvider = ({ children }) => {
  const [userData, setUserData] = useState(INITIAL_STATE);

  useEffect(() => {
    const data = localStorage.getItem("user_data");
    data && setUserData(JSON.parse(data));
  }, []);

  useEffect(() => {
    localStorage.setItem("user_data", JSON.stringify(userData));
  }, [userData]);

  return (
    <UserDataContext.Provider value={[userData, setUserData]}>
      {children}
    </UserDataContext.Provider>
  );
};
