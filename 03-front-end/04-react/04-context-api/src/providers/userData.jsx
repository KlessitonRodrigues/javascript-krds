import React, { useState } from "react";

export const UserData = React.createContext({});

const UserDataProvider = ({ children }) => {
  const [userData, setUserData] = useState(undefined);

  setUserData({
    name: "test",
    id: "23",
    fullName: "test user 1",
    age: 20,
    country: "brazil"
  })

  return (
    <UserData.Provider value={{ userData, setUserData }}>
      {children}
    </UserData.Provider>
  );
};

export default UserDataProvider;
