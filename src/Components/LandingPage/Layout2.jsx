import React, { useState } from "react";
import LandImage from "../../Images/mobile-swift.png";
import XaronTwitter from "../../Images/XaronTwitter.png";
import { Form, Button, Modal, Col, Row } from "react-bootstrap";
export default function Layout2() {
  const [lgShow, setLgShow] = useState(false);
  return (
    <div className="logistic">
      <div className="marBin">
        <h1 className="trustText">
          Have your package
          <br />
          picked up in 5 minutes
        </h1>
        <p style={{ textAlign: "left", margin: "20px 0" }}>
          Experience seamless pick-up and deliveries with Xaron, track
          <br />
          your orders with real-time monitoring and avoid delivery problems
        </p>
        <div style={{ textAlign: "left" }}>
          <button className="login" onClick={() => setLgShow(true)}>
            Join the waitlist
          </button>
        </div>
      </div>
      <div className="ReImage">
        <img src={LandImage} alt="Wrong src" className="koIma" />
      </div>

      <>
        {/* <Button onClick={() => setSmShow(true)}>Small modal</Button>{" "} */}
        {/* <Button onClick={() => setLgShow(true)}>Large modal</Button> */}
        <Modal
          size="lg"
          show={lgShow}
          onHide={() => setLgShow(false)}
          aria-labelledby="example-modal-sizes-title-lg"
        >
          <div>
            <img src={XaronTwitter} alt="Header" className="formImag" />
          </div>
          <Modal.Header closeButton>
            <Modal.Title id="example-modal-sizes-title-lg">
              <div style={{ fontSize: "14px", color: "gray" }}>
                Xaron Technology Limited is solving the problem facing Courier
                delivery and E-commerce sector in Nigeria.
              </div>
              <div
                className="mt-3"
                style={{ fontSize: "14px", color: "#4b4b4b" }}
              >
                Motor: Go faster with Xaron...📦🏍
              </div>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body
            style={{
              display: "flex",
              justifyContent: "center",
              backgroundColor: "rgba(17, 167, 176, 0.25)",
            }}
          >
            <Form className="riderForm">
              <Form.Group className="mt-3 formModat" controlId="FirstName">
                <Form.Label>First Name</Form.Label>
                <Form.Control type="text" placeholder="Enter your First Name" />
              </Form.Group>

              <Form.Group className="mt-3 formModat" controlId="LastName">
                <Form.Label>Last Name</Form.Label>
                <Form.Control type="text" placeholder="Enter your Last Name" />
              </Form.Group>

              <Form.Group className="mt-3 formModat" controlId="emailAddress">
                <Form.Label>Email Address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter your email address"
                />
              </Form.Group>

              <Form.Group
                className="mt-3 formModat"
                controlId="StateofResidence "
              >
                <Form.Label>State of Residence </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your State of Residence "
                />
              </Form.Group>

              <Form.Group
                className="mt-3 formModat"
                controlId="StateofResidence "
              >
                <Form.Label>I want to sign up as</Form.Label>
                <Form.Check
                  type="radio"
                  label="EndUser Application (E-commerce or Individual)"
                  name="formHorizontalRadios"
                  id="formHorizontalRadios3"
                />

                <Form.Check
                  type="radio"
                  label="Enterprise Application (Logistic business owner)"
                  name="formHorizontalRadios"
                  id="formHorizontalRadios3"
                />
              </Form.Group>

              <Form.Group
                className="mt-3 formModat"
                controlId="StateofResidence "
              >
                <Form.Label>What I seek</Form.Label>
                <Form.Group
                  as={Row}
                  className="mb-2"
                  controlId="formHorizontalCheck1"
                >
                  <Col>
                    <Form.Check label="Optimise my delivery" />
                  </Col>
                </Form.Group>
                <Form.Group
                  as={Row}
                  className="mb-2"
                  controlId="formHorizontalCheck2"
                >
                  <Col>
                    <Form.Check label="Optimise my profit" />
                  </Col>
                </Form.Group>
                <Form.Group
                  as={Row}
                  className="mb-3"
                  controlId="formHorizontalCheck3"
                >
                  <Col style={{ display: "flex" }}>
                    <Form.Check label="Other:" />
                    <Form.Control className="modalInput der" type="text" />
                  </Col>
                </Form.Group>
              </Form.Group>
              <Button className="mt-3 formSubmit2">Submit</Button>
            </Form>
          </Modal.Body>
        </Modal>
      </>
    </div>
  );
}
