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
import AdminPageControl from "./AdminPageControl";
import AdminRequestsList from "./AdminRequestsList";

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
    this.changeKeyText = this.changeKeyText.bind(this);
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
              onClick={userService.logout}>
              Вийти
          </button>
          </div>
          <AdminPageControl
              component={this.state.component}
              changeComponent={this.changeComponent}
          />
        </div>

        <hr />
        {this.state.component === 'requests' &&
          <div className="container">
            <Pagination
                handler={this.paginationClickHandlerRequests}
                current={this.props.data.current_page}
                array={Array.from({length: this.props.data.last_page})}
            />

            {this.props.data && this.props.data.data && this.props.data.data.length ?
              <AdminRequestsList data={this.props.data.data} /> : null}

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
