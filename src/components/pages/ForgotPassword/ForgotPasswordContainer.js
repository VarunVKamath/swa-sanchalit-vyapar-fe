import React, { Component } from "react";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import connect from "react-redux/es/connect/connect";
import "./ForgotPasswordStyles.scss";
import auth from "../../restricted/auth";
import { forgotPassword } from "../../../store/auth/authActions";
import ForgotPwdView from "./ForgotPasswordView";
import { HOME } from "../../../navigation/routes";
import { history } from "../../../store/configure/configureStore";
import { trimFormData } from "../../../utils/common";
import * as validator from "../../../utils/validator";

export class ForgotPasswordContainer extends Component {
  // constructor(props) {
  //   super(props);
  // } dev branch

  state = {
    fields: {
      email: "",
      password: "",
    },
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

  onForgotPwd = () => {
    var fields = this.state.fields;

    const validatorFields = {
      required: ["email"],
    };

    const { errors } = validator.validate(
      validatorFields,
      trimFormData(fields)
    );

    this.setState({ ...this.state, errors });
    if (!Object.keys(errors).length) {
      this.props.forgotPassword(fields.email, fields.password);
    }
  };

  render() {
    if (auth.isAuthenticated()) {
      // if (this.props.authSuccess == true) {

      history.push(HOME);
    }
    return (
      <>
        <ForgotPwdView
          onForgotPwd={this.onForgotPwd}
          fields={this.state.fields}
          onChange={this.handleChange}
          errors={this.state.errors}
        />
      </>
    );
  }
}

ForgotPasswordContainer.propTypes = {
  ForgotPwd: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  authSuccess: state.auth.authSuccess,
  authData: state.auth,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      forgotPassword: forgotPassword,
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ForgotPasswordContainer);
