import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { globals } from "../../../../store/globals";
import connect from "react-redux/es/connect/connect";

import "./MobileNoForOtp.scss";
import { trimFormData } from "../../../../utils/common";
import * as validator from "../../../../utils/validator";
import MobileNoForOtpView from "./MobileNoForOtpView";
import { generateOtp } from "../../../../store/otpverification/otpVerificationActions";
class MobileNoForOtpContainer extends Component {
  state = {
    fields: {
      mobileNo: "",
    },
    errors: {},
  };

  constructor(props) {
    super(props);
  }

  handleChange = field => e => {
    let value;
    value = e.target.value;
    const { fields } = this.state;
    this.setState({
      fields: { ...fields, [field]: value },
    });
  };

  handleSave = e => {
    const { fields } = this.state;
    const validatorFields = {
      required: ["mobileNo"],
    };

    const { errors } = validator.validate(validatorFields, trimFormData(fields));

    console.log(errors);
    this.setState({ ...this.state, errors });
    if (!Object.keys(errors).length) {
      this.props.generateOtp(fields.mobileNo);
      //globals.history.push("/otpverification/verifyotp");
    }
  };

  componentDidUpdate() {}

  componentDidMount() {}

  componentWillUnmount() {}

  render() {
    console.log(this.state);
    const { fields, errors } = this.state;

    return <MobileNoForOtpView fields={fields} errors={errors} onChange={this.handleChange} onSave={this.handleSave} />;
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      generateOtp: generateOtp,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(MobileNoForOtpContainer);
