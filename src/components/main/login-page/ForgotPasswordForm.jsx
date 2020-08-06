import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import s from "./login.module.scss";
import { Link } from "react-router-dom";
import { userService } from "../../../_services/user.service";

export default function ForgotPasswordForm(props) {
  const [email, setEmail] = useState(null);
  const [submitLoader, setSubmitLoader] = useState(false);

  const submitHandlerPasswordRecovery = (e) => {
    e.preventDefault();
    if (email) {
      setTimeout(() => {
        setSubmitLoader(true)
        // setSubmitMessage('Підтвердіть відновлення паролю, яке ми вислали Вам на email')
      }, 500)
      userService.passwordRecovery(email);
      setTimeout(() => {
        setSubmitLoader(false)
        // setSubmitMessage(null)
      }, 5000)
    }
  };

  return (
    <Form
      onSubmit={submitHandlerPasswordRecovery}
      className={`mx-auto`}
      style={{ maxWidth: "700px" }}
    >
      <nav className={s.forgot_password_form_heading}>
        <div className={s.nav_links}>
          <span className={`p-2`}>
            {props.langData.forgot_password_form_title}
          </span>
          <Link
            to={`/login/sign-up`}
            className={`px-3 py-2 mr-2 ${s.nav_link}`}
          >
            <u>{props.langData.forgot_password_form_registration_btn}</u>
          </Link>
        </div>
      </nav>

      <Form.Group controlId="formBasicEmail">
        <Form.Control
          autoComplete="true"
          type="email"
          placeholder="введіть Ваш email"
          onChange={(e) => setEmail(e.target.value)}
        />
      </Form.Group>
      {submitLoader ?
          <div className={`text-center py-1`}>
            <div className="spinner-border text-danger" role="status">
            <span className="sr-only">Loading...</span>
          </div>
          </div>
      : <Button
        variant=""
        type="submit"
        className={`btn btn-outline-danger ${s.submit_button}`}
      >
        {props.langData.forgot_password_form_submit_btn}
      </Button>}
    </Form>
  )
}
