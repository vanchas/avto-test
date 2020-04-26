import React from 'react'
import { Form, Button } from 'react-bootstrap'


export default class RegisterForm extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const text = this.props.langData;
    
    return (
      <div>
        <Form className="mx-auto" style={{ maxWidth: '700px' }}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>{text.email_label}</Form.Label>
            <Form.Control
              type="email" placeholder=""
              value={this.props.email}
              onChange={e => this.props.emailInput(e.target.value)} />
            <Form.Text className="text-muted">
              {text.email_sublabel}
            </Form.Text>
          </Form.Group>
          <Form.Group controlId="formBasicLogin">
            <Form.Label>{text.login_label}</Form.Label>
            <Form.Control
              type="text" placeholder=""
              value={this.props.name}
              onChange={e => this.props.loginInput(e.target.value)} />
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>{text.password_label}</Form.Label>
            <Form.Control type="password"
              placeholder=""
              value={this.props.password}
              onChange={e => this.props.passwordInput(e.target.value)} />
          </Form.Group>
          <Button variant="primary"
            onClick={e => this.props.registerHandler(e)}
            className="px-4" >
            {text.nav_item_sign_in}
          </Button>
        </Form>
      </div >
    )
  }
}
