import React, { Component } from 'react'
// import { Switch, Route } from 'react-router-dom'
import IntroPage from './intro-page/IntroPage'
import ResultPage from './result-page/ResultPage'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { PrivateRoute } from '../../_services/PrivatRoute';
import { HomePage } from '../main/home-page/HomePage';
import { LoginPage } from '../main/login-page/LoginPage';


export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
        carInfo: {}
    };
    this.setCarInfo = this.setCarInfo.bind(this);
}

setCarInfo(carInfo) {
  this.setState({ carInfo });
  // console.log(carInfo);

}

  render() {
    return (
      <main>
        <Switch>
          <PrivateRoute exact path="/home" component={HomePage} />
          <Route path="/login" component={LoginPage} />

          <Route exact path="/" render={() => <IntroPage setCarInfo={this.setCarInfo} />} />
          <Route path="/result" render={() => <ResultPage carInfo={this.state.carInfo} />} />
        </Switch>
      </main>
    )
  }
}
