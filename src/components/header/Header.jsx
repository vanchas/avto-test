import React, { Component } from 'react'
import './header.scss'
import { Link } from 'react-router-dom'
import Logo from './image/navbar-brand-logo.png'
import ArrowDown from './image/arrow-down.png'
import Phone from './image/phone.png'
import Enter from './image/enter.png'
import $ from 'jquery'
import { userService } from '../../_services/user.service'
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavbarToggler,
  MDBCollapse
} from 'mdbreact';


export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      lang: 'RU',
      user: {}
    };
    this.logOut = this.logOut.bind(this);
  }

  onSelectLanguage(lang) {
    this.props.onSetLanguage(lang);
    this.setState({ lang });
    $('.navbar-toggler').click();
  }

  logOut() {
    userService.logout();
  }

  toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  navbarClose() {
    $('.navbar-toggler').click();
  }

  render() {
    // const user = this.props.user;
    const text = this.props.langData;

    return (
      <header className="header">
        <>
          <MDBNavbar color='indigo' dark expand='xl'
            className="navbar py-0">
            <MDBNavbarBrand>
              <Link className="navbar-brand d-flex flex-column text-white justify-content-center" to="/">
                <img src={Logo} alt="logo" className="m-auto" />
                <h2 className="h5"><b>Avto</b>Test</h2>
              </Link>
            </MDBNavbarBrand>

            <MDBNavbarToggler onClick={this.toggleCollapse} />

            <MDBCollapse id='navbarCollapse3' isOpen={this.state.isOpen} navbar>
              <MDBNavbarNav left className="justify-content-around pr-3 w-100">

                <MDBNavItem>
                  <Link to="/" className="btn nav-link h5 font-weight-light mb-0"
                    onClick={async () => {
                      this.props.scrollFunc('vin');
                      $('.navbar-toggler').click();
                    }} >{text.header_vin_item}</Link>
                </MDBNavItem>

                <MDBNavItem>
                  <Link to="/" className="btn nav-link h5 font-weight-light mb-0"
                    onClick={() => {
                      this.props.scrollFunc('overview');
                      $('.navbar-toggler').click();
                    }} >{text.header_reviews_item}</Link>
                </MDBNavItem>

                <MDBNavItem>
                  <Link to="/" className="btn nav-link h5 font-weight-light mb-0"
                    onClick={() => {
                      this.props.scrollFunc('full selection');
                      $('.navbar-toggler').click();
                    }} >{text.header_full_constructor_item}</Link>
                </MDBNavItem>

                <MDBNavItem>
                  <Link to="/blog" className="btn nav-link h5 font-weight-light mb-0"
                    onClick={() => {

                      $('.navbar-toggler').click();
                    }} >{text.header_blog_item}</Link>
                </MDBNavItem>

                <MDBNavItem>
                  <Link to="/login/sign-in" className="btn nav-link h5 font-weight-light mb-0"
                    onClick={() => {
                      $('.navbar-toggler').click();
                    }}
                  >{text.header_enter_item}
                    <img src={Enter} alt="" className="ml-2" /></Link>
                </MDBNavItem>

                <MDBNavItem>
                  <Link to="/home" className="btn nav-link h5 font-weight-light mb-0"
                    onClick={() => {
                      $('.navbar-toggler').click();
                    }} >{text.header_home_item}</Link>
                </MDBNavItem>

                <MDBNavItem className="nav-item-select">
                  <select className="browser-default custom-select language-select text-white" defaultValue={this.state.language} onChange={e => this.onSelectLanguage(e.target.value)}>
                    <option className="" value="UA">UA</option>
                    <option className="" value="RU">RU</option>
                    <option className="" value="EN">EN</option>
                  </select>
                  <img src={ArrowDown} alt="" />
                </MDBNavItem>

              </MDBNavbarNav>
            </MDBCollapse>
            <div className="call-info-block">
              <span className="text-white number">
                <img src={Phone} alt="phone" className="mr-2 mb-1" />
              +38096 470 27 00</span>
              <a href="tel:+380964702700" className="order-call-btn bg-transparent py-1 px-3"
                onClick={this.requestCall} >{text.header_btn_call}</a>
            </div>
          </MDBNavbar>
        </>
      </header>
    )
  }
}
