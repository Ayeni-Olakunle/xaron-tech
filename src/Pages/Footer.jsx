import { BsFacebook, BsInstagram } from "react-icons/bs";
import { FaTwitter, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <div style={{ width: "100%" }}>
      <div className="holdFooter">
        <div style={{ borderBottom: "1px solid lightgray" }}>
          <ul className="UL">
            <li>
              <a href="#Home">Home</a>
            </li>
            <li>Term of use</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="XatronLimit">
          <div className="footX">
            <span className="fotText">2022, XARON TECHNOLOGY LIMITED</span>
          </div>
          <div>
            <div>
              <BsFacebook className="socialIcon" />
              <FaTwitter className="socialIcon" />
              <BsInstagram className="socialIcon" />
              <FaLinkedinIn className="socialIcon" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
