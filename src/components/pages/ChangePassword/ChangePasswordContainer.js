import React, { Component } from "react";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import connect from "react-redux/es/connect/connect";
import "./ChangePasswordStyles.scss";
import { changePassword } from "../../../store/auth/authActions";
import ChangePasswordView from "./ChangePasswordView";
import { trimFormData } from "../../../utils/common";
import * as validator from "../../../utils/validator";

export class ChangePasswordContainer extends Component {
  // constructor(props) {
  //   super(props);
  // } dev branch

  state = {
    fields: {
      name: "",
      password: "",
      cnf_password: "",
      old_password: "",
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

  onChangePassword = () => {
    var fields = this.state.fields;

    const validatorFields = {
      required: ["old_password", "password", "cnf_password"],
    };

    const { errors } = validator.validate(
      validatorFields,
      trimFormData(fields)
    );
    // var email=this.props.authData.data.userName

    this.setState({ ...this.state, errors });
    if (!Object.keys(errors).length) {
      var refreshToken = this.props.authData.refreshToken;
      var token = this.props.authData.accessToken;

      this.props.changePassword(
        fields.old_password,
        fields.password,
        fields.cnf_password,
        token,
        refreshToken
      );
      this.setState({
        fields: {
          name: "",
          password: "",
          cnf_password: "",
          old_password: "",
          remember: "",
          email: "",
        },
        isReset: "",
        errors: {},
      });
    }

    // this.props.changePassword(fields.password, fields.cnf_password,email);
  };

  render() {
    return (
      <>
        <ChangePasswordView
          onChangePassword={this.onChangePassword}
          fields={this.state.fields}
          onChange={this.handleChange}
          isLoader={this.props.isLoader}
          errors={this.state.errors}
        />
      </>
    );
  }
}

ChangePasswordContainer.propTypes = {
  ChangePassword: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  authSuccess: state.auth.authSuccess,
  authData: state.auth.loginUser,
  isLoader: state.loader.isLoader,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      changePassword: changePassword,
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChangePasswordContainer);
