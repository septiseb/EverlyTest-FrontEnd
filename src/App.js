import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Landing/Home";
import LogIn from "./components/Landing/LogIn";
import SignUp from "./components/Landing/SignUp";
import AllTest from "./components/Landing/AllTest";
import TestLog from "./components/Landing/TestLog";
import TestDetail from "./components/Landing/TestDetail";

import { useEffect, useState } from "react";
import TokenState from "./context/auth/AuthState";

function App() {
  const [loggedIn, setLoggedIn] = useState(null);

  console.log(loggedIn);

  return (
    <>
      <TokenState>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route
              exact
              path="/login"
              render={() => <LogIn getUser={setLoggedIn} />}
            />
            <Route
              exact
              path="/signup"
              render={() => <SignUp getUser={setLoggedIn} />}
            />
            <Route exact path="/tests" component={AllTest} />
            <Route exact path="/tests/:idTest" component={TestDetail} />
            <Route exact path="/login-tester" component={TestLog} />
          </Switch>
        </Router>
      </TokenState>
    </>
  );
}

export default App;
