import React from "react";
import { Card } from "react-bootstrap";

import { CLIENT_ID } from "../../../constants/env";
import logo from "../../../assets/images/logo-ssv.jpg";
import { Input, CardView, ButtonView } from "../../controls";
import styles from "./LoginStyles.scss";
import { history } from "../../../store/configure/configureStore";
import { Loader } from "../../common";
import { globals } from "../../../store/globals";

const LoginView = ({ onLogin, onChange, fields, isLoader, errors }) => {
  return (
    <div className="login_container">
      <CardView
        image={logo}
        customStyle={{ height: "90px", width: "90px", marginTop: "10px" }}
      >
        <div className="inner_login_container">
          {/* <div>
            <Input
              value={fields["email"]}
              name={"email"}
              label={"Email or Phone"}
              placeholder="Email address or phone number"
              type="text"
              className={"shadow-sm"}
              onChange={onChange}
              size="lg"
              error={errors["email"]}
            />
          </div>
          <div>
            <Input
              value={fields["password"]}
              name={"password"}
              label={"Password"}
              placeholder="Password"
              type="password"
              onChange={onChange}
              size="lg"
              className={"shadow-sm"}
              error={errors["password"]}
            />
          </div> */}
          {/* <div className={`mt-2 d-flex linkStyle`} onClick={() => history.push("/forgot_password")}>
            Forgot Password?
          </div> */}
          {!isLoader && (
            <ButtonView
              title="Log In"
              // styles="primary"
              size="large"
              onClick={onLogin}
            />
          )}
          {isLoader && <Loader />} {/* Display loader when loading */}
          {/* <div className="mt-3">
            <p
              onClick={() => history.push("/signup")}
              className={`linkStyle`}
            >
              Create New Account
            </p>
          </div> */}
        </div>
      </CardView>
    </div>
  );
};

export default LoginView;
