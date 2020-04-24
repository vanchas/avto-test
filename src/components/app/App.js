import React from 'react';
import './App.scss';
import Main from '../main/Main';
import Footer from '../footer/Footer';
import { Router } from 'react-router-dom';
import { history } from '../../_helpers/history';
import { strings } from '../../localisation/localisation';
import { authHeader } from '../../_helpers/auth-header';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: this.props.user || {},
            lang: 'UA',
            langData: strings._props.UA
        }
        this.user = {};
        this.setCurrentUser = this.setCurrentUser.bind(this);
        this.onSetLanguage = this.onSetLanguage.bind(this);
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

    setCurrentUser = (user) => {
        // console.log('current user: ', user);
        this.user = user;
    }

    componentDidMount() {
        let user = authHeader().Authorization;
        this.setState({
            langData: strings._props.UA,
            user
        });
        // history.push('/');
    }

    render() {
        return (
            <Router history={history} >
                <div className="App" >
                    <Main
                        user={this.state.user}
                        langData={this.state.langData}
                        onSetLanguage={this.onSetLanguage}
                        setCurrentUser={this.setCurrentUser}
                    />
                    <Footer
                        langData={this.state.langData.footer}
                    />
                </div>
            </Router>
        );
    }
}

export default App;