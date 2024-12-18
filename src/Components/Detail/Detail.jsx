import { useState } from "react";
import PartStateBox from "../PartStateBox/PartStateBox";
import "./Detail.css";
import AddCircleRoundedIcon from "@mui/icons-material/AddCircleRounded";
const Detail = ({ AllFormsData }) => {
  const pictures = AllFormsData?.find((item) => item.name === "Pictures");
  // console.log(pictures);
  const [activeSections, setActiveSections] = useState([]);
  const [toggle, setToggle] = useState(false);
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

  const handleClick = (section, index) => {
    console.log(section);

    const findSextion = activeSections.find(
      (item) => item.name === section.name
    );
    if (findSextion) {
      setActiveSections((prev) =>
        prev.filter((item) => item.name !== section.name)
      );
    } else {
      setActiveSections((prev) => [...prev, section]);
    }
  };

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
      <div
        style={{
          padding: "20px",
          display: "flex",
          alignItems: "center",
          gap: "10px",
        }}
      >
        <style>
          {`
            .switch {
              position: relative;
              display: inline-block;
              width: 60px;
              height: 34px;
            }

            .switch input {
              opacity: 0;
              width: 0;
              height: 0;
            }

            .slider {
              position: absolute;
              cursor: pointer;
              top: 0;
              left: 0;
              right: 0;
              bottom: 0;
              background-color: #ccc;
              transition: .4s;
            }

            .slider:before {
              position: absolute;
              content: "";
              height: 26px;
              width: 26px;
              left: 4px;
              bottom: 4px;
              background-color: white;
              transition: .4s;
            }

            input:checked + .slider {
              background-color: var(--primary-color);
            }

            input:focus + .slider {
              box-shadow: 0 0 1px var(--primary-color);
            }

            input:checked + .slider:before {
              transform: translateX(26px);
            }

            .slider.round {
              border-radius: 34px;
            }

            .slider.round:before {
              border-radius: 50%;
            }
          `}
        </style>

        <span
          style={{
            fontWeight: 500,
          }}
        >
          Checks the faults
        </span>
        <label className="switch">
          <input
            type="checkbox"
            onChange={(e) => setToggle(e.target.checked)}
          />
          <span className="slider round"></span>
        </label>
      </div>

      <div className="container my-4" style={{ backgroundColor: "#fff" }}>
        {/* Accordion Section */}
        <div className="p-4">
          <div className="accordion" id="inspectionAccordion">
            {AllFormsData?.map((section, index) => {
              if (index < 9) {
                return (
                  <div className="accordion-item " key={index}>
                    <button
                      onClick={() => handleClick(section, index)}
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
                          src={
                            activeSections.includes(section)
                              ? "/assets/icons/minus.png"
                              : "/assets/icons/plusIcon.png"
                          }
                          width="30px"
                          alt="plusIcon"
                        />
                      </span>
                    </button>
                    <div
                      id={`collapse`}
                      className={`accordion-collapse collapse ${
                        activeSections.includes(section) ? "show" : ""
                      }`}
                    >
                      <div
                        className="accordion-body d-flex flex-wrap gap-2"
                        style={{
                          transition: "all 0.3s ease",
                        }}
                      >
                        {activeSections.includes(section) &&
                          AllFormsData[index]?.data?.imageValueChecks?.map(
                            (item, idx) => {
                              if (toggle) {
                                if (item?.data?.percentage <= 66) {
                                  console.log(item);
                                  return (
                                    <PartStateBox
                                      key={idx}
                                      data={item}
                                      index={index}
                                      toggle={toggle}
                                    />
                                  );
                                }
                                return null;
                              }
                              return (
                                <PartStateBox
                                  key={idx}
                                  data={item}
                                  index={index}
                                  toggle={toggle}
                                />
                              );
                            }
                          )}

                        {activeSections.includes(section) &&
                          Object.keys(AllFormsData[index]?.data || {}).map(
                            (key) => {
                              const sectionData =
                                AllFormsData[index]?.data[key];
                              return sectionData?.imageValueChecks?.map(
                                (item, idx) => {
                                  if (toggle) {
                                    if (item?.data?.percentage <= 66) {
                                      console.log(item);
                                      return (
                                        <PartStateBox
                                          key={`${key}-${idx}`}
                                          data={item}
                                          index={index}
                                          toggle={toggle}
                                        />
                                      );
                                    }
                                    return null;
                                  }
                                  return (
                                    <PartStateBox
                                      key={`${key}-${idx}`}
                                      data={item}
                                      index={index}
                                      toggle={toggle}
                                    />
                                  );
                                }
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
