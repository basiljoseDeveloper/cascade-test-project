import React from "react";
import { Switch, Redirect, Route } from "react-router-dom";
import Login from "./Page/Login";
import Home from "./Page/Home";
import { connect } from "react-redux";

const App = (props) => {
  let isLoggedIn = localStorage.getItem("isLoggedIn");
  return (
    <React.Suspense fallback={<></>}>
      <Switch>
        <Route exact path="/" component={Login} />
        {(isLoggedIn || props.user) && <Route path="/home" component={Home} />}
        <Redirect to="/" />
      </Switch>
    </React.Suspense>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.loginReducer.User,
  };
};

export default connect(mapStateToProps)(App);
