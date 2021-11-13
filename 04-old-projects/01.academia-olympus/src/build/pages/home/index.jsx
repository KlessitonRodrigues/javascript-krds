import React, { useState } from "react";

import "./style.sass";

import Section1 from "./section1";
import Section2 from "./section2";
import Section3 from "./section3";
import Overlay from "../../templates/overlay/index";
import Header from "../../components/header/index";
import Login from "../../components/login/index";
import Footer from "../../components/footer/index";

const Home = () => {
  const [showLogin, setShowLogin] = useState(false);
  return (
    <div className="home-page">
      <Header loginClick={() => setShowLogin(true)} loginName="Login" />
      <Section1 />
      <Section2 />
      <Section3 />
      <Footer />
      <Overlay show={showLogin} setShow={setShowLogin}>
        <Login />
      </Overlay>
    </div>
  );
};

export default Home;
