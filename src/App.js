import { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.scss";
import Auth from "./container/Auth";
import HomeTemplate from "./container/HomeTemplate";
import Login from "./container/Login";
import PageNotFound from "./container/PageNotFound";
import Signup from "./container/Signup";
import { routeHome } from "./route";


class App extends Component {
  showLayoutHome = (routes) => {
    if (routes && routes.length > 0) {
      return routes.map((item, index) => {
        return (
          <HomeTemplate
            key={index}
            exact={item.exact}
            path={item.path}
            component={item.component}
          />
        );
      });
    }
  };
  render() {
    return (
      <BrowserRouter>
        <Switch>
          {this.showLayoutHome(routeHome)}
          <Route path="/login" component={Login} />
          <Route path="/sign-up" component={Signup} />
          <Route path="/auth" component={Auth} />
          <Route path="" component={PageNotFound} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
