import CarDetails from "../../Components/CarDetails/CarDetails";
import CommentsDisclaimer from "../../Components/CommentsDisclaimer/CommentsDisclaimer";
import Detail from "../../Components/Detail/Detail";
import ExteriorCondition from "../../Components/ExteriorCondition/ExteriorCondition.jsx";
import Navbar from "../../Components/Navbar/Navbar.jsx";
import VehicleInspectionReport from "../../Components/vehicleInspectionReport/vehicleInspectionReport.jsx";
import VehicleInspectionReport2 from "../../Components/vehicleInspectionReport2/vehicleInspectionReport2.jsx";

const Home = ({ data, AllFormsData }) => {
  const isMobile = window.innerWidth <= 768;

  return (
    <>
      <Navbar />
      <div className="container">
        <div className="row">
          <div className="col-12 d-flex justify-content-center VehicleInspectionReportContainer">
            <VehicleInspectionReport AllFormsData={AllFormsData} data={data} />
          </div>

       

          <div className="col-12 d-flex mb-4 justify-content-center VehicleInspectionReportContainer">
            <VehicleInspectionReport2 AllFormsData={AllFormsData} data={data} />
          </div>

          <div className="col-12 d-flex mb-4 justify-content-center">
            <CarDetails data={data} />
          </div>

          <div
            style={{ height: "100%" }}
            className="col-12 d-flex justify-content-between "
          >
            <ExteriorCondition AllFormsData={AllFormsData} />
          </div>
          <div
            className="col-12 d-flex justify-content-between "
            style={{ marginBottom: "10px" }}
          >
            <div
              className="points d-flex flex-column flex-wrap justify-content-center gap-1
             mt-md-5 mt-4"
            >
              <div className="point">
                <div
                  style={{
                    backgroundColor: "var(--primary-color)",
                    color: "var(--black-color)",
                    padding: isMobile ? "8px" : "8px 15px",
                    borderRadius: "50%",
                    fontSize: isMobile ? "10px" : "14px",
                    fontWeight: "500",
                    boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
                    width: isMobile ? "25px" : "40px",
                    height: isMobile ? "25px" : "40px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "8px",
                  }}
                >
                  A1
                </div>
                <p
                  style={{
                    fontSize: isMobile ? "11px" : "13px",
                    fontWeight: "500",
                    color: "var(--black-color)",
                    textAlign: "left", // Change from center to left
                    maxWidth: "100%",
                    padding: "0 0 7px 0 !important",
                  }}
                >
                  Small Scratch
                </p>
              </div>
              <div className="point">
                <div
                  style={{
                    backgroundColor: "var(--primary-color)",
                    color: "var(--black-color)",
                    padding: isMobile ? "8px" : "8px 15px",
                    borderRadius: "50%",
                    fontSize: isMobile ? "10px" : "14px",
                    fontWeight: "500",
                    boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
                    width: isMobile ? "25px" : "40px",
                    height: isMobile ? "25px" : "40px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "8px",
                  }}
                >
                  A2
                </div>
                <p
                  style={{
                    fontSize: isMobile ? "11px" : "13px",
                    fontWeight: "500",
                    color: "var(--black-color)",
                    textAlign: "left", // Change from center to left
                    maxWidth: "100%",
                    padding: "0 0 7px 0 !important",
                  }}
                >
                  Scratch
                </p>
              </div>
              <div className="point">
                <div
                  style={{
                    backgroundColor: "var(--primary-color)",
                    color: "var(--black-color)",
                    padding: isMobile ? "8px" : "8px 15px",
                    borderRadius: "50%",
                    fontSize: isMobile ? "10px" : "14px",
                    fontWeight: "500",
                    boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
                    width: isMobile ? "25px" : "40px",
                    height: isMobile ? "25px" : "40px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "8px",
                  }}
                >
                  B1
                </div>
                <p
                  style={{
                    fontSize: isMobile ? "11px" : "13px",
                    fontWeight: "500",
                    color: "var(--black-color)",
                    textAlign: "left", // Change from center to left
                    maxWidth: "100%",
                    padding: "0 0 7px 0 !important",
                  }}
                >
                  Small dent with scratch (size like a thumb)
                </p>
              </div>
              <div className="point">
                <div
                  style={{
                    backgroundColor: "var(--primary-color)",
                    color: "var(--black-color)",
                    padding: isMobile ? "8px" : "8px 15px",
                    borderRadius: "50%",
                    fontSize: isMobile ? "10px" : "14px",
                    fontWeight: "500",
                    boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
                    width: isMobile ? "25px" : "40px",
                    height: isMobile ? "25px" : "40px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "8px",
                  }}
                >
                  B2
                </div>
                <p
                  style={{
                    fontSize: isMobile ? "11px" : "13px",
                    fontWeight: "500",
                    color: "var(--black-color)",
                    textAlign: "left", // Change from center to left
                    maxWidth: "100%",
                    padding: "0 0 7px 0 !important",
                  }}
                >
                  Dent with scratch (size like flat of the hand)
                </p>
              </div>
              <div className="point">
                <div
                  style={{
                    backgroundColor: "var(--primary-color)",
                    color: "var(--black-color)",
                    padding: isMobile ? "8px" : "8px 15px",
                    borderRadius: "50%",
                    fontSize: isMobile ? "10px" : "14px",
                    fontWeight: "500",
                    boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
                    width: isMobile ? "25px" : "40px",
                    height: isMobile ? "25px" : "40px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "8px",
                  }}
                >
                  D2
                </div>
                <p
                  style={{
                    fontSize: isMobile ? "11px" : "13px",
                    fontWeight: "500",
                    color: "var(--black-color)",
                    textAlign: "left", // Change from center to left
                    maxWidth: "100%",
                    padding: "0 0 7px 0 !important",
                  }}
                >
                  Dent
                </p>
              </div>
              <div className="point">
                <div
                  style={{
                    backgroundColor: "var(--primary-color)",
                    color: "var(--black-color)",
                    padding: isMobile ? "8px" : "8px 15px",
                    borderRadius: "50%",
                    fontSize: isMobile ? "10px" : "14px",
                    fontWeight: "500",
                    boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
                    width: isMobile ? "25px" : "40px",
                    height: isMobile ? "25px" : "40px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "8px",
                  }}
                >
                  P
                </div>
                <p
                  style={{
                    fontSize: isMobile ? "11px" : "13px",
                    fontWeight: "500",
                    color: "var(--black-color)",
                    textAlign: "left", // Change from center to left
                    maxWidth: "100%",
                    padding: "0 0 7px 0 !important",
                  }}
                >
                  Paint Marked
                </p>
              </div>
            </div>
          </div>

          <div className="col-12 d-flex flex-column align-items-center   justify-content-center ">
            <Detail AllFormsData={AllFormsData} />
          </div>

          <div className="col-12 mt-0 d-flex justify-content-center">
            <CommentsDisclaimer AllFormsData={AllFormsData} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
