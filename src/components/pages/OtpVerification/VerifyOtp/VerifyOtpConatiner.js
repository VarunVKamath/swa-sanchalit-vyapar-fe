import React, { Component } from "react";
import { bindActionCreators } from "redux";
import connect from "react-redux/es/connect/connect";
import "./VerifyOtp.scss";
import VerifyOtpView from "./VerifyOtpView";
import {
  verifyOtp,
  generateOtp,
  verifyOtpErrorNull,
} from "../../../../store/otpverification/otpVerificationActions";

class VerifyOtpContainer extends Component {
  state = {
    otp: "",
    minutes: 0,
    seconds: 60,
    error: false,
  };

  constructor(props) {
    super(props);
  }

  // onResetOtp = () => {
  //   console.log("test");
  //   const { seconds, minutes } = this.state;

  //   if (seconds > 0) {
  //     this.setState(({ seconds }) => ({
  //       seconds: seconds - 1,
  //     }));
  //   }
  //   if (seconds === 0) {
  //     if (minutes === 0) {
  //       clearInterval(this.myInterval);
  //       this.setState({ minutes: 0, seconds: 10 });
  //     } else {
  //       this.setState(({ minutes }) => ({
  //         minutes: minutes - 1,
  //         seconds: 59,
  //       }));
  //     }
  //   }
  // };

  // componentDidUpdate() {
  //   const { seconds, minutes } = this.state;
  //   if (seconds === 0 && minutes === 0) {
  //     clearInterval(this.myInterval);
  //     this.setState({ minutes: 0, seconds: 10 });
  //   }
  // }

  componentDidUpdate() {
    // console.log(this.props.verifyOtpError);
    if (this.props.verifyOtpError) {
      this.setState({ otp: "" });
      this.props.verifyOtpErrorNull();
    }
  }

  componentDidMount() {
    this.myInterval = setInterval(() => {
      const { seconds, minutes } = this.state;

      if (seconds > 0) {
        this.setState(({ seconds }) => ({
          seconds: seconds - 1,
        }));
      }
      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(this.myInterval);
        } else {
          this.setState(({ minutes }) => ({
            minutes: minutes - 1,
            seconds: 59,
          }));
        }
      }
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.myInterval);
  }

  handleChange = () => (e) => {
    this.setState({ otp: e, error: false });
  };

  handleSubmit = () => {
    // console.log(this.state);
    const { otp } = this.state;
    if (otp === "") {
      this.setState({ error: true });
    } else {
      this.props.verifyOtp(otp);
    }
  };

  handleReset = () => {
    this.props.generateOtp(this.props.mobileNo);
    this.setState({ minutes: 0, seconds: 60 });
    this.myInterval = setInterval(() => {
      const { seconds, minutes } = this.state;

      if (seconds > 0) {
        this.setState(({ seconds }) => ({
          seconds: seconds - 1,
        }));
      }
      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(this.myInterval);
        } else {
          this.setState(({ minutes }) => ({
            minutes: minutes - 1,
            seconds: 59,
          }));
        }
      }
    }, 1000);
    // this.myInterval = setInterval(this.onResetOtp, 1000);
  };

  render() {
    const { otp, minutes, seconds, error } = this.state;

    return (
      <VerifyOtpView
        otp={otp}
        minutes={minutes}
        seconds={seconds}
        onChange={this.handleChange}
        handleSubmit={this.handleSubmit}
        handleReset={this.handleReset}
        error={error}
      />
    );
  }
}

VerifyOtpContainer.propTypes = {};

const mapStateToProps = (state) => ({
  mobileNo: state.otpVerification.mobileNo,
  verifyOtpError: state.otpVerification.verifyOtpError,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      verifyOtp: verifyOtp,
      generateOtp: generateOtp,
      verifyOtpErrorNull: verifyOtpErrorNull,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(VerifyOtpContainer);
