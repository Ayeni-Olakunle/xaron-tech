import { FaUsers } from "react-icons/fa";
import { Link } from "react-router-dom";
export default function PartnerShip() {
  return (
    <Link to={`/SignupPartner`} className="Linkme">
      <div className="partner">
        <div>
          <FaUsers className="fauserPlus" />
        </div>
        <div>
          <h5 style={{ margin: "10px 0", fontWeight: "bold" }}>
            Sign up as a Partner
          </h5>
          <div style={{ margin: "0px", fontSize: "15px", color: "gray" }}>
            <p style={{ margin: 0 }}>Have a logistics business?</p>
            <p style={{ margin: 0 }}>Get started with Swifts</p>
          </div>
        </div>
      </div>
    </Link>
  );
}
