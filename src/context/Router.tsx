import { Route, Switch } from "wouter";

import Header from "../component/Header";
import CategoryPage from "../component/CategoryPage"

import Cart from "../routes/Cart";
import CartDetails from "../routes/CartDetails/CartDetails";
import { Dashboard } from "../routes/Dashboard";
import Login from "../routes/Login";

const Router = () => (
  <>
    <Header />
    <Switch>
      <Route path="/" component={Dashboard} />
      <Route path="/login" component={Login} />
      <Route path="/cart" component={Cart} />
      <Route path="/cart/:id" component={CartDetails} />
      <Route path="/category/:category" component={CategoryPage} />
    </Switch>
  </>
);

export default Router;
