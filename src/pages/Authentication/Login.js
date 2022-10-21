import PropTypes from "prop-types"
import React, { useState } from "react"
import { Link, withRouter } from "react-router-dom"
import { Row, Col, CardBody, Card, Container, Input, Label } from "reactstrap"

// import images
import profile from "assets/images/profile-img.png"
import logo from "assets/images/logo.svg"
import { authService } from "services/auth.service"

const Login = props => {
  document.title = "Nomuna Ecommerce"
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const signIn = () => {
    let response = authService.login(email, password)
  }

  return (
    <React.Fragment>
      <div className="home-btn d-none d-sm-block">
        <Link to="/" className="text-dark">
          <i className="fas fa-home h2" />
        </Link>
      </div>
      <div className="account-pages my-5 pt-sm-5">
        <Container>
          <Row className="justify-content-center">
            <Col md={8} lg={6} xl={5}>
              <Card className="overflow-hidden">
                <div className="bg-primary bg-soft">
                  <Row>
                    <Col xs={7}>
                      <div className="text-primary p-4">
                        <h5 className="text-primary">Welcome Back !</h5>
                        <p>Sign in to continue to Skote.</p>
                      </div>
                    </Col>
                    <Col className="col-5 align-self-end">
                      <img src={profile} alt="" className="img-fluid" />
                    </Col>
                  </Row>
                </div>
                <CardBody className="pt-0">
                  <div>
                    <Link to="/" className="auth-logo-light">
                      <div className="avatar-md profile-user-wid mb-4">
                        <span className="avatar-title rounded-circle bg-light">
                          <img
                            src={logo}
                            alt=""
                            className="rounded-circle"
                            height="34"
                          />
                        </span>
                      </div>
                    </Link>
                  </div>
                  <div className="p-2">
                    <div className="mb-3">
                      <Label className="form-label">Email</Label>
                      <Input
                        name="email"
                        className="form-control"
                        placeholder="Enter email"
                        type="email"
                        onChange={e => setEmail(e.target.value)}
                      />
                    </div>

                    <div className="mb-3">
                      <Label className="form-label">Password</Label>
                      <Input
                        name="password"
                        type="password"
                        placeholder="Enter Password"
                        onChange={e => setPassword(e.target.value)}
                      />
                    </div>

                    <div className="mt-3 d-grid">
                      <button
                        className="btn btn-primary btn-block"
                        onClick={() => signIn()}
                      >
                        Log In
                      </button>
                    </div>
                  </div>
                </CardBody>
              </Card>
              <div className="mt-5 text-center">
                <p>
                  Don&#39;t have an account ?{" "}
                  <Link to="/register" className="fw-medium text-primary">
                    {" "}
                    Signup now{" "}
                  </Link>{" "}
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  )
}

export default withRouter(Login)

Login.propTypes = {
  history: PropTypes.object,
}
