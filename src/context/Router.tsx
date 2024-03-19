import { Route, Switch } from "wouter";
import { Dashboard } from "../routes/Dashboard";

const Router = () => (
  <Switch>
    <Route path="/" component={Dashboard} />
    <Route path="/about">About Us</Route>
  </Switch>
);

export default Router;
