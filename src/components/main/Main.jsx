import React, { Component } from 'react'
import PropTypes from 'prop-types';
import IntroPage from './intro-page/IntroPage'
import ResultPage from './result-page/ResultPage'
import { Route, Switch } from 'react-router-dom';
import { PrivateRoute } from '../../_services/PrivatRoute';
import { HomePage } from '../main/home-page/HomePage';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import Login from './login-page/Login';
import Blog from './blog-page/Blog';
import { AdminPage } from './admin-page/AdminPage';


export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      carInfo: {},
      scrollValue: '',
      inputValue: ''
    };
    this.scrollFunc = this.scrollFunc.bind(this);
    this.setValue = this.setValue.bind(this);
  }

  scrollFunc = async (scrollValue) => {
    await this.setState({ scrollValue });
    this.setState({ scrollValue: '' });
  }

  setValue(inputValue) {
    this.setState({ inputValue });
  }

  render() {
    return (
      <div>
        <Header
          langData={this.props.langData}
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
                return <AdminPage {...props}
                  onSetLanguage={this.props.onSetLanguage}
                  changeKeyText={this.props.changeKeyText}
                  langData={this.props.langData}
                />
              }} />

            <Route path="/login"
              render={() => <Login
                langData={this.props.langData}
              />} />

            <Route path="/blog"
              render={props => <Blog {...props} />} />

            <Route exact path="/" render={() => <IntroPage
              setValue={this.setValue}
              langData={this.props.langData}
              scrollValue={this.state.scrollValue}
            />} />

            <Route path="/result" render={() => <ResultPage
              inputValue={this.state.inputValue}
              carInfo={this.state.carInfo}
              langData={this.props.langData}
            />} />
          </Switch>
        </main>

        <Footer
          langData={this.props.langData}
          scrollFunc={this.scrollFunc}
        />
      </div>
    )
  }
}

Main.propTypes = {
  langData: PropTypes.object,
  onSetLanguage: PropTypes.func
}
