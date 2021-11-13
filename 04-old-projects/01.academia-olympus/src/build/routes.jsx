import React, { useContext } from "react";
import { HashRouter, Route, Redirect } from "react-router-dom";

import Home from "./pages/home/index";
import Manager from "./pages/manager/index";
import If from "./templates/if";
import { GlobalContext } from "./providers/global";

const Routes = () => {
  const [{ user }] = useContext(GlobalContext);

  return (
    <HashRouter>
      <Route exact path="/home" component={Home} />
      <If test={user.login}>
        <Route exact path="/manager" component={Manager} />
      </If>
      <Redirect from="/" to="/home" />
    </HashRouter>
  );
};

export default Routes;
