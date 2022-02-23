import businessMan from "../../Images/student.png";
import appleImage from "../../Images/appleImage.jpg";
import googleImage from "../../Images/googleImage.jpg";

export default function Layout3() {
  return (
    <div className="AboutLayout">
      <div className="L3Business">
        <img src={businessMan} alt="Business Man" className="businessMan" />
      </div>
      <div style={{ width: "45%" }}>
        <h6 className="technologyLimited">Xaron Technology Limited</h6>
        <p className="platform">
          A platform that will serve as an enabler for courier companies by
          putting you in control of your business through our enterprise
          management solution. With our mobile application, enduser and vendors
          can request for pick up and have a riders accept the request in less
          than 5 minutes with little or no human interaction.
        </p>
        <div className="appStore">
          <img
            src={appleImage}
            alt="Apple"
            style={{ height: "40px", borderRadius: "5px" }}
          />
          <img
            src={googleImage}
            alt="Google"
            style={{ height: "40px", borderRadius: "5px" }}
          />
        </div>
      </div>
    </div>
  );
}
