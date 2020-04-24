import React, { Component } from 'react'
import './header.scss'
import { Link } from 'react-router-dom'
// import { history } from '../../_helpers/history'
import Logo from './image/navbar-brand-logo.png'
import ArrowDown from './image/arrow-down.png'
import Phone from './image/phone.png'
import Enter from './image/enter.png'
import $ from 'jquery'
import { userService } from '../../_services/user.service'
import { history } from '../../_helpers/history'


export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lang: 'RU'
    };
    // this.logOut = this.logOut.bind(this);
  }

  componentDidMount() {
    // console.log(this.props.user);

    // this.setState({ user: this.props.user });
  }

  componentWillMount() {
    // console.log(this.props.user);
  }

  onSelectLanguage(lang) {
    this.props.onSetLanguage(lang);
    this.setState({ lang });
    $('.navbar-toggler').click();
  }

  // logOut() {
  //   userService().logout();
  // }

  // goToLoginPage() {
  //   // history.push('/login');
  // }

  render() {
    console.log(this.props.user);

    const text = this.props.langData;

    return (
      <header className="header">
        <nav className="navbar navbar-dark navbar-expand-lg">
          <Link className="navbar-brand d-flex flex-column text-white justify-content-center" to="/">
            <img src={Logo} alt="logo" className="m-auto" />
            <h2 className="h5"><b>Avto</b>Test</h2>
          </Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <i></i><i></i><i></i>
          </button>

          <div className="h-100 collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto w-100 d-flex justify-content-around align-content-center px-3">
              {(this.props.user && this.props.user.is_admin == 1) ?
                <div className="admin-home-links"> 
                  <li className="nav-item">
                    <Link to="/admin" className="btn nav-link h5 font-weight-light mb-0"
                      onClick={async () => {
                        $('.navbar-toggler').click();
                      }} >Admin</Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/home" className="btn nav-link h5 font-weight-light mb-0"
                      onClick={async () => {
                        $('.navbar-toggler').click();
                      }} >Home</Link>
                  </li>
                </div>
                : null}
              {(this.props.user && this.props.user.is_admin == 0) ?
                <li className="nav-item">
                  <Link to="/home" className="btn nav-link h5 font-weight-light mb-0"
                    onClick={async () => {
                      $('.navbar-toggler').click();
                    }} >Home</Link>
                </li>
                : null}
              <li className="nav-item">
                <Link to="/" className="btn nav-link h5 font-weight-light mb-0"
                  onClick={async () => {
                    this.props.scrollFunc('vin');
                    $('.navbar-toggler').click();
                  }} >{text.header_vin_item}</Link>
              </li>
              <li className="nav-item">
                <Link to="/" className="btn nav-link h5 font-weight-light mb-0"
                  onClick={() => {
                    this.props.scrollFunc('overview');
                    $('.navbar-toggler').click();
                  }} >{text.header_reviews_item}</Link>
              </li>
              <li className="nav-item">
                <Link to="/" className="btn nav-link h5 font-weight-light mb-0"
                  onClick={() => {
                    this.props.scrollFunc('full selection');
                    $('.navbar-toggler').click();
                  }} >{text.header_full_constructor_item}</Link>
              </li>
              <li className="nav-item">
                <Link to="/blog" className="btn nav-link h5 font-weight-light mb-0"
                  onClick={() => {

                    $('.navbar-toggler').click();
                  }} >{text.header_blog_item}</Link>
              </li>

              {/* {this.props.user && this.props.user.email ?
                <li className="nav-item">
                  <Link to="/login/sign-in" className="btn nav-link h5 font-weight-light mb-0"
                    onClick={() => {
                      this.logOut();
                      $('.navbar-toggler').click();
                    }}
                  >LogOut
                  <img src={Enter} alt="" className="ml-2" /></Link>
                </li>
                : */}
              <li className="nav-item">
                <Link to="/login/sign-in" className="btn nav-link h5 font-weight-light mb-0"
                  onClick={() => {
                    // this.goToLoginPage();
                    $('.navbar-toggler').click();
                  }}
                >{text.header_enter_item}
                  <img src={Enter} alt="" className="ml-2" /></Link>
              </li>
              {/* } */}

              <li className="nav-item nav-item-select">
                <select className="browser-default custom-select language-select text-white" defaultValue={this.state.language} onChange={e => this.onSelectLanguage(e.target.value)}>
                  <option className="" value="UA">UA</option>
                  <option className="" value="RU">RU</option>
                  <option className="" value="EN">EN</option>
                </select>
                <img src={ArrowDown} alt="" />
              </li>
            </ul>
          </div>
          <div className="call-info-block">
            <span className="text-white number">
              <img src={Phone} alt="phone" className="mr-2 mb-1" />
              +38096 470 27 00</span>
            <a href="tel:+380964702700" className="order-call-btn bg-transparent py-1 px-3"
              onClick={this.requestCall} >{text.header_btn_call}</a>
          </div>
        </nav>
      </header>
    )
  }
}
