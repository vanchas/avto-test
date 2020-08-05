import React from "react";
import PropTypes from "prop-types";
import { Form, Button } from "react-bootstrap";
import s from "./login.module.scss";
import LoginPageControl from "./LoginPageControl";
import {Link} from "react-router-dom";

export default class RegisterForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
    };
  }

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
              <p className={s.registration_form_heading}>
                Зареєструйся, щоб <br /> перевіряти авто ефективно.
              </p>
              <Form.Control
                type="email"
                placeholder="введіть Ваш email"
                value={this.props.email}
                onChange={(e) => this.props.emailInput(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Control
                type="password"
                minLength={`6`}
                placeholder="Придумайте пароль"
                value={this.props.password}
                onChange={(e) => this.props.passwordInput(e.target.value)}
              />
            </Form.Group>
            <Form.Text className={s.form_email_message}>
              Ви отримаєте повідомлення на email для активації вашого облікогово
              запису
            </Form.Text>
            {!this.state.loading ? (
              <Button
                variant=""
                onClick={(e) => {
                  this.setState({loading: true})
                  this.props.registerHandler(e)
                  setTimeout(() => {
                    this.setState({loading: false})
                  }, 3000)
                }}
                className={`btn btn-outline-danger ${s.submit_button}`}
              >
                Реєстрація
              </Button>
            ) : (
              <div className={`text-center py-1`}>
                <div className="spinner-border text-danger" role="status">
                  <span className="sr-only">Loading...</span>
                </div>
              </div>
            )}
            <Form.Text className={s.form_email_message}>
              Натискаючи кнопку "Реєстрація", Ви погоджуєтесь з умовами розділів{" "}
              <Link to={`/terms-of-use`}>
                <b>Умови використання</b>
              </Link>{" "}
              та{" "}
              <Link to={`/privacy-policy`}>
                <b>Політикою конфіденційності</b>
              </Link>{" "}
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
