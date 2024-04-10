import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import RestrictedRoute from "../restricted/index";
import HomeContainer from "./Home/HomeContainer";
import LoginContainer from "./Login/LoginContainer";
import ForgotPasswordContainer from "./ForgotPassword/ForgotPasswordContainer";
import ResetPasswordContainer from "./ResetPassword/ResetPasswordContainer";
import ChangePasswordContainer from "./ChangePassword/ChangePasswordContainer";
import MobileNoForOtpContainer from "./OtpVerification/MobileNoForOtp/MobileNoForOtpContainer";
import VerifyOtpContainer from "./OtpVerification/VerifyOtp/VerifyOtpConatiner";

function App({ match }) {
  console.log("match:", match);
  var defaultRedirection = (
    <Redirect exact from={`${match.url}/`} to={`${match.url}home`} />
  );

  var routes = [
    {
      component: HomeContainer,
      link: "home",
    },
    {
      component: ChangePasswordContainer,
      link: "change_password",
    },
  ];

  var login_routes = [
    {
      component: LoginContainer,
      link: "/login",
    },
    {
      component: ForgotPasswordContainer,
      link: "/forgot_password",
    },
    {
      component: ResetPasswordContainer,
      link: "/reset_password",
    },
    {
      component: MobileNoForOtpContainer,
      link: "/otpverification",
    },
    {
      component: VerifyOtpContainer,
      link: "/verifyotp",
    },
  ];

  return (
    <Switch>
      {defaultRedirection}

      {routes.map((element) => (
        <RestrictedRoute
          path={`${match.url}${element.link}`}
          component={element.component}
        />
      ))}

      {login_routes.map((element) => (
        <Route exact path={element.link} component={element.component} />
      ))}
    </Switch>
  );
}

export default App;
