import React from 'react';
import { history } from '../../../_helpers/history';
import { authHeader } from '../../../_helpers/auth-header';
import { userService } from '../../../_services/user.service';
import './home.scss';

export class HomePage extends React.Component {
    constructor(props) {
        super(props);
        this.logout = this.logout.bind(this);
    }

    logout() {
        userService.logout();
    }

    goToAdminPage() {
        history.push('/admin');
    }

    render() {
        const user = authHeader().Authorization;

        return (
            <div style={{ minHeight: '100vh' }}
                className="home-page mx-auto">
                <h3 className="text-center py-5">Привіт, {user.email}, Bи ввійшли в систему!</h3>
                <p className="text-center">Вам доступно 7 перевірок на добу.</p>
                <p className="text-center">
                    <button
                        className="btn btn-danger mr-2"
                        onClick={this.logout}>
                        Вийти
                    </button>
                    {user && user.is_admin === 1 ?
                        <button
                            onClick={this.goToAdminPage}
                            className="btn btn-warning">
                            Сторінка адміна
                        </button>
                        : null}
                </p>
            </div>
        );
    }
}
