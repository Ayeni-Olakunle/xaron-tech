import SignType from "../Components/SignupType/SignType";
import PartnerShip from "../Components/SignupType/PartnerShip";
import Customer from "../Components/SignupType/Customer";
import { Container, Row, Col } from "react-bootstrap";
export default function SignUpT() {
  return (
    <div>
      <Container fluid>
        <Row className="reuse2" style={{ height: "100vh" }}>
          <Col sm={12} style={{ padding: 0, width: "90%" }}>
            <div>
              <SignType />
            </div>
          </Col>
          <Col sm={12} style={{ padding: 0, width: "90%" }}>
            <div className="holdSign">
              <div className="holdSignTwo">
                <PartnerShip />
                <Customer />
              </div>
            </div>
            <p style={{ color: "#9f9f9f" }}>
              Have an account? <span className="log">Login</span>
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
