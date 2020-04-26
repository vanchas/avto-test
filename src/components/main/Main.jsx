import React, { Component } from 'react'
import IntroPage from './intro-page/IntroPage'
import ResultPage from './result-page/ResultPage'
import { Route, Switch } from 'react-router-dom';
import { PrivateRoute } from '../../_services/PrivatRoute';
import { HomePage } from '../main/home-page/HomePage';
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
    this.scrollFunc = this.scrollFunc.bind(this);
  }

  scrollFunc(scrollValue) {
    new Promise(res => {
      this.setState({ scrollValue });
      res();
    }).then(() => {
      this.setState({ scrollValue: '' });
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
            <PrivateRoute path="/home"
              component={props => {
                return <HomePage {...props} />
              }} />

            <PrivateRoute path="/admin"
              component={props => {
                return <AdminPage
                  {...props} />
              }} />

            <Route path="/login"
              render={() => <Login
                langData={this.props.langData.form_login}
              />} />

            <Route path="/blog"
              render={props => <Blog {...props} />} />

            <Route exact path="/" render={() => <IntroPage
              langData={this.props.langData.intro_page}
              scrollValue={this.state.scrollValue}
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
