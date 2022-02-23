import React from "react";
// import DeliveryMan from "../Images/deliveryMan.jpg";
function SignUpImage(props) {
  return (
    <div>
      <div className="HoldDeliverMan">
        <div className="logoImage">Company Logo</div>
        <div>
          <img
            src={props.DeliveryMan}
            alt="Delivery Man"
            className="deliverMan"
          />
        </div>
      </div>
    </div>
  );
}

export default SignUpImage;
