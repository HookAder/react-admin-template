import React from "react";
import { Provider } from "react-redux";
import {
  HashRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import store from "./store";
import loadable from "./utils/loadable";
import User from "./pages/User";
import Login from "./pages/Login";

// 懒加载路由
const Home = loadable(import("./pages/Home"));

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route path="/login" exact component={Login} />
          <Route path="/user" component={User} />
          <Route path="/home" component={Home} />
          <Redirect from="/" to="/login" />
        </Switch>
      </Router>
    </Provider>
  );
};

export default App;
