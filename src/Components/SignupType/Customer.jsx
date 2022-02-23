import { FaUserTie } from "react-icons/fa";
import { Link } from "react-router-dom";
export default function Customer() {
  return (
    <Link
      to={`/SignupCustomer`}
      style={{ margin: "0px", fontWeight: "bold", color: "black" }}
    >
      <div className="partner">
        <div>
          <FaUserTie style={{ fontSize: "60px", color: "#40b8bf" }} />
        </div>
        <div>
          <h5 style={{ margin: "10px 0", fontWeight: "bold" }}>
            Sign up as a Customer
          </h5>
          <div style={{ margin: "0px", fontSize: "15px", color: "gray" }}>
            <p style={{ margin: "0px", fontWeight: "normal" }}>
              Need logistics services?
            </p>
            <p style={{ margin: "0px", fontWeight: "normal" }}>
              Get started with Swifts
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
}
