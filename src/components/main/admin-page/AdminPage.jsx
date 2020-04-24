import React from 'react';
import { history } from '../../../_helpers/history';
import { authHeader } from '../../../_helpers/auth-header';
import { userService } from '../../../_services/user.service';

export class AdminPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            message: '',
            user: {}
        };
        this.user = {};
        this.logout = this.logout.bind(this);
    }

    componentDidMount() {
        // console.log('home user: ', this.props.user);
        this.setState({ user: this.user });
    }

    componentWillMount() {
        if (!authHeader().Authorization.is_admin == 1) {
            history.push('/home');
        }
    }

    logout() {
        userService.logout();
    }

    render() {
        const user = this.user;

        return (
            <div style={{ minHeight: '100vh' }}
                className="col-md-6 col-md-offset-3">
                <h1 className="text-center py-5">Hi, admin {user.name}, at Admin page!</h1>
                <p className="text-center">
                    <button
                        className="btn btn-danger"
                        onClick={this.logout}>
                        Logout
                    </button>
                </p>
            </div>
        );
    }
}
