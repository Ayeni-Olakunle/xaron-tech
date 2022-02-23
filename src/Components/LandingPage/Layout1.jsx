import { Link } from "react-router-dom";
import { useState } from "react";
import { GoThreeBars } from "react-icons/go";
import LogoHorLockup from "../../Images/LogoHorLockup.png";
export default function Layout1() {
  const [tog, setTog] = useState(false);
  const thug = () => {
    setTog(!tog);
  };
  return (
    <div>
      <div className="bigHeader" style={{ width: "100%" }}>
        <div className="headerNar">
          <div>
            <img src={LogoHorLockup} alt="Logo" style={{ height: "45px" }} />
          </div>
          <div style={{ width: "25%" }}>
            <ul className="subHeaderNar">
              <li className="menuList">
                <a href="#Home">Home</a>
              </li>
              <li className="menuList">
                <a href="#About">About</a>
              </li>
              <li className="menuList">
                <a href="#Contact">Contact</a>
              </li>
            </ul>
          </div>
          <div>
            <Link to={``}>
              <button className="signUp">Sign up</button>
            </Link>
          </div>
        </div>
      </div>

      <div className="smallHeader">
        <div className="reuse1 headPad">
          <div>
            <img src={LogoHorLockup} alt="Logo" className="logoSize" />
          </div>
          <div>
            <GoThreeBars
              onClick={thug}
              style={{ fontSize: "30px", cursor: "pointer" }}
            />
          </div>
          <div className={tog ? "Rmenu smallHeader2" : "Rmenu bigHeader"}>
            <div>
              <ul style={{ margin: 0, padding: 0, textAlign: "left" }}>
                <li className="menuListR">
                  <a href="#Home">Home</a>
                </li>
                <li className="menuListR">
                  <a href="#About">About</a>
                </li>
                <li className="menuListR">
                  <a href="#Contact">Contact</a>
                </li>
              </ul>
            </div>

            <div>
              <Link to={`/signuptype`}>
                <button className="signUp" style={{ width: "90%" }}>
                  Sign up
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
