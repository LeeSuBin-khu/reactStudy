import React, { useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import { useSelector } from "react-redux";

import UserAccount from "./component/user/UserAccount";
import MainPage from "./component/MainPage";
import BlogUpload from "./component/blog/BlogUpload";
import Register from "./component/user/Register";
import Login from "./component/user/Login";

function App() {
  const user = useSelector((state) => state.user);
  useEffect(() => {
    console.log("user : ", user);
  }, [user]);

  return (
    <>
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/blogUpload" component={BlogUpload} />
        <Route exact path="/register" component={Register} />
      </Switch>
    </>
  );
}

export default App;