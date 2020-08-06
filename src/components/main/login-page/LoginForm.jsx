import React from "react";
import PropTypes from "prop-types";
import { Form, Button } from "react-bootstrap";
import s from "./login.module.scss";
import { Link } from "react-router-dom";
import LoginPageControl from "./LoginPageControl";

export default class LoginForm extends React.Component {
  render() {
    const text = this.props.langData;

    return (
      <>
        <LoginPageControl langData={this.props.langData} />
        <Form
          onSubmit={(e) => this.props.loginHandler(e)}
          className={`mx-auto`}
          style={{ maxWidth: "700px" }}
        >
          <Form.Group controlId="formBasicEmail">
            <Form.Control
              autoComplete="true"
              type="email"
              placeholder="введіть Ваш email"
              value={
                this.props.registedEmail.length
                  ? this.props.registedEmail
                  : this.props.email
              }
              onChange={(e) => this.props.emailInput(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Control
              type="password"
              placeholder="пароль"
              value={
                this.props.registedPassword.length
                  ? this.props.registedPassword
                  : this.props.password
              }
              onChange={(e) => this.props.passwordInput(e.target.value)}
            />
          </Form.Group>
          {/*<div className="spinner-border text-primary" role="status">*/}
          {/*  <span className="sr-only">Loading...</span>*/}
          {/*</div>*/}
          {/*<Form.Text className={s.forgot_password}>*/}
          {/*  <Link to="/login/forgot-password">*/}
          {/*    <u>{text.forgot_password_btn}</u>*/}
          {/*  </Link>*/}
          {/*</Form.Text>*/}
          <Button
            variant=""
            type="submit"
            className={`btn btn-outline-danger ${s.submit_button}`}
          >
            {text.nav_item_sign_in}
          </Button>
        </Form>
      </>
    );
  }
}

LoginForm.propTypes = {
  email: PropTypes.string,
  password: PropTypes.string,
  emailInput: PropTypes.func,
  passwordInput: PropTypes.func,
  loginHandler: PropTypes.func,
  langData: PropTypes.object,
};
