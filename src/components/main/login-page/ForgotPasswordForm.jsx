import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import s from "./login.module.scss";
import { Link } from "react-router-dom";
import { userService } from "../../../_services/user.service";

export default function ForgotPasswordForm(props) {
  const [email, setEmail] = useState(null);
  const [newPasswordForm, setNewPasswordForm] = useState(false);
  const [newPassword, setNewPassword] = useState(null);
  const [newPasswordConfirmed, setNewPasswordConfirmed] = useState(null);

  const submitHandlerPasswordRecovery = (e) => {
    e.preventDefault();
    if (email) {
      userService.passwordRecovery(email);
    }
  };

  const submitHandlerSettingNewPassword = (e) => {
    e.preventDefault();
    const token = props.location.search.includes("token") ? props.location.search : null;
    console.log(token, newPassword, newPasswordConfirmed)

    if (token && newPassword && newPassword === newPasswordConfirmed) {
      userService.setNewPassword(token.toString().split('?token=')[1], newPassword, newPasswordConfirmed);
    } else {
      alert('Пароль має бути не меньший нiж 6 символів та Поле "Пароль" і "Підтвердження паролю" повинно співпадати')
    }
  };

  useEffect(() => {
    if (props.location.search.includes("token")) {
      setNewPasswordForm(true);
    }
  }, []);

  return !newPasswordForm ? (
    <Form
      onSubmit={submitHandlerPasswordRecovery}
      className={`mx-auto`}
      style={{ maxWidth: "700px" }}
    >
      <nav className={s.forgot_password_form_heading}>
        <div className={s.nav_links}>
          <span className={`p-2`}>Забули пароль?</span>
          <Link
            to={`/login/sign-up`}
            className={`px-3 py-2 mr-2 ${s.nav_link}`}
          >
            <u>Реєстрація</u>
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
      <Button
        variant=""
        type="submit"
        className={`btn btn-outline-danger ${s.submit_button}`}
      >
        Відновити пароль
      </Button>
    </Form>
  ) : (
    <Form
      onSubmit={submitHandlerSettingNewPassword}
      className={`mx-auto`}
      style={{ maxWidth: "700px" }}
    >
      <Form.Group controlId="formBasicPassword">
        <Form.Control
          required
          autoComplete="true"
          type="password"
          minLength={`6`}
          placeholder="введіть новий пароль"
          onChange={(e) => setNewPassword(e.target.value)}
        />
      </Form.Group>
      <Form.Group controlId="formBasicPassword">
        <Form.Control
          required
          autoComplete="true"
          type="password"
          minLength={`6`}
          placeholder="підтвердіть новий пароль"
          onChange={(e) => setNewPasswordConfirmed(e.target.value)}
        />
      </Form.Group>
      <Button
        variant=""
        type="submit"
        className={`btn btn-outline-danger font-weight-bold ${s.submit_button}`}
      >
        Зберегти пароль
      </Button>
    </Form>
  );
}
