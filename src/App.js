import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {
  Hq,
  Dashboard,
  Agent,
  Settings,
  Moduls,
  Orders,
  Products,
  WebStore,
} from "./pages";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route path="/hq" component={Hq} />
        <Route path="/agent" component={Agent} />
        <Route path="/settings" component={Settings} />
        <Route path="/modules" component={Moduls} />
        <Route path="/orders" component={Orders} />
        <Route path="/products" component={Products} />
        <Route path="/webstore" component={WebStore} />
      </Switch>
    </Router>
  );
};

export default App;
