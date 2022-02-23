// import logo from './logo.svg';
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "./CSS/LandingPageCSS/LandPage.css";
import "./CSS/LandingPageCSS/LandingResponsive.css";
import "../src/CSS/signUp.css";
import "./CSS/Footer.css";
import LandingPage from "./Pages/LandingPage";
import SignUpT from "./Pages/SignupT";
import SignupPartner from "./Components/SignUpPartner/SignupPartner";
import SignupPartner2 from "./Components/SignUpPartner/SignupPartner2";
import SignupCustomer from "./Components/SignUpCustomer/SignupCustomer";
import Login from "./Components/Login/Login";
import ForgetPassword from "./Components/ForgetPassword/ForgetPassword";
import ResetPassword from "./Components/ForgetPassword/ResetPassword";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signuptype" element={<SignUpT />} />
        <Route path="/SignupPartner" element={<SignupPartner />} />
        <Route path="/SignupPartnerTwo" element={<SignupPartner2 />} />
        <Route path="/SignupCustomer" element={<SignupCustomer />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/ForgetPassword" element={<ForgetPassword />} />
        <Route path="/ResetPassword" element={<ResetPassword />} />
      </Routes>
    </div>
  );
}

export default App;
