import React, { Component } from "react";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import connect from "react-redux/es/connect/connect";
import "./LoginStyles.scss";
import auth from "../../restricted/auth";
import { login } from "../../../store/auth/authActions";
import LoginView from "./LoginView";
import { HOME } from "../../../navigation/routes";
import { history } from "../../../store/configure/configureStore";
import { trimFormData } from "../../../utils/common";
import * as validator from "../../../utils/validator";

export class LoginContainer extends Component {
  // constructor(props) {
  //   super(props);
  // } dev branch

  state = {
    fields: {
      name: "",
      password: "1111",
      remember: "",
      email: "vk@mail.com",
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

  onLogin = () => {
    var fields = this.state.fields;

    const validatorFields = {
      required: ["email", "password"],
    };

    const { errors } = validator.validate(
      validatorFields,
      trimFormData(fields)
    );
    this.setState({ ...this.state, errors });
    var fields = this.state.fields;
    if (!Object.keys(errors).length) {
      this.props.login(fields.email, fields.password);
    }
  };

  render() {
    console.log("Hello Tested");
    if (auth.isAuthenticated()) {
      // if (this.props.authSuccess == true) {
      console.log("Authenticated!", auth, auth.isAuthenticated());
      history.push(HOME);
    }
    return (
      <>
        <LoginView
          onLogin={this.onLogin}
          fields={this.state.fields}
          onChange={this.handleChange}
          isLoader={this.props.isLoader}
          errors={this.state.errors}
        />
      </>
    );
  }
}

LoginContainer.propTypes = {
  login: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  authSuccess: state.auth.authSuccess,
  authData: state.auth,

  isLoader: state.loader.isLoader,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      login: login,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);
