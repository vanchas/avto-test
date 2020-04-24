import React, { Component } from 'react'
import { Link, Route } from 'react-router-dom'
import LoginForm from './LoginForm'
import RegisterForm from './RegisterForm';
import { history } from '../../../_helpers/history';
import { userService } from '../../../_services/user.service';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
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

  componentDidMount() {
  }

  loginHandler(e) {
    e.preventDefault();
    if (this.state.email.toString().trim().length &&
      this.state.password.toString().trim().length) {

      this.setState({ loading: true });
      userService.login(this.state.email, this.state.password);
      // fetch('https://strateg.link/public/api/login', {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json;charset=utf-8'
      //   },
      //   body: JSON.stringify({
      //     email: this.state.email,
      //     password: this.state.password
      //   })
      // }).then((res) => {
      //   // console.log(res);

      //   this.setState({
      //     user: res.user
      //   });
      //   const result = res.json();
      //   result.then(data => {
      //     // console.log('data:', data);

      //     this.setState({
      //       token: data.token,
      //       token_type: data.token_type,
      //       user: data.user
      //     });
      //     this.props.setCurrentUser(data.user);
      //   })
      // })
      //   .catch(error => {
      //     console.error(error);
      //   });
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
      fetch('https://strateg.link/public/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify({
          name: this.state.name,
          email: this.state.email,
          password: this.state.password
        })
      }).then((res) => {
        this.setState({
          status: res.status,
          name: '',
          email: '',
          password: ''
        });
        const result = res.json();
        result.then(response => {
          console.log('message:', response);

          this.setState({ message: response });
        })
          .catch(error => console.log('Error:', error));

      })
        .then(() => {
          if (this.state.status === 201) history.push('/home');
        })
        .catch(error => {
          console.error('Error:', error);
        });
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

          <div>
            {this.state.status == 400 ?
              <span>The email has already been taken.</span> : null
            }
          </div>

          <div>
            {(this.state.status !== 200 && this.state.status !== 400) ?
              <span>Error</span> : null
            }
          </div>

          {/* <div>
            {(this.state.status == 200) ?
            '' : '' }
          </div> */}

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

        </div>
      </div>
    )
  }
}

