import React, { Component } from 'react'
// import { Switch, Route } from 'react-router-dom'
import IntroPage from './intro-page/IntroPage'
import ResultPage from './result-page/ResultPage'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { PrivateRoute } from '../../_services/PrivatRoute';
import { HomePage } from '../main/home-page/HomePage';
import { LoginPage } from '../main/login-page/LoginPage';


export default class Main extends Component {
  render() {
    return (
      <main>
        <Switch>
          <PrivateRoute exact path="/home" component={HomePage} />
          <Route path="/login" component={LoginPage} />

          <Route exact path="/" render={() => <IntroPage />} />
          <Route path="/result" render={() => <ResultPage />} />
        </Switch>
      </main>
    )
  }
}
