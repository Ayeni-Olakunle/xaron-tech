import Business from "../../Images/laptop-swift.png";
export default function Layout5() {
  return (
    <div>
      <div className="ourGoals1">
        <div className="ourGoal">
          <h4
            style={{
              fontWeight: "bold",
              marginBottom: "30px",
              textAlign: "center",
            }}
          >
            Our Goal
          </h4>
          <div>
            <p>
              Our goal as innovators is to help solve the challenges affecting
              day-to-day running of delivery business in Africa, by introducing
              a platform that will serve as an enable in the logistic space
              across Africa where riders and customers can interact with few
              click, bike owner monitor and track their ride's activities on a
              single platform.
            </p>
          </div>
        </div>
      </div>

      <div className="ourGoals2">
        <div className="ourGoal">
          <h4
            style={{
              fontWeight: "bold",
              marginBottom: "30px",
              textAlign: "center",
            }}
          >
            Our Solution
          </h4>
          <div>
            <img src={Business} alt="Business" className="imageBe1" />
            <h4 style={{ fontWeight: 600 }}>Enterprise Solution:</h4>
            <p>
              Using the web platform, Company or bike owners can create an
              account with Xaron as a partner, add riders, assign delivery
              request to their riders, track deliveries and also see a dashboard
              showing the total revenue, total riders and trip count over a
              given period. Business can also sign up/log in on the web platform
              to place a pick up request.
            </p>
          </div>

          {/* <div style={{ marginBottom: "80px" }}>
            <h4 style={{ fontWeight: 600 }}>Rider's App:</h4>
            <p>
              Your riders can sell all orders routed to them along with details
              of delivery, <br /> riders will be able to accept multiple pick up
              request.
            </p>
          </div> */}
        </div>
      </div>
    </div>
  );
}
