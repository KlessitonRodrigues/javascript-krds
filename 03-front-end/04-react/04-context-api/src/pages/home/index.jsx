import React from "react";

import Avatar from "../../components/avatar/index";
import UserDashboard from "../../components/userDashboard/index";
import UserEditor from "../../components/userEditor/index"

const Home = () => (
  <div>
    <Avatar />
    <UserDashboard />
    <UserEditor />
  </div>
);

export default Home;
