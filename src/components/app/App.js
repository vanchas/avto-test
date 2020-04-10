import React from 'react';
import './App.scss';
import Header from '../header/Header';
import Main from '../main/Main';
import Footer from '../footer/Footer';

// import { Router } from 'react-router-dom';

// import { history } from '../../_helpers/history';
// import { Role } from '../../_helpers/role';
// import { authenticationService } from '../../_services/authentication.service';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            // currentUser: null,
            // isAdmin: false
        };
    }

    // componentDidMount() {
    //   authenticationService.currentUser.subscribe(x => this.setState({
    //     currentUser: x,
    //     isAdmin: x && x.role === Role.Admin
    //   }));
    //   history.push('/home');
    // }

    logout() {
        //   authenticationService.logout();
        //   history.push('/intro');
    }

    render() {
        // const { currentUser, isAdmin } = this.state;

        return (
            // <Router history={history} >
            <div className="App" >
                <Header
                // currentUser={currentUser}
                //     isAdmin={isAdmin}
                //     logout={this.logout}
                />
                <Main />
                <Footer />
            </div>
            // </Router>
        );
    }
}

export default App;