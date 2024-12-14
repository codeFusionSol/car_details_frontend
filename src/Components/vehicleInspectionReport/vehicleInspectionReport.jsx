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
          <div
            className="col-md-6 m-0 p-0"
            style={{
              maxHeight: "484px",
            }}
          >
            <img
              src="data:image/jpeg;base64,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"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
              alt=""
            />
          </div>
          <div
            className="col-md-6 d-flex flex-column justify-content-center align-items-center reportContainer"
            
          >
            <div className="overall-rating">
              <div className="single-chart">
                <svg
                  viewBox="0 0 36 36"
                  className="circular-chart overAllRating orange"
                >
                  <path
                    className="circle-bg"
                    d="M18 2.0845
        a 15.9155 15.9155 0 0 1 0 31.831
        a 15.9155 15.9155 0 0 1 0 -31.831"
                  />
                  <path
                    className="circle"
                    strokeDasharray="72, 100"
                    d="M18 2.0845
        a 15.9155 15.9155 0 0 1 0 31.831
        a 15.9155 15.9155 0 0 1 0 -31.831"
                  />
                  <text
                    x="18"
                    y="18"
                    className="overAllRating percentage"
                    dominantBaseline="middle"
                    id="overAllRatingPercentage"
                  >
                    72%
                  </text>
                  <text x="18" y="24" className="overAllRating percentage">
                    Overall Rating
                  </text>
                </svg>
              </div>
            </div>
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
