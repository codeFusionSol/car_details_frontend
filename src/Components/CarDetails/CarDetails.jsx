import "./CarDetails.css";
const CarDetails = () => {
  return (
    <>
      <div className="car-card container-lg">
        <div className="car-image p-sm-4">
          <img
            src="https://famewheels.s3.eu-north-1.amazonaws.com/public/inspection/f820cf6350d8/iex_front_view_image/17177657761432972708.jpg"
            alt="Toyota Aqua 2014"
          />
          <h2 className="car-title mt-2 text-center" >Toyota Aqua 2014</h2>
          <p className="car-model">
            Model <span>2017</span>
          </p>
        </div>
        <div className="car-details">
          <table className="carDetailsTable">
            <tr>
              <td className="borderRight borderBottom">
                {" "}
                Engine <span>Value</span>
              </td>
              <td className="borderRight borderBottom">
                {" "}
                Engine <span>Value</span>
              </td>
              <td className="borderRight borderBottom">
                {" "}
                Engine <span>Value</span>
              </td>
              <td className="borderRight borderBottom">
                {" "}
                Engine <span>Value</span>
              </td>
              <td className="borderBottom">
                {" "}
                Engine <span>Value</span>
              </td>
            </tr>
            <tr>
              <td className="borderRight borderBottom">
                {" "}
                Engine <span>Value</span>
              </td>
              <td className="borderRight borderBottom">
                {" "}
                Engine <span>Value</span>
              </td>
              <td className="borderRight borderBottom">
                {" "}
                Engine <span>Value</span>
              </td>
              <td className="borderRight borderBottom">
                {" "}
                Engine <span>Value</span>
              </td>
              <td className="borderBottom">
                {" "}
                Engine <span>Value</span>
              </td>
            </tr>
            <tr>
              <td className="borderRight ">
                {" "}
                Engine <span>Value</span>
              </td>
              <td className="borderRight ">
                {" "}
                Engine <span>Value</span>
              </td>
              <td className="borderRight ">
                {" "}
                Engine <span>Value</span>
              </td>
              <td className="borderRight ">
                {" "}
                Engine <span>Value</span>
              </td>
              <td className="">
                {" "}
                Engine <span>Value</span>
              </td>
            </tr>
          </table>

          <div className="carDetailsMobile">
            <p>
              Engine: <span>Value</span>
            </p>
            <p>
              Engine: <span>Value</span>
            </p>
            <p>
              Engine: <span>Value</span>
            </p>
            <p>
              Engine: <span>Value</span>
            </p>
            <p>
              Engine: <span>Value</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CarDetails;
