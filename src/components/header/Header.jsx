import React, { Component } from "react";
import "./header.scss";
import { Link } from "react-router-dom";
import Logo from "./image/navbar-brand-logo.png";
import ArrowDown from "./image/arrow-down.png";
import Phone from "./image/phone.png";
import Enter from "./image/enter.png";
import $ from "jquery";
import PropTypes from "prop-types";
import { userService } from "../../_services/user.service";
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavbarToggler,
  MDBCollapse,
} from "mdbreact";
import { authHeader } from "../../_helpers/auth-header";
import { history } from "../../_helpers/history";
import { OrderCall } from "./ModalForm";
import InspectionModal from "./InspectionModal";
import {OrderForm} from "../main/result-page/ModalForm";

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      lang: "RU",
    };
    this.logOut = this.logOut.bind(this);
  }

  onSelectLanguage(lang) {
    this.props.onSetLanguage(lang);
    this.setState({ lang });
    $(".navbar-toggler").click();
  }

  logOut() {
    if (authHeader().Authorization) {
      return userService.logout();
    }
  }

  toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  navbarClose() {
    $(".navbar-toggler").click();
  }

  render() {
    const text = this.props.langData;

    return (
      <header className="header">
        <>
          <MDBNavbar color="indigo" dark expand="xl" className="navbar py-0">
            <MDBNavbarBrand>
              <Link
                className="navbar-brand d-flex flex-column text-white justify-content-center"
                to="/"
                onClick={() => this.setState({ isOpen: false })}
              >
                <img src={Logo} alt="logo" className="m-auto" />
                <h2 className="h5">
                  <b>Avto</b>Test
                </h2>
              </Link>
            </MDBNavbarBrand>

            <MDBNavbarToggler onClick={this.toggleCollapse} />

            <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
              <MDBNavbarNav left className="justify-content-around pr-3 w-100">
                <MDBNavItem>
                  <span
                    className="btn nav-link h5 font-weight-light mb-0"
                    onClick={async () => {
                      $(".navbar-toggler").click();
                      await history.push("/");
                      this.props.scrollFunc("vin");
                    }}
                  >
                    {text.header_vin_item}
                  </span>
                </MDBNavItem>

                <MDBNavItem>
                  <span
                    className="btn nav-link h5 font-weight-light mb-0"
                    onClick={async () => {
                      $(".navbar-toggler").click();
                      await history.push("/");
                      this.props.scrollFunc("overview");
                    }}
                  >
                    {text.header_reviews_item}
                  </span>
                </MDBNavItem>

                <MDBNavItem>
                  <span
                    className="btn nav-link h5 font-weight-light mb-0"
                    onClick={async () => {
                      $(".navbar-toggler").click();
                      await history.push("/");
                      this.props.scrollFunc("full selection");
                    }}
                  >
                    {text.header_full_constructor_item}
                  </span>
                </MDBNavItem>

                <MDBNavItem>
                  <Link
                    to="/blog"
                    className="btn nav-link h5 font-weight-light mb-0"
                    onClick={() => {
                      $(".navbar-toggler").click();
                    }}
                  >
                    {text.header_blog_item}
                  </Link>
                </MDBNavItem>

                <MDBNavItem>
                  <Link
                    to="/login/sign-in"
                    className="btn nav-link h5 font-weight-light mb-0"
                    onClick={() => {
                      this.logOut();
                      $(".navbar-toggler").click();
                    }}
                  >
                    {text.header_enter_item}
                    <img src={Enter} alt="" className="ml-2" />
                  </Link>
                </MDBNavItem>

                <MDBNavItem>
                  <Link
                    to="/home"
                    className="btn nav-link h5 font-weight-light mb-0"
                    onClick={() => {
                      $(".navbar-toggler").click();
                    }}
                  >
                    {text.header_home_item}
                  </Link>
                </MDBNavItem>

                <MDBNavItem className="nav-item-select">
                  <select
                    className="browser-default custom-select language-select text-white"
                    defaultValue={this.state.language}
                    onClick={() => $(".select-img").toggleClass("img-reverse")}
                    onChange={(e) => this.onSelectLanguage(e.target.value)}
                  >
                    <option className="" value="ua">
                      UA
                    </option>
                    <option className="" value="ru">
                      RU
                    </option>
                    <option className="" value="en">
                      EN
                    </option>
                  </select>
                  <img className="select-img" src={ArrowDown} alt="" />
                </MDBNavItem>
              </MDBNavbarNav>
            </MDBCollapse>
            <div className="call-info-block">
              <a href="tel:+380964702700" className="text-white number">
                <img src={Phone} alt="phone" className="mr-2 mb-1" />
                <span>+38096 470 27 00</span>
              </a>
              <OrderCall
                langData={this.props.langData}
                header_btn_call={text.header_btn_call}
              />
            </div>

            <div className="mobile-call-block">
              <InspectionModal
                langData={this.props.langData}
                inspection_on_site_modal_button={text.inspection_on_site_modal_button}
              />
              {/*<OrderForm*/}
              {/*    price_block_card_btn_buy={text.inspection_on_site_modal_button}*/}
              {/*    langData={this.props.langData}*/}
              {/*/>*/}
              <a href="tel:+380964702700" className="text-white number">
                {/*<img src={Phone} alt="phone" className="mr-2 mb-1" />*/}
                <svg
                  version="1.1"
                  id="Capa_1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  // x="0px"
                  // y="0px"
                  viewBox="0 0 384 384"
                  enableBackground={`new 0 0 384 384`}
                  xmlSpace="preserve"
                >
                  <g>
                    <g>
                      <path
                        d="M353.188,252.052c-23.51,0-46.594-3.677-68.469-10.906c-10.719-3.656-23.896-0.302-30.438,6.417l-43.177,32.594
			c-50.073-26.729-80.917-57.563-107.281-107.26l31.635-42.052c8.219-8.208,11.167-20.198,7.635-31.448
			c-7.26-21.99-10.948-45.063-10.948-68.583C132.146,13.823,118.323,0,101.333,0H30.813C13.823,0,0,13.823,0,30.813
			C0,225.563,158.438,384,353.188,384c16.99,0,30.813-13.823,30.813-30.813v-70.323C384,265.875,370.177,252.052,353.188,252.052z"
                      />
                    </g>
                  </g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                </svg>
              </a>
            </div>
          </MDBNavbar>
        </>
      </header>
    );
  }
}

Header.propTypes = {
  langData: PropTypes.object,
};
