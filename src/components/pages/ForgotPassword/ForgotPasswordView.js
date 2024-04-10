import React from "react";
import logo from "../../../assets/images/logo-ssv.jpg";
import { Input, CardView, ButtonView } from "../../controls";

const ForgotPasswordView = ({ onForgotPwd, onChange, fields, errors }) => {
  return (
    <div className="forgot_container">
      <CardView
        image={logo}
        title="Smart Sight Innovations"
        customStyle={{ height: "90px", width: "90px", marginTop: "10px" }}
      >
        <div className="inner_forgot_container">
          <div
            style={{
              marginTop: "15px",
            }}
          >
            <Input
              value={fields["email"]}
              name={"email"}
              label={"Email Address"}
              placeholder="Enter Email"
              type="text"
              className={"shadow-sm"}
              onChange={onChange}
              error={errors["email"]}
              size="lg"
            />
          </div>

          <ButtonView
            title="Reset"
            styles="primary"
            size="large"
            onClick={onForgotPwd}
          />
        </div>
      </CardView>
    </div>
  );
};

export default ForgotPasswordView;
{
  /* <Card className="google_login_container shadow">
  <Card.Body className="text-center d-flex justify-content-center align-items-center flex-column">
    <img src={logo} alt="SSI Logo" />
    <Card.Title className="mt-2">Smart Sight Innovations</Card.Title>
    <div
      style={{
        marginTop: "15px",
      }}
    >
      {" "}
      <Input
        value={fields["email"]}
        name={"email"}
        label={"Email Address"}
        placeholder="Enter Email"
        type="text"
        className={"shadow-sm"}
        onChange={onChange}
        size="lg"
      />
    </div>

    <button
      className="shadow-sm"
      onClick={onForgotPwd}
      style={{
        background: "#d87d2e",
      }}
    >
      Reset
    </button>
  </Card.Body>
</Card>; */
}
