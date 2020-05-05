import React from 'react';
import './App.scss';
import Main from '../main/Main';
import { Router } from 'react-router-dom';
import { history } from '../../_helpers/history';
// import { strings } from '../../localisation/localisation';
import { authHeader } from '../../_helpers/auth-header';
import { languageService } from '../../_services/lang.service';
import { getLang } from '../../_helpers/lang-helper';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            langData: {},
            // langData: strings.UA
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

        // strings.setLanguage(lang);
        // this.setState({ lang });
        // if (lang === 'ru') {
        //     this.setState({ langData: strings.RU });
        // } else if (lang === 'ua') {
        //     this.setState({ langData: strings.UA });
        // } else if (lang === 'en') {
        //     this.setState({ langData: strings.EN });
        // }
    }

    changeKeyText(newKey, newKeyText, newKeyLang) {
        languageService.changeKeyText(newKey, newKeyText, newKeyLang);
    }

    componentDidMount = async () => {
        await languageService.changeLanguage('ua');
        setTimeout(() => {
            this.setState({
                langData: getLang()
            });
        }, 100);
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
                        {/* <h1 className="text-danger mx-auto"><b className="rounded pl-1 bg-danger text-white">Avto</b>Test</h1> */}
                    </div>
                }
            </Router>
        );
    }
}

export default App;