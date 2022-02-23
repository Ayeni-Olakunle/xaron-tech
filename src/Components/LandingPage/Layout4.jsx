export default function Layout3(props) {
  return (
    <div>
      <div className="ReWhy">
        <span>{props.iconName}</span>
        <div className="sendNre">
          <h5
            style={{ fontSize: "16px", marginBottom: "4px", marginTop: "15px" }}
          >
            <strong>{props.title}</strong>
          </h5>
          <span style={{ fontSize: "13px" }}>{props.desc}</span>
        </div>
      </div>
    </div>
  );
}
