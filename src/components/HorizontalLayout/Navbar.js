import PropTypes from "prop-types"
import React, { useState, useEffect } from "react"
import { Row, Col, Collapse } from "reactstrap"
import { Link, withRouter } from "react-router-dom"
import classname from "classnames"

//i18n

import { connect } from "react-redux"

const Navbar = props => {
  const [dashboard, setdashboard] = useState(false)
  const views = localStorage.getItem("views")

  useEffect(() => {
    var matchingMenuItem = null
    var ul = document.getElementById("navigation")
    var items = ul.getElementsByTagName("a")
    for (var i = 0; i < items.length; ++i) {
      if (props.location.pathname === items[i].pathname) {
        matchingMenuItem = items[i]
        break
      }
    }
    if (matchingMenuItem) {
      activateParentDropdown(matchingMenuItem)
    }
  })

  function activateParentDropdown(item) {
    item.classList.add("active")
    const parent = item.parentElement
    if (parent) {
      parent.classList.add("active") // li
      const parent2 = parent.parentElement
      parent2.classList.add("active") // li
      const parent3 = parent2.parentElement
      if (parent3) {
        parent3.classList.add("active") // li
        const parent4 = parent3.parentElement
        if (parent4) {
          parent4.classList.add("active") // li
          const parent5 = parent4.parentElement
          if (parent5) {
            parent5.classList.add("active") // li
            const parent6 = parent5.parentElement
            if (parent6) {
              parent6.classList.add("active") // li
            }
          }
        }
      }
    }
    return false
  }

  return (
    <React.Fragment>
      <div className="topnav">
        {views == "/buyerBoard" && (
          <div className="container-fluid">
            <nav
              className="navbar navbar-light navbar-expand-lg topnav-menu"
              id="navigation"
            >
              <Collapse
                isOpen={props.leftMenu}
                className="navbar-collapse"
                id="topnav-menu-content"
              >
                <ul className="navbar-nav">
                  <li className="nav-item dropdown">
                    <Link
                      className="nav-link dropdown-toggle arrow-none"
                      onClick={e => {
                        e.preventDefault()
                        setdashboard(!dashboard)
                      }}
                      to="/buyerBoard"
                    >
                      <i className="bx bx-home-circle me-2"></i>
                      Dashboard {props.menuOpen}
                      <div className="arrow-down"></div>
                    </Link>
                    <div
                      className={classname("dropdown-menu", {
                        show: dashboard,
                      })}
                    >
                      <Link to="/buyerBoard" className="dropdown-item">
                        Product List
                      </Link>
                      <Link to="/orderList" className="dropdown-item">
                        My order list
                      </Link>
                    </div>
                  </li>
                </ul>
              </Collapse>
            </nav>
          </div>
        )}
        {views == "/sellerBoard" && (
          <div className="container-fluid">
            <nav
              className="navbar navbar-light navbar-expand-lg topnav-menu"
              id="navigation"
            >
              <Collapse
                isOpen={props.leftMenu}
                className="navbar-collapse"
                id="topnav-menu-content"
              >
                <ul className="navbar-nav">
                  <li className="nav-item dropdown">
                    <Link
                      className="nav-link dropdown-toggle arrow-none"
                      onClick={e => {
                        e.preventDefault()
                        setdashboard(!dashboard)
                      }}
                      to="/sellerBoard"
                    >
                      <i className="bx bx-home-circle me-2"></i>
                      Dashboard {props.menuOpen}
                      <div className="arrow-down"></div>
                    </Link>
                    <div
                      className={classname("dropdown-menu", {
                        show: dashboard,
                      })}
                    >
                      <Link to="/sellerBoard" className="dropdown-item">
                        Dashboard
                      </Link>
                      <Link to="/addProduct" className="dropdown-item">
                        Add Product
                      </Link>
                    </div>
                  </li>
                </ul>
              </Collapse>
            </nav>
          </div>
        )}
      </div>
    </React.Fragment>
  )
}

Navbar.propTypes = {
  leftMenu: PropTypes.any,
  location: PropTypes.any,
  menuOpen: PropTypes.any,
}

const mapStatetoProps = state => {
  const { leftMenu } = state.Layout
  return { leftMenu }
}

export default withRouter(connect(mapStatetoProps, {})(Navbar))
