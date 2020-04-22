import React from 'react';
import './App.scss';
import Header from '../header/Header';
import Main from '../main/Main';
import Footer from '../footer/Footer';
import { Router } from 'react-router-dom';
import { history } from '../../_helpers/history';

class App extends React.Component {
    componentDidMount() {
        // history.push('/');
    }

    render() {
        return (
            <Router history={history} >
                <div className="App" >
                    <Header />
                    <Main />
                    <Footer />
                </div>
            </Router>
        );
    }
}

export default App;