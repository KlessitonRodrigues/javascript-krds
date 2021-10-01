import React from "react";

import Avatar from "../../components/avatar/index";
import UserDashboard from "../../components/userDashboard/index";
import UserEditor from "../../components/userEditor/index";
import { UserDataProvider } from "../../providers/userData";
import { AuthProvider } from "../../providers/auth";

const Home = () => (
  <div>
    <AuthProvider>
      <Avatar />
    </AuthProvider>
    <UserDashboard />
    <UserEditor show />
  </div>
);

export default Home;
