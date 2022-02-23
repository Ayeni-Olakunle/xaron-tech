import React from "react";
import { FaGreaterThan } from "react-icons/fa";
import SignUpImage from "../SignUpImage";
import deliver from "../../Images/lady.jpg";
import { Form, Button, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
const SignupCustomer = () => {
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
              <Row className="mb-3">
                <Form.Group as={Col} controlId="FirstName">
                  <Form.Label className="inputText">First Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter your first name"
                    className="inputHeight"
                  />
                </Form.Group>

                <Form.Group as={Col} controlId="LastName">
                  <Form.Label className="inputText">Last Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter your last name"
                    className="inputHeight"
                  />
                </Form.Group>
              </Row>

              <Form.Group className="mb-3" controlId="emailAddress">
                <Form.Label className="inputText">Email Address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter your email address"
                  className="inputHeight"
                />
              </Form.Group>

              <Row className="mb-3">
                <Form.Group as={Col} controlId="FirstName">
                  <Form.Label className="inputText">Country</Form.Label>
                  <Form.Select
                    aria-label="Default select example"
                    className="inputHeight"
                  >
                    <option>Select Country</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </Form.Select>
                </Form.Group>

                <Form.Group as={Col} controlId="LastName">
                  <Form.Label className="inputText">Phone Number</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="+234"
                    className="inputHeight"
                  />
                </Form.Group>
              </Row>

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
                  Sumbit
                </Button>
              </Link>
              <p className="text-center alreadyAcc">
                Already have an account?{" "}
                <Link to={`/Login`}>
                  <span className="alreadyAcc2 signUpClint">Login</span>
                </Link>
              </p>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupCustomer;
