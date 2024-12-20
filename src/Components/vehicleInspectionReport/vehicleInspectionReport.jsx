import { useEffect } from "react";
import "./vehicleInspectionReport.css";
import { useState } from "react";

const vehicleInspectionReport = ({ AllFormsData, data }) => {
  const [bodyFramePercentage, setBodyFramePercentage] = useState(0);
  const [
    engineTransmissionClutchPercentage,
    setEngineTransmissionClutchPercentage,
  ] = useState(0);
  const [brakesPercentage, setBrakesPercentage] = useState(0);
  const [suspensionSteeringPercentage, setSuspensionSteeringPercentage] =
    useState(0);
  const [interiorPercentage, setInteriorPercentage] = useState(0);
  const [acHeaterPercentage, setACHeaterPercentage] = useState(0);
  const [electricalElectronicsPercentage, setElectricalElectronicsPercentage] =
    useState(0);
  const [exteriorPercentage, setExteriorPercentage] = useState(0);
  const [tyresPercentage, setTyresPercentage] = useState(0);

  const [overallPercentage, setOverallPercentage] = useState(0);

  const image = data?.carId?.image?.url;

  const percentageBodyFram = async () => {
    const bodyFrame = await AllFormsData[0]?.data?.imageValueChecks;
    let obtainedCount = 0;
    let totalCount = 1600;

    bodyFrame.map((item) => {
      obtainedCount += item?.data?.percentage;
    });
    let percentage = (obtainedCount / totalCount) * 100;
    percentage = Math.round(percentage);
    setBodyFramePercentage(percentage);

    return percentage;
  };

  const percentageEngineTransmissionClutch = async () => {
    let obtainedCount = 0;
    let totalCount = 1500;
    const engineTransmissionClutch = await AllFormsData[1]?.data;

    Object.keys(engineTransmissionClutch).forEach((section) => {
      if (engineTransmissionClutch[section]?.imageValueChecks) {
        engineTransmissionClutch[section].imageValueChecks.forEach((item) => {
          obtainedCount += item?.data?.percentage || 0;
        });
      }
    });

    let percentage = (obtainedCount / totalCount) * 100;
    percentage = Math.round(percentage);
    setEngineTransmissionClutchPercentage(percentage);
    return percentage;
  };

  const percentageBrakes = async () => {
    let obtainedCount = 0;
    let totalCount = 500;
    const brakes = await AllFormsData[2]?.data?.mechanicalCheck
      ?.imageValueChecks;

    brakes.map((item) => {
      obtainedCount += item?.data?.percentage;
    });
    let percentage = (obtainedCount / totalCount) * 100;
    percentage = Math.round(percentage);
    setBrakesPercentage(percentage);
    return percentage;
  };

  const percentageSuspensionSteering = async () => {
    let obtainedCount = 0;
    let totalCount = 1700;

    const suspensionSteering = await AllFormsData[3]?.data;

    Object.keys(suspensionSteering).forEach((section) => {
      if (suspensionSteering[section]?.imageValueChecks) {
        suspensionSteering[section].imageValueChecks.forEach((item) => {
          obtainedCount += item?.data?.percentage || 0;
        });
      }
    });

    let percentage = (obtainedCount / totalCount) * 100;
    percentage = Math.round(percentage);
    setSuspensionSteeringPercentage(percentage);
    return percentage;
  };

  const percentageInterior = async () => {
    let obtainedCount = 0;
    let totalCount = 3800;
    const interior = await AllFormsData[4]?.data;

    Object.keys(interior).forEach((section) => {
      if (interior[section]?.imageValueChecks) {
        interior[section].imageValueChecks.forEach((item) => {
          obtainedCount += item?.data?.percentage || 0;
        });
      }
    });

    let percentage = (obtainedCount / totalCount) * 100;
    percentage = Math.round(percentage);
    setInteriorPercentage(percentage);
    return percentage;
  };

  const percentageACHeater = async () => {
    let obtainedCount = 0;
    let totalCount = 500;
    const acHeater = await AllFormsData[5]?.data?.acHeaterCheckUp
      ?.imageValueChecks;
    acHeater.map((item) => {
      obtainedCount += item?.data?.percentage;
    });
    let percentage = (obtainedCount / totalCount) * 100;
    percentage = Math.round(percentage);
    setACHeaterPercentage(percentage);
    return percentage;
  };

  const percentageElectricalElectronics = async () => {
    let obtainedCount = 0;
    let totalCount = 1400;
    const electricalElectronics = await AllFormsData[6]?.data;

    Object.keys(electricalElectronics).forEach((section) => {
      if (electricalElectronics[section]?.imageValueChecks) {
        electricalElectronics[section].imageValueChecks.forEach((item) => {
          obtainedCount += item?.data?.percentage || 0;
        });
      }
    });

    let percentage = (obtainedCount / totalCount) * 100;
    percentage = Math.round(percentage);
    setElectricalElectronicsPercentage(percentage);
    return percentage;
  };

  const percentageExterior = async () => {
    let obtainedCount = 0;
    let totalCount = 1600;
    const exterior = await AllFormsData[7]?.data;

    Object.keys(exterior).forEach((section) => {
      if (exterior[section]?.imageValueChecks) {
        exterior[section].imageValueChecks.forEach((item) => {
          obtainedCount += item?.data?.percentage || 0;
        });
      }
    });

    let percentage = (obtainedCount / totalCount) * 100;
    percentage = Math.round(percentage);
    setExteriorPercentage(percentage);
    return percentage;
  };

  const calculateOverallPercentage = () => {
    let obtainedCount =
      bodyFramePercentage +
      engineTransmissionClutchPercentage +
      brakesPercentage +
      suspensionSteeringPercentage +
      interiorPercentage +
      acHeaterPercentage +
      electricalElectronicsPercentage +
      exteriorPercentage;
    let totalCount = 800;

    let percentage = (obtainedCount / totalCount) * 100;
    percentage = Math.round(percentage);
    setOverallPercentage(percentage);
  };

  useEffect(() => {
    const calculatePercentages = async () => {
      if (AllFormsData?.length > 0) {
        await percentageBodyFram();
        await percentageEngineTransmissionClutch();
        await percentageBrakes();
        await percentageSuspensionSteering();
        await percentageInterior();
        await percentageACHeater();
        await percentageElectricalElectronics();
        await percentageExterior();
      }
    };
    calculatePercentages();
  }, [AllFormsData]);

  useEffect(() => {
    calculateOverallPercentage();
  }, [
    bodyFramePercentage,
    engineTransmissionClutchPercentage,
    brakesPercentage,
    suspensionSteeringPercentage,
    interiorPercentage,
    acHeaterPercentage,
    electricalElectronicsPercentage,
    exteriorPercentage,
  ]);

  const dummyData = [
    { label: "Body Frame Check List", value: bodyFramePercentage },
    { label: "Interior", value: interiorPercentage },
    {
      label: "Electrical & Electronics",
      value: electricalElectronicsPercentage,
    },
    { label: "Suspension / Steering", value: suspensionSteeringPercentage },
    { label: "AC / Heater", value: acHeaterPercentage },
    {
      label: "Engine / Clutch / Transmission",
      value: engineTransmissionClutchPercentage,
    },
    { label: "Exterior", value: exteriorPercentage },
    { label: "Brakes", value: brakesPercentage },
  ];

  return (
    <>
      <div className="container-fluid m-0 p-0">
        <div className="row m-0 p-0">
          <div
            className="col-md-6 m-0 p-0 d-md-flex d-none"
            style={{
              maxHeight: "484px",
            }}
          >
            <img
              src={image}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
              alt=""
            />
          </div>
          <div className="col-md-6 d-flex flex-column justify-content-center align-items-center reportContainer px-0">
            <div className="overall-rating">
              <svg
                viewBox="0 0 36 36"
                className={`circular-chart overAllRating my-0 ${
                  overallPercentage >= 80
                    ? "green"
                    : overallPercentage >= 50
                    ? "orange"
                    : "red"
                }`}
              >
                <defs>
        <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#ffb88c"/>
          <stop offset="100%" stopColor="#ff8c42"/>
        </linearGradient>
        <filter id="shadow">
          <feDropShadow dx="0.5" dy="0.5" stdDeviation="0.5" floodColor="#000" floodOpacity="0.3"/>
        </filter>
        <filter id="innerShadow">
          <feOffset dx="0" dy="1"/>
          <feGaussianBlur stdDeviation="1"/>
          <feComposite operator="out" in="SourceGraphic"/>
          <feComponentTransfer>
            <feFuncA type="linear" slope="0.7"/>
          </feComponentTransfer>
        </filter>
      </defs>
                <path
                  className="circle-bg"
                  d="M18 2.0845
         a 15.9155 15.9155 0 0 0 0 31.831
         a 15.9155 15.9155 0 0 0 0 -31.831"
                />
                <path
                  className="circle"
                  strokeDasharray={`${overallPercentage}, 100`}
                  strokeDashoffset="25" // This offsets the stroke for anti-clockwise direction
                  d="M18 2.0845
         a 15.9155 15.9155 0 0 0 0 31.831
         a 15.9155 15.9155 0 0 0 0 -31.831"
                />
                <text
                  x="18"
                  y="16"
                  className="percentage"
                  style={{
                    fontSize: "8px",
                    fontWeight: "500",
                    textAnchor: "middle",
                  }}
                >
                  {overallPercentage}%
                </text>
                <text
                  x="18"
                  y="24"
                  className="percentage"
                  style={{
                    fontSize: "2.5px",
                    fontWeight: "500",
                    textAnchor: "middle",
                  }}
                >
                  OverAll Percentage
                </text>
              </svg>
            </div>




     



          </div>
          <div className="col-12">
            <div className="flex-wrapper">
              {/* {dummyData.map((item, index) => (
                <div className="single-chart" key={index}>
                  <svg viewBox="0 0 36 36" className="circular-chart orange">
                    <path
                      className="circle-bg"
                      d="M18 2.0845
     a 15.9155 15.9155 0 0 0 0 31.831
     a 15.9155 15.9155 0 0 0 0 -31.831"
                    />
                    <path
                      className="circle"
                      strokeDasharray={`${overallPercentage}, 100`}
                      strokeDashoffset="25" // This offsets the stroke for anti-clockwise direction
                      d="M18 2.0845
     a 15.9155 15.9155 0 0 0 0 31.831
     a 15.9155 15.9155 0 0 0 0 -31.831"
                    />

                    <text x="18" y="20.35" className="percentage">
                      {item.value}%
                    </text>
                  </svg>
                  <span
                    style={{
                      fontSize: window.innerWidth <= 768 ? "11px" : "18px",
                      fontWeight: "500",
                      textAlign: "center",
                    }}
                  >
                    {item.label}
                  </span>
                </div>
              ))} */}

{dummyData.map((item, index) => (
  <div className="single-chart" key={index}>
    <svg viewBox="0 0 36 36" className="circular-chart orange">
      <defs>
        <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#ffb88c"/>
          <stop offset="100%" stopColor="#ff8c42"/>
        </linearGradient>
        <filter id="shadow">
          <feDropShadow dx="0.5" dy="0.5" stdDeviation="0.5" floodColor="#000" floodOpacity="0.3"/>
        </filter>
        <filter id="innerShadow">
          <feOffset dx="0" dy="1"/>
          <feGaussianBlur stdDeviation="1"/>
          <feComposite operator="out" in="SourceGraphic"/>
          <feComponentTransfer>
            <feFuncA type="linear" slope="0.7"/>
          </feComponentTransfer>
        </filter>
      </defs>
      
      {/* Background circle with 3D effect */}
      <circle cx="18" cy="18" r="15.9155" className="circle-bg-3d"/>
      
      {/* Main progress circle */}
      <path
        className="circle"
        strokeDasharray={`${item.value}, 100`}
        strokeDashoffset="25"
        d="M18 2.0845 a 15.9155 15.9155 0 0 0 0 31.831 a 15.9155 15.9155 0 0 0 0 -31.831"
        fill="none"
        stroke="url(#gradient)"
        filter="url(#shadow)"
      />
      
      {/* Percentage text */}
      <text 
        x="18" 
        y="20.35" 
        className="percentage"
        filter="url(#shadow)"
      >
        {item.value}%
      </text>
    </svg>
    <span className="chart-label">
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
