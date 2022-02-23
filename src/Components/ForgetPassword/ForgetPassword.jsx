import React from "react";
import SignUpImage from "../SignUpImage";
import deliver from "../../Images/lady.jpg";
import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function ForgetPassword() {
  return (
    <div className="holdSignPartner">
      <div className="imageWid">
        <SignUpImage DeliveryMan={deliver} />
      </div>
      <div className="cimppath">
        <div className="inputWid">
          <div className="formWidth">
            <div style={{ margin: 0 }}>
              <h3>Forget Password?</h3>
              <span style={{ fontSize: "13px", color: "gray" }}>
                No worries, we'll send you reset instructions
              </span>
            </div>
            <Form>
              <Form.Group className="mt-3" controlId="emailAddress">
                <Form.Label className="inputText">Email Address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter your email address"
                  className="inputHeight"
                />
              </Form.Group>

              <Form.Group
                className="mb-4"
                controlId="formBasicCheckbox"
                style={{ fontSize: "12px", color: "gray" }}
              ></Form.Group>
              <Link to={``}>
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

export default ForgetPassword;
