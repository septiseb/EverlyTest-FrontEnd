import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Landing/Home";
import LogIn from "./components/Landing/LogIn";
import SignUp from "./components/Landing/SignUp";
import AllTest from "./components/Landing/AllTest";
import TestLog from "./components/Landing/TestLog";
import TestDetail from "./components/Landing/TestDetail";
import HomeDash from "./components/Dashboard/HomeDash";
import PrivateRoute from "./components/Dashboard/PrivateRoute";
import TokenState from "./context/auth/AuthState";
import CrearPruebas from "./components/Dashboard/CrearPruebas";
import ChooseTest from "./components/Dashboard/ChooseTest";
import DetailTesters from "./components/Dashboard/DetailTesters";
import EditTest from "./components/Dashboard/EditTest";

function App() {
  //const [loggedIn, setLoggedIn] = useState(null);

  return (
    <>
      <TokenState>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={LogIn} />
            <Route exact path="/signup" component={SignUp} />
            <Route exact path="/tests" component={AllTest} />
            <Route exact path="/tests/:idTest" component={TestDetail} />
            <Route exact path="/login-tester" component={TestLog} />
            {/*       <PrivateRoute exact path="/user-profile" component={HomeDash} /> */}
           <Route exact path="/user-profile" component={HomeDash} />
            <Route
              exact
              path="/user-profile/:idUser/create-test"
              component={CrearPruebas}
            />
            <Route
              exact
              path="/user-profile/:idUser/create-test/:idGroupTest"
              component={ChooseTest}
            />
            <Route
              exact
              path="/user-profile/details/:idGroupTest"
              component={DetailTesters}
            />
            <Route
              exact
              path="/user-profile/edit-test/:idGroupTest"
              component={EditTest}
            />
          </Switch>
        </Router>
      </TokenState>
    </>
  );
}

export default App;
