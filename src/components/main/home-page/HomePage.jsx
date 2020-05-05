import React from 'react';
import { history } from '../../../_helpers/history';
import { authHeader } from '../../../_helpers/auth-header';
import { userService } from '../../../_services/user.service';

export class HomePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showDetails: false
        };
        this.logout = this.logout.bind(this);
        this.getUserDetails = this.getUserDetails.bind(this);
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
        const user = authHeader().Authorization;

        return (
            <div style={{ minHeight: '100vh' }}
                className="mx-auto">
                <h1 className="text-center py-5">Hi, {user.email}, at Home page!</h1>
                <p className="text-center">
                    <button
                        className="btn btn-danger mr-2"
                        onClick={this.logout}>
                        Logout
                    </button>
                    <button
                        className="btn btn-info mr-2"
                        onClick={this.getUserDetails}>
                        User Details
                    </button>
                    {user && user.is_admin === 1 ?
                        <button
                            onClick={this.goToAdminPage}
                            className="btn btn-warning">
                            To Admin Page
                        </button>
                        : null}
                </p>
                {this.state.showDetails && this.state.user && this.state.user.email ?
                    <div>
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
