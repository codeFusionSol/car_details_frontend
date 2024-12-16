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

          <div
            style={{ height: "100%" }}
            className="col-12 d-flex justify-content-between "
          >
            <ExteriorCondition AllFormsData={AllFormsData} />
          </div>
          <div
            className="col-12 d-flex justify-content-between "
            style={{ marginBottom: "50px" }}
          >
            <div className="points d-flex flex-wrap flex-start gap-5 mt-5">
              <div className="point">
                <div
                  style={{
                    backgroundColor: "var(--primary-color)",
                    color: "white",
                    padding: "5px 10px",
                    borderRadius: "5px",
                    fontSize: "12px",
                    fontWeight: "bold",
                  }}
                >
                  A1
                </div>
                <p>Small Scratch</p>
              </div>
              <div className="point">
                <div
                  style={{
                    backgroundColor: "var(--primary-color)",
                    color: "white",
                    padding: "5px 10px",
                    borderRadius: "5px",
                    fontSize: "12px",
                    fontWeight: "bold",
                  }}
                >
                  A2
                </div>
                <p>Scratch</p>
              </div>
              <div className="point">
                <div
                  style={{
                    backgroundColor: "var(--primary-color)",
                    color: "white",
                    padding: "5px 10px",
                    borderRadius: "5px",
                    fontSize: "12px",
                    fontWeight: "bold",
                  }}
                >
                  B1
                </div>
                <p>Small dent with scratch (size like a thumb)</p>
              </div>
              <div className="point">
                <div
                  style={{
                    backgroundColor: "var(--primary-color)",
                    color: "white",
                    padding: "5px 10px",
                    borderRadius: "5px",
                    fontSize: "12px",
                    fontWeight: "bold",
                  }}
                >
                  B2
                </div>
                <p>Dent with scratch (size like flat of the hand)</p>
              </div>
              <div className="point">
                <div
                  style={{
                    backgroundColor: "var(--primary-color)",
                    color: "white",
                    padding: "5px 10px",
                    borderRadius: "5px",
                    fontSize: "12px",
                    fontWeight: "bold",
                  }}
                >
                  D2
                </div>
                <p>Dent</p>
              </div>
              <div className="point">
                <div
                  style={{
                    backgroundColor: "var(--primary-color)",
                    color: "white",
                    padding: "5px 10px",
                    borderRadius: "5px",
                    fontSize: "12px",
                    fontWeight: "bold",
                  }}
                >
                  P
                </div>
                <p>Paint Marked</p>
              </div>
            </div>
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
