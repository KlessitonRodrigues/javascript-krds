import React from "react";

import Avatar from "../../components/avatar/index";
import UserDashboard from "../../components/userDashboard/index";
import { UserDataProvider } from "../../providers/userData";

const Home = () => (
  <div>
    <UserDataProvider>
      <Avatar />
      <UserDashboard />
    </UserDataProvider>
  </div>
);

export default Home;
