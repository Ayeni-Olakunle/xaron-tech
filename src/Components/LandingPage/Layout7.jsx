import backImage from "../../Images/GroupCall.png";
import { VscPerson } from "react-icons/vsc";

export default function Layout7() {
  return (
    <div>
      <div>
        <div className="signUpImg">
          <img
            src={backImage}
            alt="Background"
            style={{ height: "450px", width: "100%" }}
          />
        </div>
        <div className="reuse4s" style={{ marginTop: "-70px" }}>
          <div className="smallBox reuse2">
            <VscPerson
              style={{
                fontSize: "50px",
                color: "#11a7b0",
                marginRight: "-20px",
              }}
            />
            <VscPerson
              style={{
                fontSize: "50px",
                color: "#11a7b0",
                marginRight: "-20px",
              }}
            />
            <div
              style={{ textAlign: "left", marginLeft: "30px", lineHeight: 1 }}
            >
              <h6 style={{ fontWeight: "bold" }}>Sign up as a Partner</h6>
              <span style={{ fontSize: "13px" }}>
                Have a logistics business? Get started with Xaron
              </span>
            </div>
          </div>
          <div className="smallBox reuse2">
            <VscPerson
              style={{
                fontSize: "50px",
                color: "#11a7b0",
                marginRight: "-20px",
              }}
            />
            <div
              style={{ textAlign: "left", marginLeft: "30px", lineHeight: 1 }}
            >
              <h6 style={{ fontWeight: "bold" }}>Sign up as a Customer</h6>
              <span style={{ fontSize: "13px" }}>
                Need logistics services? Get started with Xaron
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
