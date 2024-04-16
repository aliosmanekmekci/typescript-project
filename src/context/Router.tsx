import { Route, Switch } from "wouter";
import Header from "../component/Header";
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
    </Switch>
  </>
);

export default Router;
