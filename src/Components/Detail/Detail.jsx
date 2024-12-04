import "./Detail.css";
import AddCircleRoundedIcon from "@mui/icons-material/AddCircleRounded";
const Detail = () => {
  const sections = [
    "Exterior Condition",
    "Body Frame Accident Checklist",
    "Engine / Transmission / Clutch",
    "Brakes",
    "Suspension / Steering",
    "Interior",
    "AC / Heater",
    "Electrical & Electronics",
    "Exterior & Body",
    "Tyres",
  ];

  const renderImagePlaceholders = () => (
    <div className="row g-3 p-4">
      {Array.from({ length: 8 }).map((_, index) => (
        <div className="col-6 col-sm-4 col-md-3" key={index}>
          <div
            className="border text-center d-flex align-items-center justify-content-center"
            style={{ height: "100px", backgroundColor: "#f8f9fa" }}
          ></div>
        </div>
      ))}
    </div>
  );

  return (
    <>
      <div className="container my-4" style={{ backgroundColor: "#fff" }}>
        {/* Accordion Section */}
        <div className="p-4">
          <div className="accordion" id="inspectionAccordion">
            {sections.map((section, index) => (
              <div className="accordion-item " key={index}>
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={`#collapse${index}`}
                  aria-expanded="false"
                  aria-controls={`collapse${index}`}
                >
                  {section}
                  <span className="ms-auto ">
                    <AddCircleRoundedIcon />
                  </span>
                </button>
                <div
                  id={`collapse${index}`}
                  className="accordion-collapse collapse"
                  aria-labelledby={`heading${index}`}
                  data-bs-parent="#inspectionAccordion"
                >
                  <div className="accordion-body">
                    Add content for the "{section}" section here.
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Vehicle Pictures */}
        <h5 className="mt-5 p-4">Main - Vehicle Pictures</h5>
        {renderImagePlaceholders()}
      </div>
    </>
  );
};

export default Detail;
