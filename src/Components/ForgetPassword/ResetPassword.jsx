import React from "react";
import SignUpImage from "../SignUpImage";
import deliver from "../../Images/lady.jpg";
import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function ResetPassword(props) {
  return (
    <div className="holdSignPartner">
      <div className="imageWid">
        <SignUpImage DeliveryMan={deliver} />
      </div>
      <div className="cimppath">
        <div className="inputWid">
          <div className="formWidth">
            <div style={{ margin: 0 }}>
              <h3 style={{ margin: 0 }}>Reset Password?</h3>
              <span style={{ fontSize: "13px", color: "gray" }}>
                Please choose your new password.
              </span>
            </div>

            <Form>
              <Form.Group className="mb-3 mt-3" controlId="emailAddress">
                <Form.Label className="inputText">New Password</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your email address"
                  className="inputHeight"
                />
              </Form.Group>

              <Form.Group className="mb-4" controlId="formBasicPasswordMini">
                <Form.Label className="inputText">Confirm Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Minimum 8 character"
                  className="inputHeight"
                />
              </Form.Group>

              <Link to={`/SignupPartnerTwo`}>
                <Button
                  variant="primary"
                  className="butMe btn btn-primary btn-block mb-3"
                  type="button"
                >
                  Reset Password
                </Button>
              </Link>
              <p className="text-center alreadyAcc">
                Back to
                <Link to={``}>
                  <span className="alreadyAcc2 signUpClint">Login</span>
                </Link>
              </p>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResetPassword;
