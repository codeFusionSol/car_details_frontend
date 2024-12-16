import PartStateBox from "../PartStateBox/PartStateBox";
import "./Detail.css";
import AddCircleRoundedIcon from "@mui/icons-material/AddCircleRounded";
const Detail = ({ AllFormsData }) => {
  const pictures = AllFormsData?.find((item) => item.name === "Pictures");
  // console.log(pictures);
  const sections = [
    "Body Frame Accident Checklist",
    "Engine / Transmission / Clutch",
    "Brakes",
    "Suspension / Steering",
    "Interior",
    "AC / Heater",
    "Electrical & Electronics",
    "Exterior & Body",
    "Tyres",
    "Test Drive",
  ];

  const renderImagePlaceholders = () => (
    <div className="row g-3 p-4">
      {pictures?.data?.pictures?.map((item, index) => (
        <div className="col-6 col-sm-4 col-md-3" key={index}>
          <div
            className="border text-center d-flex align-items-center justify-content-center"
            style={{
              height: "100px",
              width: "100%",
              borderRadius: "10px",
              backgroundColor: "#f8f9fa",
            }}
          >
            <img
              src={
                pictures?.data?.pictures[index]?.url ||
                "/assets/icons/plusIcon.png"
              }
              alt="image"
              style={{
                objectFit: "cover",
                borderRadius: "10px",
                width: "100%",
                height: "100%",
              }}
              width="100%"
              height="100%"
            />
          </div>
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
            {AllFormsData?.map((section, index) => {
              if (index < 9) {
                return (
                  <div className="accordion-item " key={index}>
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target={`#collapse${index}`}
                      aria-expanded="false"
                      aria-controls={`collapse${index}`}
                    >
                      {sections[index]}
                      <span className="ms-auto ">
                        <img
                          src="/assets/icons/plusIcon.png"
                          width="30px"
                          alt="plusIcon"
                        />
                      </span>
                    </button>
                    <div
                      id={`collapse${index}`}
                      className="accordion-collapse collapse"
                      aria-labelledby={`heading${index}`}
                      data-bs-parent="#inspectionAccordion"
                    >
                      <div className="accordion-body d-flex flex-wrap gap-2">
                        {AllFormsData[index]?.data?.imageValueChecks?.map(
                          (item, idx) => (
                            <PartStateBox key={idx} data={item} index={index} />
                          )
                        )}

                        {Object.keys(AllFormsData[index]?.data || {}).map(
                          (key) => {
                            const section = AllFormsData[index]?.data[key];
                            return section?.imageValueChecks?.map(
                              (item, idx) => (
                                <PartStateBox
                                  key={`${key}-${idx}`}
                                  data={item}
                                  index={index}
                                />
                              )
                            );
                          }
                        )}
                      </div>
                    </div>
                  </div>
                );
              }
              return null;
            })}
          </div>
        </div>

        {/* Vehicle Pictures */}
        <h5
          className="mt-5 p-4 "
          style={{
            textAlign: window.innerWidth <= 768 ? "center" : "left",
          }}
        >
          Main - Vehicle Pictures
        </h5>
        {renderImagePlaceholders()}
      </div>
    </>
  );
};

export default Detail;
