import React from "react";
import { Input, CardView, ButtonView } from "../../controls";
import { Loader } from "../../common";

const ChangePasswordView = ({
  onChangePassword,
  onChange,
  fields,
  isLoader,
  errors,
}) => {
  return (
    <div className="change_password_container">
      <CardView title="Change Password">
        <div className="inner_change_password">
          <div
            style={{
              marginTop: "15px",
            }}
          >
            <Input
              value={fields["old_password"]}
              name={"old_password"}
              label={"Old Password"}
              placeholder="Enter Password"
              type="password"
              onChange={onChange}
              // disabled={loading}
              size="lg"
              className={"shadow-sm"}
              error={errors["old_password"]}
            />
          </div>
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
          {!isLoader && (
            <ButtonView
              title="Change"
              styles="primary"
              size="large"
              onClick={onChangePassword}
            />
          )}
          {isLoader && <Loader />}
        </div>
      </CardView>
    </div>
  );
};

export default ChangePasswordView;
