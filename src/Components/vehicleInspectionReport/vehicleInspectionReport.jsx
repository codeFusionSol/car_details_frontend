import "./vehicleInspectionReport.css";

const vehicleInspectionReport = () => {
  const data = [
    { label: "AC / Heater", value: "100" },
    { label: "Engine / Transmission / Clutch", value: "93" },
    { label: "Exterior", value: "67" },
    { label: "Skeleton", value: "50" },
    { label: "Accident Checklist", value: "70" },
    { label: "Brakes", value: "80" },
    { label: "Suspension/Steering", value: "100" },
    { label: "Interior", value: "40" },
    { label: "Electrical & Electronics", value: "55" },
  ];

  return (
    <>
      <div className="container-fluid m-0 p-0">
        <div className="row m-0 p-0">
          <div className="col-md-6 m-0 p-0">
            <img
              src="https://famewheels.s3.eu-north-1.amazonaws.com/public/inspection/f820cf6350d8/iex_front_view_image/17177657761432972708.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIASFIXCQJZV5G6CLOV%2F20241211%2Feu-north-1%2Fs3%2Faws4_request&X-Amz-Date=20241211T110354Z&X-Amz-Expires=3600&X-Amz-Signature=2b9ced147ba9db8e2527f9441b3cd7207a26cc2251766605fcb48abf97c39a53&X-Amz-SignedHeaders=host"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
              alt=""
            />
          </div>
          <div className="col-md-6 d-flex justify-content-center align-items-center ">
            <div class="flex-wrapper">
              {data.map((item, index) => (
                <div class="single-chart">
                  <svg viewBox="0 0 36 36" class="circular-chart orange">
                    <path
                      class="circle-bg"
                      d="M18 2.0845
              a 15.9155 15.9155 0 0 1 0 31.831
              a 15.9155 15.9155 0 0 1 0 -31.831"
                    />
                    <path
                      class="circle"
                      stroke-dasharray={`${item.value}, 100`}
                      d="M18 2.0845
              a 15.9155 15.9155 0 0 1 0 31.831
              a 15.9155 15.9155 0 0 1 0 -31.831"
                    />
                    <text x="18" y="20.35" class="percentage">
                      {item.value}%
                    </text>
                  </svg>
                  <span style={{ fontSize: "12px", textAlign: "center" }}>
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default vehicleInspectionReport;
