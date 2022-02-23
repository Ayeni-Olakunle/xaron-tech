import Business from "../../Images/laptop-swift.png";
import Delivery_app_PNG from "../../Images/mobile-swift.png";

export default function Layout6() {
  return (
    <div>
      <div className="reuse4s" style={{ marginBottom: "40px" }}>
        <div style={{ textAlign: "left" }}>
          <h4>Benefit to courier businesses:</h4>
          <ul style={{ padding: "10px 15px" }}>
            <li style={{ marginBottom: "20px" }}>
              Enterprise management solution that give you
              <br />
              visibility into riders activities
            </li>
            <li style={{ marginBottom: "20px" }}>
              Digital presense for riders.
            </li>
            <li style={{ marginBottom: "20px" }}>Increase revenue</li>
            <li style={{ marginBottom: "20px" }}>Finance management</li>
          </ul>
        </div>
        <div>
          <img src={Business} alt="Business" className="imageBe" />
        </div>
      </div>

      <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
        <div style={{ marginBottom: "80px", width: "83%", textAlign: "left" }}>
          <img
            src={Delivery_app_PNG}
            alt="Business"
            style={{ height: "400px", marginBottom: "30px" }}
            className="imageBe1"
          />
          <h4 style={{ fontWeight: 600 }}>User Application:</h4>
          <p>
            By downloading Xaron App, User will be able to place a pick up
            request, see cost estimate, track their parcel and make payment
            using the customer App.
          </p>
        </div>
      </div>

      <div className="reuse5s">
        <div className="beneUser">
          <div style={{ textAlign: "left", marginBottom: "50px" }}>
            <h4>Benefit to users:</h4>
            <ul style={{ padding: "10px 15px" }}>
              <li style={{ marginBottom: "20px" }}>Ease of engagement</li>
              <li style={{ marginBottom: "20px" }}>Real-Time tracking</li>
            </ul>
          </div>
          <div style={{ textAlign: "left", marginBottom: "50px" }}>
            <h4>Benefit to Vendors:</h4>
            <ul style={{ padding: "10px 15px" }}>
              <li style={{ marginBottom: "20px" }}>Ease of engagement</li>
              <li style={{ marginBottom: "20px" }}>Fast Delivery</li>
              <li style={{ marginBottom: "20px" }}>Real-Time Tracking</li>
              <li style={{ marginBottom: "20px" }}>
                Increase Customer Satifastion
              </li>
            </ul>
          </div>
        </div>
        <div>
          <img
            src={Delivery_app_PNG}
            alt="Business"
            style={{ height: "400px" }}
          />
        </div>
      </div>

      <div className="reuse4s">
        <div className="beneUser">
          <div style={{ marginBottom: "50px", textAlign: "left" }}>
            <h4 style={{ fontWeight: 600 }}>Rider's App:</h4>
            <p>
              Your riders can sell all orders routed to them along with details
              of delivery, <br /> riders will be able to accept multiple pick up
              request.
            </p>
          </div>
          <div style={{ marginBottom: "100px" }}>
            <div style={{ textAlign: "left" }}>
              <h4>Benefit of Riders:</h4>
              <ul style={{ padding: "10px 15px" }}>
                <li style={{ marginBottom: "20px" }}>Route optimisation</li>
                <li style={{ marginBottom: "20px" }}>
                  Organised delivery information
                </li>
                <li style={{ marginBottom: "20px" }}>
                  Multiple pickup (3) per trip
                </li>
              </ul>
            </div>
          </div>
        </div>
        <img
          src={Delivery_app_PNG}
          alt="Business"
          style={{ height: "400px" }}
          className="imageBe"
        />
      </div>
    </div>
  );
}
