import React from "react";
import { Route, Switch } from "react-router-dom";
import { Contact } from "./Contact";
import { About } from "./About";
import { Error } from "./Error";
import { Menu1 } from "./Menu1";

export const RouterExample = () => {
  return (
    <>
      <Menu1></Menu1>
      <Switch>
        <Route exact path="/" component={About} />
        <Route path="/contact" component={Contact} />
        <Route component={Error} />
      </Switch>
    </>
  );
};
