import "./Navbar.css";
import PrintIcon from "@mui/icons-material/Print";
const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg  navbarContainer">
        <div className="container">
          <div className="order-lg-0">
            <img
              src="/assets/logo.png"
              alt="Logo"
              width="160"
              className="d-inline-block align-text-top logo"
            />
          </div>

          <div className="order-lg-1">
            <button className="printBtn" onClick={() => window.print()}>
              <PrintIcon className="printIcon" /> PRINT REPORT
            </button>
          </div>

          <div className="w-100 text-center align-items-center order-lg-0 my-1 my-lg-0">
            <span className="mb-0 carInspection ">
              <img src="/assets/inspectionImg.png" className="inspectionImg" alt="car" width="255" />
              {/* CAR <span>INSPECTION</span> */}
            </span>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
