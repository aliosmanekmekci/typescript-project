import { Route, Switch } from "wouter";
import { Dashboard } from "../routes/Dashboard";
import Login from "../routes/Login";
import Cart from "../routes/Cart";
import CartDetails from "../routes/CartDetails/CartDetails";

const Router = () => (
  <Switch>
    <Route path="/" component={Dashboard} />
    <Route path="/login" component={Login} />
    <Route path="/cart" component={Cart} />
    <Route path="/product/:productId" component={CartDetails} />
  </Switch>
);

export default Router;
