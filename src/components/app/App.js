import React from 'react';
import './App.scss';
import Main from '../main/Main';
import { Router } from 'react-router-dom';
import { history } from '../../_helpers/history';
import { authHeader } from '../../_helpers/auth-header';
import { languageService } from '../../_services/lang.service';
import { getLang, setLang } from '../../_helpers/lang-helper';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            langData: {},
            user: {}
        }
        this.onSetLanguage = this.onSetLanguage.bind(this);
    }


    static getDerivedStateFromProps = async (props, state) => {
        if (authHeader().Authorization) {
            return { user: authHeader().Authorization };
        }
        return null;
    }


    onSetLanguage = async (lang) => {
        await languageService.changeLanguage(lang);
        setTimeout(() => {
            this.setState({
                langData: getLang()
            });
        }, 500);
    }

    changeKeyText(newKey, newKeyText, newKeyLang) {
        languageService.changeKeyText(newKey, newKeyText, newKeyLang);
    }

    componentDidMount = async () => {
        fetch('https://avtotest.org', {
            method: 'GET',
            headers: {
              'Access-Control-Allow-Origin': '*',
              'Content-Type': 'application/json;charset=utf-8',
              'X-localization': 'ua',
            }
          })
            .then((res) => {
              // console.log(res);
        
              return res.json().then(data => {
                // console.log(data);
        
                return setLang(data);
              })
        
            })
            .catch(error => {
              console.error('Error:', error);
            });
        // await languageService.changeLanguage('ua');
        setTimeout(() => {
            this.setState({
                langData: getLang()
            });
        }, 200);
    }

    render() {
        return (
            <Router history={history} >
                {this.state.langData
                    && this.state.langData.intro_header
                    ?
                    <div className="App" >
                        <Main
                            user={this.state.user}
                            langData={this.state.langData}
                            onSetLanguage={this.onSetLanguage}
                            changeKeyText={this.changeKeyText}
                        />
                    </div>
                    : <div className="pt-5 mt-3 d-flex">
                        <div className="mx-auto d-block spinner-border text-success" role="status">
                            <span className="sr-only">Loading...</span>
                        </div>
                    </div>
                }
            </Router>
        );
    }
}

export default App;