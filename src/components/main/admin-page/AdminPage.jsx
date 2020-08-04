import React from 'react';
import './admin.scss';
import { history } from '../../../_helpers/history';
import { authHeader } from '../../../_helpers/auth-header';
import { userService } from '../../../_services/user.service';
import $ from 'jquery'
import { connect } from 'react-redux';
import { getRequestsData, getUsersData } from '../../../redux/adminActions';
import UsersList from "./UsersList";
import ChangeStrings from "./ChangeStrings";
import Pagination from "../../utils/Pagination";
import AdminFormsManage from "./AdminFormsManage";

class AdminPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newKey: '',
      newKeyLang: '',
      newKeyText: '',
      currentPage: 1,
      currentPageUsers: 1,
      component: 'requests',
    };
    this.pages = [];
    this.userPages = [];
    this.logout = this.logout.bind(this);
    this.changeKeyText = this.changeKeyText.bind(this);
    this.paginationDataHandler = this.paginationDataHandler.bind(this);
  }

  componentWillReceiveProps(props) {
    this.userPages = [];
    for (let i = 0; i < props.users.last_page; i++) {
      this.userPages.push(1);
    }
    this.pages = [];
    for (let i = 0; i < props.data.last_page; i++) {
      this.pages.push(1);
    }
  }
  // users data
  showPreviousPageUsers = (e) => {
    e.preventDefault();
    if (this.state.currentPageUsers > 1) {
      this.setState({ currentPageUsers: this.state.currentPageUsers - 1 });
      this.props.getUsersData(this.state.currentPageUsers - 1);
    }
  }
  showNextPageUsers = (e) => {
    e.preventDefault();
    if (this.state.currentPageUsers < this.userPages.length) {
      this.setState({ currentPageUsers: this.state.currentPageUsers + 1 });
      this.props.getUsersData(this.state.currentPageUsers + 1);
    }
  }
  paginationUsersHandler = (page, e) => {
    e.preventDefault();
    this.setState({ currentPageUsers: page });
    this.props.getUsersData(page);
  }
  // requests data
  showPreviousPageData = (e) => {
    e.preventDefault();
    if (this.state.currentPage > 1) {
      this.setState({ currentPage: this.state.currentPage - 1 });
      this.props.getRequestsData(this.state.currentPage - 1);
    }
  }
  showNextPageData = (e) => {
    e.preventDefault();
    if (this.state.currentPage < this.pages.length) {
      this.setState({ currentPage: this.state.currentPage + 1 });
      this.props.getRequestsData(this.state.currentPage + 1);
    }
  }
  paginationDataHandler = (page, e) => {
    e.preventDefault();
    this.setState({ currentPage: page });
    this.props.getRequestsData(page);
  }

  changeComponent = ref => {
    this.setState({ component: ref });
  }
  componentDidMount() {
    $('.language-text').hide();
    this.props.getRequestsData(1);
    this.props.getUsersData(1);
  }
  componentWillMount() {
    if (authHeader().Authorization.is_admin !== 1) {
      history.push('/home');
    }
  }
  logout() {
    userService.logout();
  }
  changeKeyText = async (e) => {
    e.preventDefault();

    if (this.state.newKey.length && this.state.newKeyText.length && this.state.newKeyLang.length) {
      await this.props.changeKeyText(
        this.state.newKey,
        this.state.newKeyText,
        this.state.newKeyLang
      );
      this.setState({
        newKey: '', newKeyLang: '', newKeyText: ''
      });
      this.props.onSetLanguage(this.props.langData.id);
    } else {
      alert('Для отправки изменений поле "Ключ" и "Новый текст ключа" должны быть заполнены');
    }
  }

  onKeyInput = (key) => {
    this.setState({newKey: key})
  }
  onNewKeyLanguageChange = (lang) => {
    this.setState({newKeyLang: lang})
  }
  onValueInput = (value) => {
    this.setState({newKeyText: value})
  }

  paginationClickHandler = (page) => {
    if (page === "next") {
      if (this.props.users.current_page < this.props.users.last_page) {
        this.props.getUsersData(this.props.users.current_page + 1)
      }
    } else if (page === "prev") {
      if (this.props.users.current_page !== 1) {
        this.props.getUsersData(this.props.users.current_page - 1)
      }
    } else {
      if (this.props.users.current_page !== page) {
        this.props.getUsersData(page)
      }
    }
  };

  paginationClickHandlerRequests = (page) => {
    if (page === "next") {
      if (this.props.data.current_page < this.props.data.last_page) {
        this.props.getRequestsData(this.props.data.current_page + 1)
      }
    } else if (page === "prev") {
      if (this.props.data.current_page !== 1) {
        this.props.getRequestsData(this.props.data.current_page - 1)
      }
    } else {
      if (this.props.data.current_page !== page) {
        this.props.getRequestsData(page)
      }
    }
  };

  render() {
    const user = authHeader().Authorization;
    const text = this.props.langData;

    return (
      <div style={{ minHeight: '100vh' }}
        className="mx-auto">
        <h3 className="text-center py-5">Привіт, адмін {user.email}, Bи ввійшли в систему!</h3>

        <div>
          <div className="text-center pb-3">
            <button
              className="btn btn-danger"
              onClick={this.logout}>
              Вийти
          </button>
          </div>
          <nav aria-label="...">
            <ul className="pagination justify-content-center admin-page-control">
              <li className={`${this.state.component === 'text' && 'active'} page-item`} onClick={e => this.changeComponent('text')}>
                <a className={`${this.state.component === 'text' && 'active'} page-link`} href="#">
                  Изменить текст</a>
              </li>
              <li className={`${this.state.component === 'requests' && 'active'} page-item`} onClick={e => this.changeComponent('requests')}>
                <a className="page-link" href="#">
                  Данные по запросам</a>
              </li>
              <li className={`${this.state.component === 'users' && 'active'} page-item`} onClick={e => this.changeComponent('users')}>
                <a className="page-link" href="#">
                  Данные по пользователям</a>
              </li>
              <li className={`${this.state.component === 'forms' && 'active'} page-item`} onClick={e => this.changeComponent('forms')}>
                <a className="page-link" href="#">
                  Управление полями формы</a>
              </li>
            </ul>
          </nav>
        </div>

        <hr />
        {this.state.component === 'requests' &&
          <div className="container">
            <Pagination
                handler={this.paginationClickHandlerRequests}
                current={this.props.data.current_page}
                array={Array.from({length: this.props.data.last_page})}
            />

            {this.props.data && this.props.data.data && this.props.data.data.length ? <div>
              <h4 className="text-center">Данные по запросам</h4>
              <table className="table">
                <thead>
                  <tr>
                    <th>№</th>
                    <th>result</th>
                    <th>query</th>
                    <th>datetime</th>
                  </tr>
                </thead>
                <tbody>
                  {this.props.data.data.map((d, i) => (
                    <tr key={i}>
                      <th>{i + 1}</th>
                      <td>{d.result}</td>
                      <td>{d.query}</td>
                      <td>{d.datetime}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div> : null}

            <Pagination
                handler={this.paginationClickHandlerRequests}
                current={this.props.data.current_page}
                array={Array.from({length: this.props.data.last_page})}
            />
          </div>
        }


        {this.state.component === 'forms' &&
          <AdminFormsManage />
        }


        {this.state.component === 'users' &&
          <div className="container">
            <Pagination
                handler={this.paginationClickHandler}
                current={this.props.users.current_page}
                array={Array.from({length: this.props.users.last_page})}
            />

            {this.props.users && this.props.users.data && this.props.users.data.length ?
                <UsersList users={this.props.users} />: null}

            <Pagination
                handler={this.paginationClickHandler}
                current={this.props.users.current_page}
                array={Array.from({length: this.props.users.last_page})}
            />
          </div>
        }

        {this.state.component === 'text' ?
        <ChangeStrings
            text={text}
            onKeyInput={this.onKeyInput}
            onValueInput={this.onValueInput}
            onNewKeyLanguageChange={this.onNewKeyLanguageChange}
            key={this.state.newKey}
            value={this.state.newKeyText}
            submitHandler={this.changeKeyText}
        />
        : null}
      </div>
    );
  }
}

const mapStateToProps = ({ admin }) => {
  return { data: admin.data, users: admin.users }
}

const mapDispatchToProps = {
  getRequestsData, getUsersData
}

export default connect(mapStateToProps, mapDispatchToProps)(AdminPage);
