import React from "react";
import SignUpImage from "../SignUpImage";
import deliver from "../../Images/lady.jpg";
import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function Login(props) {
  return (
    <div className="holdSignPartner">
      <div className="imageWid">
        <SignUpImage DeliveryMan={deliver} />
      </div>
      <div className="cimppath">
        <div className="inputWid">
          <div className="formWidth">
            <div className="asAClient">
              <h5>Login</h5>
            </div>
            <Form>
              <Form.Group className="mb-3" controlId="emailAddress">
                <Form.Label className="inputText">Email Address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter your email address"
                  className="inputHeight"
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPasswordMini">
                <Form.Label className="inputText">Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Minimum 8 character"
                  className="inputHeight"
                />
              </Form.Group>

              <Form.Group
                className="mb-"
                controlId="formBasicCheckbox"
                style={{ fontSize: "12px", color: "gray" }}
              >
                <div>
                  <p
                    style={{
                      fontSize: "14px",
                      color: "#074e52",
                      fontWeight: 600,
                    }}
                  >
                    Forget password?
                  </p>
                </div>
              </Form.Group>
              <Link to={`/SignupPartnerTwo`}>
                <Button
                  variant="primary"
                  className="butMe btn btn-primary btn-block mb-3"
                  type="button"
                >
                  Login
                </Button>
              </Link>
              <p className="text-center alreadyAcc">
                Already have an account?
                <Link to={`/SignupPartner`}>
                  <span className="alreadyAcc2 signUpClint">Sign Up</span>
                </Link>
              </p>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
