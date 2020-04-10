import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import IntroPage from './intro-page/IntroPage'
// import { PrivateRoute } from '../../_services/PrivatRoute'
// import HomePage from './home-page/Home'
// import AdminPage from './admin-page/Admin'
// import { Role } from '../../_helpers/role'
// import LoginForm from './login-form/LoginForm'

export default class Main extends Component {
  render() {
    return (
      <main>
        <Switch>
          {/* <PrivateRoute exact
            path="/"
            component={HomePage}
          />

          <PrivateRoute
            path="/admin"
            roles={[Role.Admin]}
            component={AdminPage}
          /> */}
          <IntroPage />
          {/* <Route path="/intro" component={IntroPage} /> */}

          {/* <Route path="/login" component={LoginForm} /> */}
        </Switch>
      </main>
    )
  }
}
