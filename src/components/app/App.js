import React from 'react';
import './App.scss';
import Main from '../main/Main';
import { Router } from 'react-router-dom';
import { history } from '../../_helpers/history';
import { strings } from '../../localisation/localisation';
import { authHeader } from '../../_helpers/auth-header';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            lang: 'UA',
            langData: strings._props.UA,
            user: {}
        }
        this.onSetLanguage = this.onSetLanguage.bind(this);
    }

    static getDerivedStateFromProps(props, state) {
        if (authHeader().Authorization) {
            return { user: authHeader().Authorization };
        }
        return null;
    }

    onSetLanguage = (lang) => {
        strings.setLanguage(lang);
        this.setState({ lang });
        if (lang === 'RU') {
            this.setState({ langData: strings._props.RU });
        } else if (lang === 'UA') {
            this.setState({ langData: strings._props.UA });
        } else if (lang === 'EN') {
            this.setState({ langData: strings._props.EN });
        }
    }

    // componentDidMount() {
    //     const lang = JSON.parse(localStorage.getItem('avto-test-lang'));

    //     if (lang !== null && lang !== undefined) {
    //         this.onSetLanguage(lang);
    //     } else {
    //         localStorage.setItem('avto-test-lang', 'UA');
    //     }
    // }

    render() {
        return (
            <Router history={history} >
                <div className="App" >
                    <Main
                        user={this.state.user}
                        langData={this.state.langData}
                        onSetLanguage={this.onSetLanguage}
                    />
                </div>
            </Router>
        );
    }
}

export default App;