import React from "react";
import logo from "../../../assets/images/logo-ssv.jpg";
import { Input, CardView, ButtonView } from "../../controls";

const ResetPasswordView = ({ onResetPwd, onChange, fields, errors }) => {
  return (
    <div className="reset_container">
      <CardView
        image={logo}
        title="Smart Sight Innovations"
        customStyle={{ height: "90px", width: "90px", marginTop: "10px" }}
      >
        <div className="inner_reset_container">
          <div
            style={{
              marginTop: "15px",
            }}
          >
            <Input
              value={fields["password"]}
              name={"password"}
              label={"New Password"}
              placeholder="Enter Password"
              type="password"
              onChange={onChange}
              // disabled={loading}
              size="lg"
              className={"shadow-sm"}
              error={errors["password"]}
            />
          </div>
          <div
            style={{
              marginTop: "15px",
            }}
          >
            <Input
              value={fields["cnf_password"]}
              name={"cnf_password"}
              label={"Confirm Password"}
              placeholder="Enter Password"
              type="password"
              onChange={onChange}
              // disabled={loading}
              size="lg"
              className={"shadow-sm"}
              error={errors["cnf_password"]}
            />
          </div>

          <ButtonView
            title=" Reset"
            styles="primary"
            size="large"
            onClick={onResetPwd}
          />
        </div>
      </CardView>
    </div>
  );
};

export default ResetPasswordView;
