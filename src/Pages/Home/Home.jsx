import CarDetails from "../../Components/CarDetails/CarDetails";
import CommentsDisclaimer from "../../Components/CommentsDisclaimer/CommentsDisclaimer";
import Detail from "../../Components/Detail/Detail";
import Navbar from "../../Components/Navbar/Navbar";
import VehicleInspectionReport from "../../Components/vehicleInspectionReport/vehicleInspectionReport";

const Home = () => {
  return (
    <>
      <Navbar />
      <br />
      <br />
      <div className="container">
        <div className="row">
          <div className="col-12 d-flex justify-content-center">
            <CarDetails />
          </div>



          <div className="col-12 mt-5 d-flex justify-content-center">
            <VehicleInspectionReport />
          </div>

          <div className="col-12 mt-5 d-flex justify-content-center">
            <Detail />
          </div>

          <div className="col-12 mt-5 d-flex justify-content-center">
            <CommentsDisclaimer />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
