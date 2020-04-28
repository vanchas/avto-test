import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { Link, Route } from 'react-router-dom'
import LoginForm from './LoginForm'
import RegisterForm from './RegisterForm';
import { userService } from '../../../_services/user.service';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      user: {},
      name: '',
      email: '',
      password: '',
      token_type: '',
      token: '',
      message: '',
      status: 200
    };
    this.loginHandler = this.loginHandler.bind(this);
    this.registerHandler = this.registerHandler.bind(this);
    this.loginInput = this.loginInput.bind(this);
    this.emailInput = this.emailInput.bind(this);
    this.passwordInput = this.passwordInput.bind(this);
  }
  
  componentWillUnmount() {
    this.setState({ loading: false });
  }

  loginHandler(e) {
    e.preventDefault();
    if (this.state.email.toString().trim().length &&
      this.state.password.toString().trim().length) {

      this.setState({ loading: true });
      userService.login(this.state.email, this.state.password);
    } else {
      alert('Все поля должны быть корректно заполнены.')
    }
  }

  registerHandler(e) {
    e.preventDefault();
    if (
      this.state.name.toString().trim().length &&
      this.state.email.toString().trim().length &&
      this.state.password.toString().trim().length
    ) {
      this.setState({ loading: true });
      userService.registration(
        this.state.name,
        this.state.email,
        this.state.password
      );
    } else {
      alert('Все поля должны быть корректно заполнены.')
    }
  }

  emailInput(email) {
    this.setState({ email })
  }
  loginInput(name) {
    this.setState({ name })
  }
  passwordInput(password) {
    this.setState({ password })
  }

  render() {
    const text = this.props.langData;

    return (
      <div style={{ minHeight: '100vh' }}>
        <div className="container mx-auto py-5">
          <nav>
            <ul className="p-0 d-flex justify-content-end">
              <Link to="/login/sign-in"
                className="btn btn-secondary px-3 py-2 mr-2" >
                {text.nav_item_sign_in}
              </Link>
              <Link to="/login/sign-up"
                className="btn btn-secondary px-3 py-2" >
                {text.nav_item_sign_up}
              </Link>
            </ul>
          </nav>

          <Route path="/login/sign-in" render={props => <LoginForm
            email={this.state.email}
            password={this.state.password}
            emailInput={this.emailInput}
            passwordInput={this.passwordInput}
            loginHandler={this.loginHandler}
            langData={this.props.langData}
            {...props} />} />

          <Route path="/login/sign-up" render={props => <RegisterForm
            email={this.state.email}
            name={this.state.name}
            password={this.state.password}
            loginInput={this.loginInput}
            emailInput={this.emailInput}
            passwordInput={this.passwordInput}
            registerHandler={this.registerHandler}
            langData={this.props.langData}
            {...props} />} />

          <div>
            <div className="w-100 text-center pb-3">
              {this.state.loading ?
                <div className="spinner-border text-success" role="status">
                  <span className="sr-only">Loading...</span>
                </div>
                : null}
            </div>
          </div>

        </div>
      </div>
    )
  }
}

Login.propTypes = {
  langData: PropTypes.object
}
