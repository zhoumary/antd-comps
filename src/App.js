import React, { Suspense, lazy } from "react";
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const LoginStandard = lazy(() => import("./pages/Login"));
const Register = lazy(() => import("./pages/Register"));
const Welcome = lazy(() => import("./pages/Welcome"));
const MenuLayout = lazy(() => import("./layouts/Menu"));

class App extends React.Component {
  render() {
    return (
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route exact path="/" component={LoginStandard} />
            <Route exact path="/user/register" component={Register} />

            <Route exact path="/user" component={MenuLayout} />
            <Route exact path="/user/welcome" component={Welcome} />
          </Switch>
        </Suspense>
      </Router>
    );
  }
}

export default App;
