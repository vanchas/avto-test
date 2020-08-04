import React from "react";
import PropTypes from "prop-types";
import { Form, Button } from "react-bootstrap";
import s from "./login.module.scss";
import LoginPageControl from "./LoginPageControl";

export default class RegisterForm extends React.Component {
  render() {
    const text = this.props.langData;

    return (
      <>
        <LoginPageControl langData={this.props.langData} />
        <div>
          {this.props.registerMessage.length ? (
            <div
              style={{ maxWidth: "700px" }}
              className="mx-auto my-3 alert alert-info"
              role="alert"
            >
              {this.props.registerMessage}
            </div>
          ) : null}

          <Form className="mx-auto" style={{ maxWidth: "700px" }}>
            <Form.Group controlId="formBasicEmail">
              {/*<Form.Label>{text.email_label}</Form.Label>*/}
              <p className={s.registration_form_heading}>
                Зареєструйся, щоб <br /> перевіряти авто ефективно.
              </p>
              <Form.Control
                type="email"
                placeholder="введіть Ваш email"
                value={this.props.email}
                onChange={(e) => this.props.emailInput(e.target.value)}
              />
              {/*<Form.Text className="text-muted">*/}
              {/*  {text.email_sublabel}*/}
              {/*</Form.Text>*/}
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              {/*<Form.Label>{text.password_label}</Form.Label>*/}
              <Form.Control
                type="password"
                placeholder="От 6 символов"
                value={this.props.password}
                onChange={(e) => this.props.passwordInput(e.target.value)}
              />
            </Form.Group>
            {/* {this.props.loading ?
            <div className="spinner-border text-primary" role="status">
              <span className="sr-only">Loading...</span>
            </div> : */}
            <Form.Text className={s.form_email_message}>
              Ви отримаєте повідомлення на email для активації вашого облікогово
              запису
            </Form.Text>
            <Button
              variant=""
              // onClick={e => this.props.registerHandler(e)}
              className={`btn btn-outline-danger ${s.submit_button}`}
            >
              {/*{text.nav_item_sign_in}*/}
              Реєстрація
            </Button>
            <Form.Text className={s.form_email_message}>
              Натискаючи кнопку "Реєстрація", Ви погоджуєтесь з умовами розділів{" "}
              <a href={`#`} target={`_blank`}>
                <b>Умови використання</b>
              </a>{" "}
              та{" "}
              <a href={`#`} target={`_blank`}>
                <b>Політикою конфіденційності</b>
              </a>{" "}
              на сайті <b>AvtoTest</b>
            </Form.Text>
          </Form>
        </div>
      </>
    );
  }
}

RegisterForm.propTypes = {
  email: PropTypes.string,
  name: PropTypes.string,
  password: PropTypes.string,
  loginInput: PropTypes.func,
  passwordInput: PropTypes.func,
  registerHandler: PropTypes.func,
  langData: PropTypes.object,
};
