import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Landing/Home";
import LogIn from "./components/Landing/LogIn";
import SignUp from "./components/Landing/SignUp";
import AllTest from "./components/Landing/AllTest";
import TestLog from "./components/Tester/TestLog";
import TestDetail from "./components/Landing/TestDetail";
import HomeDash from "./components/Dashboard/HomeDash";
import PrivateRoute from "./components/Dashboard/PrivateRoute";
import CrearPruebas from "./components/Dashboard/CrearPruebas";
import ChooseTest from "./components/Dashboard/ChooseTest";
import DetailTesters from "./components/Dashboard/DetailTesters";
import EditTest from "./components/Dashboard/EditTest";
//STRIPE
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

//GLOBAL STATE
import TokenState from "./context/auth/AuthState";
import AlertState from "./context/alerts/AlertaState";
import TestLanding from "./components/Tester/TestLanding";
import TesterExam from "./components/Tester/TesterExam";
import Checkout from "./components/Stripe/Checkout";
import Success from "./components/Stripe/Success";

const stripePromise = loadStripe(
  "pk_test_51IQy5VCdjzp44qeDdjNu3Fx0YvEtXvF8yQTyYGqD3GbK3LTg5ABgdtfcZg71G8iJYxbKvbTf3bWxCargoFJ2AUjG00HeIOpeco"
);

function App() {
  //const [loggedIn, setLoggedIn] = useState(null);

  return (
    <>
      <TokenState>
        <AlertState>
          <Router>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/login" component={LogIn} />
              <Route exact path="/signup" component={SignUp} />
              <Route exact path="/tests" component={AllTest} />
              <Route exact path="/tests/:idTest" component={TestDetail} />
              <Route exact path="/login-tester" component={TestLog} />
       {/*        <PrivateRoute exact path="/user-profile" component={HomeDash} /> */}
              <Route exact path="/user-profile" component={HomeDash} />
              <Route
                exact
                path="/user-profile/create-test"
                component={CrearPruebas}
              />
              <Route
                exact
                path="/user-profile/create-test/:idGroupTest"
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
              <Route exact path="/tester/:idTester" component={TestLanding} />
              <Route
                exact
                path="/tester/:idTester/:idTest"
                component={TesterExam}
              />
              <Elements stripe={stripePromise}>
                <Route exact path="/checkout/:idUser" render={(props) => <Checkout {...props}/>} />
                <Route exact path="/success.html" component={Success} />
                <Route exact path="/error.html" component={Success} />
              </Elements>
            </Switch>
          </Router>
        </AlertState>
      </TokenState>
    </>
  );
}

export default App;
