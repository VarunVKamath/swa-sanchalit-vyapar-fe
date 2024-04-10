import React, { Component } from "react";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import connect from "react-redux/es/connect/connect";
import "./ResetPasswordStyles.scss";
import auth from "../../restricted/auth";
import { resetPassword } from "../../../store/auth/authActions";
import ResetPwdView from "./ResetPasswordView";
import { HOME } from "../../../navigation/routes";
import { history } from "../../../store/configure/configureStore";
import { trimFormData } from "../../../utils/common";
import * as validator from "../../../utils/validator";

export class ResetPasswordContainer extends Component {
  // constructor(props) {
  //   super(props);
  // } dev branch

  state = {
    fields: {
      name: "",
      password: "",
      cnf_password: "",
      remember: "",
      email: "",
    },
    isReset: "",
    errors: {},
  };

  componentDidUpdate() {}

  componentDidMount() {}

  componentWillUnmount() {}

  handleChange = ({ target }) => {
    const field = target.name;
    this.setState({
      fields: { ...this.state.fields, [field]: target.value },
      errors: {},
    });
  };

  onResetPwd = () => {
    var fields = this.state.fields;

    const validatorFields = {
      required: ["password", "cnf_password"],
    };

    const { errors } = validator.validate(
      validatorFields,
      trimFormData(fields)
    );
    this.setState({ ...this.state, errors });
    let locationName = window.location.href;
    let paramString = locationName.split("?")[1];
    let queryString = new URLSearchParams(paramString);
    let token = "";
    let email = "";
    for (let pair of queryString.entries()) {
      if (pair[0] == "token") {
        token = pair[1] ? pair[1] : "";
      }
      if (pair[0] == "email") {
        email = pair[1] ? pair[1] : "";
      }
    }
    if (!Object.keys(errors).length) {
      this.props.resetPassword(
        fields.password,
        fields.cnf_password,
        email,
        token
      );
    }
  };

  render() {
    if (auth.isAuthenticated()) {
      // if (this.props.authSuccess == true) {

      history.push(HOME);
    }
    return (
      <>
        <ResetPwdView
          onResetPwd={this.onResetPwd}
          fields={this.state.fields}
          onChange={this.handleChange}
          errors={this.state.errors}
        />
      </>
    );
  }
}

ResetPasswordContainer.propTypes = {
  ResetPwd: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  authSuccess: state.auth.authSuccess,
  authData: state.auth,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      resetPassword: resetPassword,
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ResetPasswordContainer);
