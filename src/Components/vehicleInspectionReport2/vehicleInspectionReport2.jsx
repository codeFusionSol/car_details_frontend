import { useEffect } from "react";
import "./vehicleInspectionReport2.css";
import { useState } from "react";

const vehicleInspectionReport2 = ({ AllFormsData, data }) => {
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
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <h2 className="vehicle-inspection-report-title mb-3">
              Vehicle Inspection Report
            </h2>
            <div className="row">

            {dummyData.map((item, index) => (
              <div className="col-lg-3  mb-md-4 mt-md-3 my-1">
                  <h6 className="progress-bar-label mb-2">{item.label}</h6>
                <div className="progress mb-3 " key={index}>
                <div
                  className="progress-bar"
                  style={{
                    backgroundColor: "var(--primary-color)",
                    width: `${item.value}%`,
                    color: "var(--black-color)",
                    fontWeight: "bold",
                    fontSize: "14px",
                  }}
                  role="progressbar"
                  aria-valuenow={item.value}
                  aria-valuemin="0"
                  aria-valuemax="100"
                  >
                    {item.value}%
                  </div>
              </div>
              </div>
            ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default vehicleInspectionReport2;
