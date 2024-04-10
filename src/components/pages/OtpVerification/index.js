import React from "react";
import { Route, Switch } from "react-router-dom";
import MobileNoForOtpContainer from "./MobileNoForOtp/MobileNoForOtpContainer";
import VerifyOtpConatiner from "./VerifyOtp/VerifyOtpConatiner";

const OtpVerification = ({ match }) => {
  console.log(match.url);
  return (
    <>
      <Switch>
        <Route
          exact
          path={`${match.url}/`}
          component={MobileNoForOtpContainer}
        />

        <Route
          exact
          path={`${match.url}/verifyotp`}
          component={VerifyOtpConatiner}
        />
      </Switch>
    </>
  );
};

export default OtpVerification;
