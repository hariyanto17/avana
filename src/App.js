import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { MyOrders, Dashboard, MyProduct, Settings } from "./pages";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route path="/myorders" component={MyOrders} />
        <Route path="/myProduct" component={MyProduct} />
        <Route path="/settings" component={Settings} />
      </Switch>
    </Router>
  );
};

export default App;
