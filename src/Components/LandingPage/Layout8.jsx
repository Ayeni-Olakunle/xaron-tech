import businessMan from "../../Images/swift-contact.png";
import { Form, Row, Col, Button } from "react-bootstrap";
import { useState } from "react";

export default function Layout8() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };
  return (
    <div className="reuse2 contentUs">
      <div>
        <img
          src={businessMan}
          alt="Business Man"
          className="businessMan"
          style={{ height: "450px" }}
        />
      </div>
      <div>
        <Form
          noValidate
          validated={validated}
          onSubmit={handleSubmit}
          style={{ textAlign: "left" }}
        >
          <div style={{ marginBottom: "20px" }}>
            <h2>Contact</h2>
            <span style={{ color: "gray" }}>
              Have any questions? Need any help? Let us know below
            </span>
          </div>

          <Row className="mb-3">
            <Form.Group as={Col} md="6" controlId="validationCustom01">
              <Form.Label>First name</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Enter your first name"
              />

              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="6" controlId="validationCustom02">
              <Form.Label>Last name</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Enter your last name"
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Row className="mb-3" style={{ marginBottom: "10px !important" }}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Message</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
          </Row>
          <Button
            type="submit"
            style={{
              width: "100%",
              backgroundColor: "#11a7b0",
              borderColor: "#11a7b0",
            }}
          >
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
}
