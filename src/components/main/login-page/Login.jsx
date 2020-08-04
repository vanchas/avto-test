import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link, Route } from "react-router-dom";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
import { userService } from "../../../_services/user.service";
import s from "./login.module.scss";
import ForgotPasswordForm from "./ForgotPasswordForm";

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      user: {},
      email: "",
      password: "",
      message: "",
      status: 200,
      registerMessage: "",
      registedEmail: "",
      registedPassword: "",
    };
    this.loginHandler = this.loginHandler.bind(this);
    this.registerHandler = this.registerHandler.bind(this);
    this.loginInput = this.loginInput.bind(this);
    this.emailInput = this.emailInput.bind(this);
    this.passwordInput = this.passwordInput.bind(this);
  }

  componentWillUnmount() {
    this.setState({
      loading: false,
      registerMessage: "",
    });
  }

  loginHandler(e) {
    e.preventDefault();
    if (
      (this.state.email.trim().length &&
        this.state.password.toString().trim().length) ||
      (this.state.registedEmail.trim().length &&
        this.state.registedPassword.toString().trim().length)
    ) {
      new Promise((res) => {
        const email = this.state.registedEmail.length
          ? this.state.registedEmail
          : this.state.email;
        const password = this.state.registedPassword.length
          ? this.state.registedPassword
          : this.state.password;

        this.setState({ loading: true });

        userService.login(email, password);
        res();
      })
        .then(() => {
          setTimeout(() => {
            this.setState({
              email: "",
              password: "",
            });
          }, 500);
        })
        .catch((err) => {
          console.log("Error: ", err);
        });
    } else {
      alert("Все поля должны быть корректно заполнены.");
    }
  }

  registerHandler(e) {
    e.preventDefault();
    if (
      this.state.email.trim().length &&
      this.state.password.toString().trim().length
    ) {
      new Promise((res) => {
        localStorage.removeItem("avto-test-car");
        this.setState({
          registedEmail: this.state.email,
          registedPassword: this.state.password,
          loading: true,
          registerMessage:
            "Для того щоб зареєструватися, натисніть на  підтвердження, яке ми відправили вам на електронну адресу.",
        });
        userService.registration(this.state.email, this.state.password);
        res();
      })
        .then(() => {
          setTimeout(() => {
            this.setState({
              email: "",
              password: "",
            });
          }, 500);
        })
        .catch((err) => {
          console.log("Error: ", err);
        });
    } else {
      alert("Все поля должны быть корректно заполнены.");
    }
  }

  emailInput(email) {
    this.setState({ email });
  }

  loginInput(name) {
    this.setState({ name });
  }

  passwordInput(password) {
    this.setState({ password });
  }

  render() {
    const text = this.props.langData;

    return (
      <div style={{ minHeight: "100vh" }}>
        <div className={s.form}>
          <Route
            path="/login/sign-in"
            render={(props) => (
              <LoginForm
                registedEmail={this.state.registedEmail}
                registedPassword={this.state.registedPassword}
                loading={this.state.loading}
                email={this.state.email}
                password={this.state.password}
                emailInput={this.emailInput}
                passwordInput={this.passwordInput}
                loginHandler={this.loginHandler}
                langData={this.props.langData}
                {...props}
              />
            )}
          />

          <Route
            path="/login/sign-up"
            render={(props) => (
              <RegisterForm
                registerMessage={this.state.registerMessage}
                loading={this.state.loading}
                email={this.state.email}
                name={this.state.name}
                password={this.state.password}
                loginInput={this.loginInput}
                emailInput={this.emailInput}
                passwordInput={this.passwordInput}
                registerHandler={this.registerHandler}
                langData={this.props.langData}
                {...props}
              />
            )}
          />

          <Route
            path="/login/forgot-password"
            render={(props) => (
              <ForgotPasswordForm langData={this.props.langData} {...props} />
            )}
          />
        </div>
      </div>
    );
  }
}

Login.propTypes = {
  langData: PropTypes.object,
};
