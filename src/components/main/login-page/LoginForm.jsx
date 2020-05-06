import React from 'react'
import PropTypes from 'prop-types';
import { Form, Button } from 'react-bootstrap';
// import $ from 'jquery';


export default class LoginForm extends React.Component {

  // componentDidMount() {
  //   if (this.props.registedEmail.length && this.props.registedPassword.length) {
  //     $('.login-button').click();
  //   }
  // }

  render() {
    const text = this.props.langData;

    return (
      <div>
        <Form onSubmit={e => this.props.loginHandler(e)} className="mx-auto" style={{ maxWidth: '700px' }}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>{text.login_label}</Form.Label>
            <Form.Control autoComplete="true"
              type="email" placeholder=""
              value={this.props.registedEmail.length ? this.props.registedEmail : this.props.email}
              onChange={e => this.props.emailInput(e.target.value)} />
            <Form.Text className="text-muted">
              {text.email_sublabel}
            </Form.Text>
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>{text.password_label}</Form.Label>
            <Form.Control type="password"
              placeholder=""
              value={this.props.registedPassword.length ? this.props.registedPassword : this.props.password}
              onChange={e => this.props.passwordInput(e.target.value)} />
          </Form.Group>
          {/* {this.props.loading ?
            <div className="spinner-border text-primary" role="status">
              <span className="sr-only">Loading...</span>
            </div> : */}
          <Button variant="primary" type="submit"
            className="px-4 login-button" >
            {text.nav_item_sign_in}
          </Button>
          {/* // } */}
        </Form>
      </div>
    )
  }
}

LoginForm.propTypes = {
  email: PropTypes.string,
  password: PropTypes.string,
  emailInput: PropTypes.func,
  passwordInput: PropTypes.func,
  loginHandler: PropTypes.func,
  langData: PropTypes.object
}
