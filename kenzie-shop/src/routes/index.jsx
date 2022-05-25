import { Route, Switch } from "react-router-dom";
import Login from "../pages/Login";
import Products from "../pages/Products";
import Cart from "../pages/Cart";
function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Login} />
      <Route exact path="/products" component={Products} />
      <Route exact path="/cart" component={Cart} />
    </Switch>
  );
}

export default Routes;
