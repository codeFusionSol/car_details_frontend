import "./CarDetails.css";
const CarDetails = ({ data }) => {
  // console.log(data);
  const carDetails = data?.carId;
  // console.log(carDetails);
  return (
    <>
      <div className="car-card container-lg">
        <div className="car-image p-sm-4">
          <img
            src={carDetails?.image?.url}
            style={{ objectFit: "cover" }}
            alt="Toyota Aqua 2014"
          />
          <h2 className="car-title mt-2 text-left">
            {carDetails?.name} {carDetails?.registeredYear}
          </h2>
          <p className="car-model">
            Model <span></span>
          </p>
        </div>
        <div className="car-details">
          <table className="carDetailsTable">
            <tr>
              <td className="borderRight borderBottom">
                {" "}
                drive Type
                <span>{carDetails?.driveType}</span>
              </td>
              <td className="borderRight borderBottom">
                {" "}
                Mileage
                <span>{carDetails?.mileage}</span>
              </td>
              <td className="borderRight borderBottom">
                Inspection Date
                <span>{carDetails?.inspectionDate.slice(0, 10)}</span>
              </td>
              <td className="borderRight borderBottom">
                {" "}
                Engine No. <span>{carDetails?.engineNo || "N/A"}</span>
              </td>
              <td className="borderBottom">
                {" "}
                Transmission Type{" "}
                <span>{carDetails?.transmissionType || "N/A"}</span>
              </td>
            </tr>
            <tr>
              <td className="borderRight borderBottom">
                {" "}
                CNG INSTALL{" "}
                <span> {carDetails?.cngInstall ? "Yes" : "No"}</span>
              </td>
              <td className="borderRight borderBottom">
                {" "}
                Engine Capacity{" "}
                <span> {carDetails?.engineCapacity || "N/A"}</span>
              </td>
              <td className="borderRight borderBottom">
                {" "}
                Chassis No. <span> {carDetails?.chassisNo || "N/A"}</span>
              </td>
              <td className="borderRight borderBottom">
                {" "}
                Registered City{" "}
                <span> {carDetails?.registeredCity || "N/A"}</span>
              </td>
              <td className="borderBottom">
                {" "}
                Registration No{" "}
                <span> {carDetails?.registrationNo || "N/A"}</span>
              </td>
            </tr>
            <tr>
              <td className="borderRight ">
                {" "}
                Colour <span> {carDetails?.colour || "N/A"}</span>
              </td>
              <td className="borderRight ">
                {" "}
                {/* Engine <span>Value</span> */}
              </td>
              <td className="borderRight ">
                {" "}
                {/* Engine <span>Value</span> */}
              </td>
              <td className="borderRight ">
                {" "}
                {/* Engine <span>Value</span> */}
              </td>
              <td className=""> {/* Engine <span>Value</span> */}</td>
            </tr>
          </table>

          <div className="carDetailsMobile">
            <p>
              Drive Type: <span>{carDetails?.driveType || "N/A"}</span>
            </p>
            <p>
              Mileage: <span>{carDetails?.mileage || "N/A"}</span>
            </p>
            <p>
              Inspection Date:{" "}
              <span>{carDetails?.inspectionDate.slice(0, 10) || "N/A"}</span>
            </p>
            <p>
              Engine No.: <span>{carDetails?.engineNo || "N/A"}</span>
            </p>
            <p>
              Transmission Type:{" "}
              <span>{carDetails?.transmissionType || "N/A"}</span>
            </p>
            <p>
              CNG Install: <span>{carDetails?.cngInstall ? "Yes" : "No"}</span>
            </p>
            <p>
              Engine Capacity:{" "}
              <span>{carDetails?.engineCapacity || "N/A"}</span>
            </p>
            <p>
              Chassis No.: <span>{carDetails?.chassisNo || "N/A"}</span>
            </p>
            <p>
              Registered City:{" "}
              <span>{carDetails?.registeredCity || "N/A"}</span>
            </p>
            <p>
              Registration No.:{" "}
              <span>{carDetails?.registrationNo || "N/A"}</span>
            </p>
            <p>
              Colour: <span>{carDetails?.colour || "N/A"}</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CarDetails;
