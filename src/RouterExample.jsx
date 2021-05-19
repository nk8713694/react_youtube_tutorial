import React from "react";
import { Route, Switch } from "react-router-dom";
import { Contact } from "./Contact";
import { About } from "./About";
import { Error } from "./Error";
export const RouterExample = () => {
  return (
    <>
      <Switch>
        <Route exact path="/" component={About} />
        <Route path="/contact" component={Contact} />
        <Route component={Error} />
      </Switch>
    </>
  );
};
