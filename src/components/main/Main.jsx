import React, { Component } from 'react'
import IntroPage from './intro-page/IntroPage'
import ResultPage from './result-page/ResultPage'

import { Route, Switch } from 'react-router-dom';
import { PrivateRoute } from '../../_services/PrivatRoute';
import { HomePage } from '../main/home-page/HomePage';
import { history } from '../../_helpers/history';
import Header from '../header/Header';
import Login from './login-page/Login';
import Blog from './blog-page/Blog';
import { AdminPage } from './admin-page/AdminPage';


export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      carInfo: {},
      scrollValue: ''
    };
    this.setCarInfo = this.setCarInfo.bind(this);
    this.scrollFunc = this.scrollFunc.bind(this);
  }

  setCarInfo(result) {
    result.then(data => {
      this.setState({ carInfo: data });
    })
    history.push('/result');
  }

  scrollFunc(scrollValue) {
    new Promise(res => {
      this.setState({ scrollValue })
      res();
    }).then(() => {
      this.setState({ scrollValue: '' })
    })
  }

  render() {
    return (
      <div>
        <Header
          user={this.props.user}
          langData={this.props.langData.header}
          onSetLanguage={this.props.onSetLanguage}
          scrollFunc={this.scrollFunc}
        />
        <main>
          <Switch>
            <PrivateRoute exact path="/home"
              component={props => {
                return <HomePage
                  setCurrentUser={this.props.setCurrentUser}
                  user={this.props.user}
                  {...props} />
              }} />

            {(this.props.user && this.props.user.is_admin == 1) ?
              <PrivateRoute exact path="/admin"
                component={props => {
                  return <AdminPage
                    setCurrentUser={this.props.setCurrentUser}
                    user={this.props.user}
                    {...props} />
                }} /> :
              null
            }

            <Route path="/login"
              render={props => <Login
                setCurrentUser={this.props.setCurrentUser}
                langData={this.props.langData.form_login}
                {...props} />} />

            <Route path="/blog"
              render={props => <Blog {...props} />} />

            <Route exact path="/" render={() => <IntroPage
              langData={this.props.langData.intro_page}
              scrollValue={this.state.scrollValue}
              setCarInfo={this.setCarInfo}
            />} />
            <Route path="/result" render={() => <ResultPage
              carInfo={this.state.carInfo}
              langData={this.props.langData.result_page}
            />} />
          </Switch>
        </main>
      </div>
    )
  }
}
