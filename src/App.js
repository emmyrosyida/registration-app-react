import "./App.css";
import React from "react";
import RegForm from "./registration/RegForm";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import UserInfo from "./userinfo/UserInfo";

const App = () => {
  return (
    <Router>
      <Route exact path="/">
        <Redirect to="/register" />
      </Route>
      <Route
        path="/register"
        exact
        render={() => (
          <div className="App">
            <RegForm></RegForm>
          </div>
        )}
      ></Route>
      <Route path="/landing">
        <UserInfo></UserInfo>
      </Route>
    </Router>
  );
};

export default App;
