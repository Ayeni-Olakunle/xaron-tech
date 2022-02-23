import React from "react";
import { FaGreaterThan } from "react-icons/fa";
import SignUpImage from "../SignUpImage";
import deliver from "../../Images/deliveryMan.jpg";
import { Form, Button, FloatingLabel } from "react-bootstrap";
import { Link } from "react-router-dom";

function SignupPartner2() {
  return (
    <div>
      <div className="holdSignPartner">
        <div className="imageWid">
          <SignUpImage DeliveryMan={deliver} />
        </div>
        <div className="cimppath">
          <div className="inputWid">
            <div className="formWidth">
              <div className="asAClient2">
                {/* <h5>Sign up</h5> */}
                <span className="signUpClint">
                  <span>Sign up as a client</span>
                  <FaGreaterThan className="greaterThan" />
                  <FaGreaterThan className="greaterThan" />
                </span>
              </div>
              <div className="mb-4">
                <h4>Welcome, John Logistics</h4>
                <span
                  style={{
                    color: "gray",
                    fontSize: "13px",
                  }}
                >
                  Tell us a bit more about you company
                </span>
              </div>
              <Form>
                <Form.Group className="mb-3" controlId="BusinessCountry">
                  <Form.Label className="inputText">Country</Form.Label>
                  <Form.Select aria-label="Default select example">
                    <option>Country</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </Form.Select>
                </Form.Group>

                <Form.Group className="mb-3" controlId="BusinessState">
                  <Form.Label className="inputText">State</Form.Label>
                  <Form.Select aria-label="Default select example">
                    <option>State</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </Form.Select>
                </Form.Group>

                <Form.Group className="mb-3" controlId="BusinessState">
                  <Form.Label className="inputText">
                    Business Address
                  </Form.Label>
                  <FloatingLabel controlId="floatingTextarea" className="mb-3">
                    <Form.Control
                      as="textarea"
                      placeholder="Leave a comment here"
                    />
                  </FloatingLabel>
                </Form.Group>
                <Button
                  variant="primary"
                  className="butMe btn btn-primary btn-block mb-3"
                  type="button"
                >
                  Submit
                </Button>
              </Form>
              <Link to={`/SignupPartner`}>
                <span>Previous</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignupPartner2;
