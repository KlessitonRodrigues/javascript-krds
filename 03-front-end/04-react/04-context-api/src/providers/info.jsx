import React, { useState } from "react";

export const UserData = React.createContext({});

const Info = () => {
  const [userData, setUserData] = useState(undefined);
  return (
    <UserData.Provider value={{ userData, setUserData }}></UserData.Provider>
  );
};
