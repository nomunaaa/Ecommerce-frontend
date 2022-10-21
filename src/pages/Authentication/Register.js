import React, { useEffect, useState } from "react"
import { Row, Col, CardBody, Card, Container, Input, Label } from "reactstrap"

import { Link } from "react-router-dom"

// import images
import profileImg from "../../assets/images/profile-img.png"
import logoImg from "../../assets/images/logo.svg"
import { authService } from "services/auth.service"

const Register = props => {
  //meta title
  document.title = "Register"

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [userStatus, setUserStatus] = useState("1")
  const [otp, setOTP] = useState("")
  const [isSucces, setIsSuccess] = useState(false)

  const register = async () => {
    let response = await authService.register(email, password, userStatus)
    if (response.status == 200) {
      setIsSuccess(true)
    }
  }
  const verify = async () => {
    let response = await authService.verify(email, otp)
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
                    <Col className="col-7">
                      <div className="text-primary p-4">
                        <h5 className="text-primary">Free Register</h5>
                        <p>Get your free Nomuna account now.</p>
                      </div>
                    </Col>
                    <Col className="col-5 align-self-end">
                      <img src={profileImg} alt="" className="img-fluid" />
                    </Col>
                  </Row>
                </div>
                <CardBody className="pt-0">
                  <div>
                    <Link to="/">
                      <div className="avatar-md profile-user-wid mb-4">
                        <span className="avatar-title rounded-circle bg-light">
                          <img
                            src={logoImg}
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
                        id="email"
                        name="email"
                        className="form-control"
                        placeholder="Enter email"
                        type="email"
                        onChange={e => setEmail(e.target.value)}
                      />
                    </div>

                    <div className="mb-3">
                      <Label className="form-label">User Type</Label>

                      <div className="col-md-12">
                        <select
                          className="form-control"
                          onChange={e => setUserStatus(e.target.value)}
                        >
                          <option value={1}>Buyer</option>
                          <option value={0}>Seller</option>
                        </select>
                      </div>
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
                    {isSucces && (
                      <div className="mb-3">
                        <Label className="form-label">Otp</Label>
                        <Input
                          type="text"
                          placeholder="Enter OTP"
                          onChange={e => setOTP(e.target.value)}
                        />
                      </div>
                    )}

                    {isSucces == false && (
                      <div className="mt-4">
                        <button
                          className="btn btn-primary btn-block "
                          type="submit"
                          onClick={() => register()}
                        >
                          Register
                        </button>
                      </div>
                    )}
                    {isSucces == true && (
                      <div className="mt-4">
                        <button
                          className="btn btn-primary btn-block "
                          type="submit"
                          onClick={() => verify()}
                        >
                          Verify
                        </button>
                      </div>
                    )}

                    <div className="mt-4 text-center">
                      <p className="mb-0">
                        By registering you agree to the Skote{" "}
                        <Link to="#" className="text-primary">
                          Terms of Use
                        </Link>
                      </p>
                    </div>
                  </div>
                </CardBody>
              </Card>
              <div className="mt-5 text-center">
                <p>
                  Already have an account ?{" "}
                  <Link to="/login" className="font-weight-medium text-primary">
                    {" "}
                    Login
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

export default Register
