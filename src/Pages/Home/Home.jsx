import CarDetails from "../../Components/CarDetails/CarDetails";
import CommentsDisclaimer from "../../Components/CommentsDisclaimer/CommentsDisclaimer";
import Detail from "../../Components/Detail/Detail";
import ExteriorCondition from "../../Components/ExteriorCondition/ExteriorCondition.jsx";
import Navbar from "../../Components/Navbar/Navbar.jsx";
import VehicleInspectionReport from "../../Components/vehicleInspectionReport/vehicleInspectionReport.jsx";

const Home = ({ data, AllFormsData }) => {
  return (
    <>
      <Navbar />
      <br />
      <br />
      <div className="container">
        <div className="row">
          <div className="col-12 d-flex justify-content-center">
            <CarDetails data={data} />
          </div>

          <div className="col-12 d-flex justify-content-center VehicleInspectionReportContainer">
            <VehicleInspectionReport AllFormsData={AllFormsData} data={data} />
          </div>

          <div className="col-12 d-flex justify-content-between ">
            <ExteriorCondition AllFormsData={AllFormsData} />
          </div>

          <div className="col-12 d-flex justify-content-center ">
            <Detail AllFormsData={AllFormsData} />
          </div>

          <div className="col-12 mt-5 d-flex justify-content-center">
            <CommentsDisclaimer AllFormsData={AllFormsData} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
