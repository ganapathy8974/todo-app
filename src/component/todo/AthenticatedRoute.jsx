import React from "react";
import { Route, Navigate } from "react-router-dom";
import AuthenticationService from "./AuthenticationService";

/*This Code Helps to do Private Routing... It is get the child form the Parent tag ..
Has user loged in it is return the child. other wise it is navigate to login page*/
function AuthenticatedRoute({ children }) {
    const auth = AuthenticationService.isUserLogedin();
    return auth ? children : <Navigate to='/login' />;
  }

export default AuthenticatedRoute;