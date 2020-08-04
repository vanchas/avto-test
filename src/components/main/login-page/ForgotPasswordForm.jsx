import React from "react";
import { Button, Form } from "react-bootstrap";
import s from "./login.module.scss";
import { Link } from "react-router-dom";

export default function ForgotPasswordForm(props) {
  return (
    <Form
      onSubmit={(e) => {}}
      className={`mx-auto`}
      style={{ maxWidth: "700px" }}
    >
      <nav className={s.forgot_password_form_heading}>
        <ul className={s.nav_links}>
          <Link to={`/login/forgot-password`} className={`px-3 py-2 mr-2 ${s.nav_link}`}>
            <u>Забули пароль?</u>
          </Link>
          <Link to={`/login/sign-up`} className={`px-3 py-2 mr-2 ${s.nav_link}`}>
            <u>Реєстрація</u>
          </Link>
        </ul>
      </nav>

      <Form.Group controlId="formBasicEmail">
        <Form.Control
          autoComplete="true"
          type="email"
          placeholder="введіть Ваш email"
          // value={
          //   props.registedEmail.length
          //     ? props.registedEmail
          //     : props.email
          // }
          // onChange={(e) => props.emailInput(e.target.value)}
        />
      </Form.Group>
      {/*<div className="spinner-border text-primary" role="status">*/}
      {/*  <span className="sr-only">Loading...</span>*/}
      {/*</div>*/}
      <Button
        variant=""
        type="submit"
        className={`btn btn-outline-danger ${s.submit_button}`}
      >
        Відновити пароль
      </Button>
    </Form>
  );
}

