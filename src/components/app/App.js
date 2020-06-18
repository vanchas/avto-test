import React from "react";
import "./App.scss";
import Main from "../main/Main";
import { Router } from "react-router-dom";
import { history } from "../../_helpers/history";
import { authHeader } from "../../_helpers/auth-header";
import { languageService } from "../../_services/lang.service";
import GoogleTagManager from "./GoogleTagManager";
import { setCurrentLanguage } from "../../redux/appActions";
import { connect } from 'react-redux'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      langData: {},
      user: {},
    };
    this.onSetLanguage = this.onSetLanguage.bind(this);
  }

  static getDerivedStateFromProps = async (props, state) => {
    if (authHeader().Authorization) {
      return { user: authHeader().Authorization };
    }
    return null;
  };
  onSetLanguage = async lang => {
    this.props.setCurrentLanguage(lang);
  };
  changeKeyText(newKey, newKeyText, newKeyLang) {
    languageService.changeKeyText(newKey, newKeyText, newKeyLang);
  }

  componentDidMount = async () => {
    this.props.setCurrentLanguage('ua');
  };

  render() {
    return (
      <Router history={history}>
        <GoogleTagManager gtmId="GTM-5V6X2HP" />

        {this.props.langData && this.props.langData.intro_header ? (
          <div className="App">
            <Main
              user={this.state.user}
              langData={this.props.langData}
              onSetLanguage={this.onSetLanguage}
              changeKeyText={this.changeKeyText}
            />
          </div>
        ) : (
            <div className="pt-5 mt-3 d-flex">
              <div
                className="mx-auto d-block spinner-border text-success"
                role="status"
              >
                <span className="sr-only">Loading...</span>
              </div>
            </div>
          )}
      </Router>
    );
  }
}

const mapStateToProps = state => {
  return { langData: state.app.language }
}

const mapDispatchToProps = {
  setCurrentLanguage
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
