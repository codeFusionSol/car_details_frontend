import "./Navbar.css";
import PrintIcon from "@mui/icons-material/Print";
const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg  navbarContainer">
        <div className="container navbarContainer2">
          <div className="order-0">
            <img
              src="/assets/logo.png"
              alt="Logo"
              width="160"
              className="d-inline-block align-text-top logo"
            />
          </div>

          <div className="order-2 d-flex flex-column justify-content-center">
            {/* <button className="printBtn" onClick={() => window.print()}>
              <PrintIcon className="printIcon" /> PRINT REPORT
            </button> */}
            <div className="d-flex text-center justify-content-center">
              <img
                src="/assets/icons/car.png"
                className="inspectionImg"
                alt="car"
                width="70px"
              />
            </div>
            {/* <span className="mb-0 carInspection ">
              CAR <span>INSPECTION</span> REPORT
            </span> */}
          </div>

          <div className=" text-center align-items-center order-1 my-1 my-md-0 headingDiv">
            <span className="mb-0 carInspection ">
              CAR <span>INSPECTION </span>REPORT
            </span>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
