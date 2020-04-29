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
      footerScrollValue: '',
      inputValue: ''
    };
    this.scrollFunc = this.scrollFunc.bind(this);
    this.setValue = this.setValue.bind(this);
    // this.footerScrollFunc = this.footerScrollFunc.bind(this);
  }

  scrollFunc = async (scrollValue) => {
    await this.setState({ scrollValue });
    this.setState({ scrollValue: '' });
  }

  // footerScrollFunc(footerScrollValue) {
  //   this.setState({ footerScrollValue });
  // }

  setValue(inputValue) {
    this.setState({ inputValue });
  }

  render() {
    return (
      <div>
        <Header
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
              setValue={this.setValue}
              langData={this.props.langData.intro_page}
              scrollValue={this.state.scrollValue}
            // footerScrollValue={this.state.footerScrollValue}
            />} />

            <Route path="/result" render={() => <ResultPage
              inputValue={this.state.inputValue}
              carInfo={this.state.carInfo}
              langData={this.props.langData.result_page}
            />} />
          </Switch>
        </main>

        <Footer
          langData={this.props.langData.footer}
          scrollFunc={this.scrollFunc}
        // footerScrollFunc={this.footerScrollFunc}
        />
      </div>
    )
  }
}

Main.propTypes = {
  langData: PropTypes.object,
  onSetLanguage: PropTypes.func
}
