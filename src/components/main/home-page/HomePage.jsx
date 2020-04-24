import React from 'react';
import { history } from '../../../_helpers/history';
import { authHeader } from '../../../_helpers/auth-header';
import { userService } from '../../../_services/user.service';

export class HomePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            message: '',
            user: {},
            showDetails: false
        };
        this.user = {};
        this.logout = this.logout.bind(this);
        this.getUserDetails = this.getUserDetails.bind(this);
    }

    componentDidMount() {
        // console.log('home user: ', this.props.user);
        this.setState({ user: this.user });
    }

    componentWillMount() {
        if (authHeader().Authorization) {
            const user = authHeader().Authorization;
            this.user = user;

            this.props.setCurrentUser(user);
        } else {
            history.push('/login/sign-in');
        }
    }

    logout() {
        userService.logout();
    }

    goToAdminPage() {
        history.push('/admin');
    }

    getUserDetails() {
        this.setState({
            showDetails: !this.state.showDetails,
            user: userService.userDetails()
        });
    }

    render() {
        const user = this.user;

        return (
            <div style={{ minHeight: '100vh' }}
                className="col-md-6 col-md-offset-3">
                <h1 className="text-center py-5">Hi, {user.name}, at Home page!</h1>
                <p className="text-center">
                    <button
                        className="btn btn-danger mr-2"
                        onClick={this.logout}>
                        Logout
                    </button>
                    <button
                        className="btn btn-info"
                        onClick={this.getUserDetails}>
                        User Details
                    </button>
                </p>
                {this.state.showDetails && this.state.user && this.state.user.email ?
                    <div>
                        <h3>{this.state.user.name}</h3>
                        <div>created at: {this.state.user.created_at}</div>
                        <div>email: {this.state.user.email}</div>
                        <div>is admin: {this.state.user.is_admin}</div>
                        <div>updated at: {this.state.user.updated_at}</div>
                        <div>id: {this.state.user.id}</div>
                    </div>
                    : null}
            </div>
        );
    }
}
