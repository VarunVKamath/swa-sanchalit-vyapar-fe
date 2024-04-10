import React from "react";
import OtpInput from "react-otp-input";
import { ButtonView, CardView } from "../../../controls";
import Timer from "./components/Timer";
import { Row, Col } from "react-bootstrap";
const VerifyOtpView = ({
  otp,
  onChange,
  seconds,
  minutes,
  handleSubmit,
  error,
  handleReset,
}) => {
  return (
    <div className="otpverification-container">
      <CardView>
        <div className="verifyContainer">
          <p>Enter Verification Code</p>
          <OtpInput
            value={otp}
            onChange={onChange("otp")}
            numInputs={4}
            separator={<span> - </span>}
            isInputNum={true}
            containerStyle="otp-view"
            placeholder=""
            inputStyle="otp-input"
            hasErrored={error ? true : false}
            errorStyle="error-style"
          />
          <Timer minutes={minutes} seconds={seconds} />
          <Row className="rowstyle">
            <Col className="colstyle">
              <ButtonView
                title={"Verify OTP"}
                styles="primary"
                onClick={handleSubmit}
              />
            </Col>
            <Col className="colstyle">
              <ButtonView
                title={"Resend OTP"}
                styles="danger-outline"
                onClick={handleReset}
                disabled={minutes === 0 && seconds === 0 ? false : true}
              />
            </Col>
          </Row>
        </div>
      </CardView>
    </div>
  );
};

export default VerifyOtpView;
