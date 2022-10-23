import React, { useState } from "react"

import { Link } from "react-router-dom"

// Import menuDropdown
import ProfileMenu from "./ProfileMenu"

import logo from "../../assets/images/logo.svg"
import logoLight from "../../assets/images/logo-light.png"
import logoLightSvg from "../../assets/images/logo-light.svg"
import logoDark from "../../assets/images/logo-dark.png"

const Header = props => {
  return (
    <React.Fragment>
      <header id="page-topbar">
        <div className="navbar-header">
          <div className="d-flex">
            <div className="navbar-brand-box">
              <Link to="/" className="logo logo-dark">
                <span className="logo-sm">
                  <img src={logo} alt="" height="22" />
                </span>
                <span className="logo-lg">
                  <img src={logoDark} alt="" height="17" />
                </span>
              </Link>

              <Link to="/" className="logo logo-light">
                <span className="logo-sm">
                  <img src={logoLightSvg} alt="" height="22" />
                </span>
                <span className="logo-lg">
                  <img src={logoLight} alt="" height="19" />
                </span>
              </Link>
            </div>

            <button
              type="button"
              className="btn btn-sm px-3 font-size-16 d-lg-none header-item"
              data-toggle="collapse"
              onClick={() => {
                props.toggleLeftmenu(!props.leftMenu)
              }}
              data-target="#topnav-menu-content"
            >
              <i className="fa fa-fw fa-bars" />
            </button>
          </div>

          <div className="d-flex">
            <ProfileMenu />
          </div>
        </div>
      </header>
    </React.Fragment>
  )
}

export default Header
