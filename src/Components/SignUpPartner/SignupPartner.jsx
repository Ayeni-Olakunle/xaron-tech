import React from "react";
import { FaGreaterThan } from "react-icons/fa";
import SignUpImage from "../SignUpImage";
import deliver from "../../Images/deliveryMan.jpg";
import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
const SignupPartner = () => {
  return (
    <div className="holdSignPartner">
      <div className="imageWid">
        <SignUpImage DeliveryMan={deliver} />
      </div>
      <div className="cimppath">
        <div className="inputWid">
          <div className="formWidth">
            <div className="asAClient">
              <h5>Sign up</h5>
              <span className="signUpClint">
                <span>Sign up as a client</span>
                <FaGreaterThan className="greaterThan" />
                <FaGreaterThan className="greaterThan" />
              </span>
            </div>
            <Form>
              <Form.Group className="mb-2" controlId="BusinessName">
                <Form.Label className="inputText">Business Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Business Name"
                  className="inputHeight"
                />
              </Form.Group>

              <Form.Group className="mb-2" controlId="emailAddress">
                <Form.Label className="inputText">Email Address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter your email address"
                  className="inputHeight"
                />
              </Form.Group>

              <Form.Group className="mb-2" controlId="PhoneNumber">
                <Form.Label className="inputText">Phone Number</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Phone Number"
                  className="inputHeight"
                />
              </Form.Group>

              <Form.Group className="mb-2" controlId="formBasicPassword">
                <Form.Label className="inputText">Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  className="inputHeight"
                />
              </Form.Group>

              <Form.Group className="mb-2" controlId="formBasicPasswordMini">
                <Form.Label className="inputText">Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Minimum 8 character"
                  className="inputHeight"
                />
              </Form.Group>

              <Form.Group
                className="mb-1"
                controlId="formBasicCheckbox"
                style={{ fontSize: "12px", color: "gray" }}
              >
                <Form.Check
                  type="checkbox"
                  label="I agress to all Term and Privacy Policy"
                />
              </Form.Group>
              <Link to={`/SignupPartnerTwo`}>
                <Button
                  variant="primary"
                  className="butMe btn btn-primary btn-block mb-3"
                  type="button"
                >
                  Next
                </Button>
              </Link>
              <p className="text-center alreadyAcc">
                Already have an account?{" "}
                <span className="alreadyAcc2 signUpClint">Login</span>
              </p>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupPartner;
