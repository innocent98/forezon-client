import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./app.scss";
import Footer from "./component/footer/Footer";
import Approach from "./pages/approach/Approach";
import Intro from "./pages/intro/Intro";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
import Team from "./pages/team/Team";
import Contact from "./pages/contact/Contact";
import Dashboard from "./pages/dashboard/Dashboard";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <div className="section">
            <Intro />
            <Approach />
            <Team />
            <Contact />
            <Footer />
          </div>
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/dashboard">
          <Dashboard />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
