import Layout1 from "../Components/LandingPage/Layout1";
import Layout2 from "../Components/LandingPage/Layout2";
import Layout3 from "../Components/LandingPage/Layout3";
import Layout4 from "../Components/LandingPage/Layout4";
import Layout5 from "../Components/LandingPage/Layout5";
import Layout6 from "../Components/LandingPage/Layout6";
import Layout7 from "../Components/LandingPage/Layout7";
import Layout8 from "../Components/LandingPage/Layout8";
import Footer from "./Footer";
import { GiBoxUnpacking } from "react-icons/gi";
import { BsPhoneVibrate, BsCurrencyExchange } from "react-icons/bs";
import { GoThumbsup } from "react-icons/go";
import { Container, Row, Col } from "react-bootstrap";

export default function LandingPage() {
  return (
    <div>
      <Container fluid>
        <Row className="reuse2" id="Home">
          <Col sm={12} className="viewPort">
            <Layout1 />
            <Layout2 />
          </Col>
        </Row>

        <Row>
          <Col sm={12} className="backWidth" id="About">
            <Layout3 />
            <div className="why">
              <h6 className="whyHeader">Why Xaron?</h6>
              <div className="reason me1">
                <Layout4
                  iconName={<GiBoxUnpacking className="whyIcon" />}
                  title="Send & Receive Items"
                  desc="Send and receive item anytime and anywhere with few clicks."
                />
                <Layout4
                  iconName={<BsPhoneVibrate className="whyIcon" />}
                  title="Ease of engagement"
                  desc="Request a pick up using our app, then wait for one of our riders to accept it."
                />
                <Layout4
                  iconName={<BsCurrencyExchange className="whyIcon" />}
                  title="Increased profitability"
                  desc="Partner with us and make your business more visible and increase your profit."
                />
                <Layout4
                  iconName={<GoThumbsup className="whyIcon" />}
                  title="Be in control"
                  desc="With the introduction of admin panel, bike owners can track their rides and profit."
                />
              </div>
            </div>

            <Layout5 />
          </Col>
          <Col sm={12} className="rowWidth">
            <Layout6 />
          </Col>
          <Col sm={12} className="rowWidth">
            <Layout7 />
          </Col>
          <Col className="reuse2 formPad" sm={12} id="Contact">
            <Layout8 />
          </Col>
          <Col
            className="reuse2"
            sm={12}
            style={{
              width: "100%",
              padding: "25px 0",
              backgroundColor: "#ededed",
            }}
          >
            <Footer />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
