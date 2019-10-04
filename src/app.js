import React from "react";
import axios from "axios";
import { Switch, Route, Redirect } from "react-router-dom";
import { Menu } from "./components/organisms/menu";
import { Documentation } from "./components/organisms/documentation";
import ListWithParamsPaginationContainer from "./example/containers/list-with-params-pagination-container";
import ListWithoutParamsPaginationContainer from "./example/containers/list-without-params-pagination-container";

axios.defaults.baseURL = "https://swapi.co/api";

export const App = () => (
  <Menu>
    <Switch>
      <Redirect exact from="/" to="/documentation" />
      <Route path="/documentation">
        <Documentation />
      </Route>
      <Route path="/pagination-with-params">
        <ListWithParamsPaginationContainer />
      </Route>
      <Route path="/pagination-without-params">
        <ListWithoutParamsPaginationContainer />
      </Route>
    </Switch>
  </Menu>
);
