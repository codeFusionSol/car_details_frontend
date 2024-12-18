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
          <h2 className="car-title mt-2 text-center">{carDetails?.name}</h2>
          <p className="car-model text-center">
            Model <span>{carDetails?.registeredYear}</span>
          </p>
        </div>
        <div className="car-details">
          <table className="carDetailsTable">
            <tr>
              <td className="borderRight borderBottom">
                {" "}
                Drive Type
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
                Engine Capacity{" "}
                <span> {carDetails?.engineCapacity || "N/A"}</span>
              </td>
              <td className="borderRight borderBottom">
                {" "}
                CNG INSTALL{" "}
                <span> {carDetails?.cngInstall ? "Yes" : "No"}</span>
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
              <td className=" ">
                {" "}
              </td>
              <td className="borderRight ">
                {" "}
                {/* Engine <span>Value</span> */}
              </td>
              <td className="borderRight ">
                {" "}
                Colour <span> {carDetails?.colour || "N/A"}</span>

                {/* Engine <span>Value</span> */}
              </td>
              <td className=" ">
                {" "}
                {/* Engine <span>Value</span> */}
              </td>
              <td className=""> {/* Engine <span>Value</span> */}</td>
            </tr>
          </table>

          <div className="carDetailsMobile">
            <p className="carDetailsMobileItem">
              Drive Type <span>{carDetails?.driveType || "N/A"}</span>
            </p>
            <p className="carDetailsMobileItem">
              Mileage <span>{carDetails?.mileage || "N/A"}</span>
            </p>
            <p className="carDetailsMobileItem">
              Inspection Date{" "}
              <span>{carDetails?.inspectionDate.slice(0, 10) || "N/A"}</span>
            </p>
            <p className="carDetailsMobileItem">
              Engine No. <span>{carDetails?.engineNo || "N/A"}</span>
            </p>
            <p className="carDetailsMobileItem">
              Transmission Type{" "}
              <span>{carDetails?.transmissionType || "N/A"}</span>
            </p>
            <p className="carDetailsMobileItem">
              Engine Capacity <span>{carDetails?.engineCapacity || "N/A"}</span>
            </p>
            <p className="carDetailsMobileItem">
              CNG Install <span>{carDetails?.cngInstall ? "Yes" : "No"}</span>
            </p>
            <p className="carDetailsMobileItem">
              Chassis No. <span>{carDetails?.chassisNo || "N/A"}</span>
            </p>
            <p className="carDetailsMobileItem">
              Registered City <span>{carDetails?.registeredCity || "N/A"}</span>
            </p>
            <p className="carDetailsMobileItem">
              Registration No.{" "}
              <span>{carDetails?.registrationNo || "N/A"}</span>
            </p>
            <p className="carDetailsMobileItem">
              Colour <span>{carDetails?.colour || "N/A"}</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CarDetails;
