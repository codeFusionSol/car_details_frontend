import { useEffect, useState } from "react";
import PartStateBox from "../PartStateBox/PartStateBox";
import "./Detail.css";
import AddCircleRoundedIcon from "@mui/icons-material/AddCircleRounded";
const Detail = ({ AllFormsData }) => {
  // console.log(AllFormsData);
  const pictures = AllFormsData?.find((item) => item.name === "Pictures");
  // console.log(pictures);
  const [activeSections, setActiveSections] = useState([...AllFormsData]);
  const isMobile = window.innerWidth <= 768;

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null); // State for selected image

  const openModal = (imageData) => {
    setSelectedImage(imageData); // Set clicked image data
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null); // Clear selected image
  };

  useEffect(() => {
    setActiveSections([...AllFormsData]);
  }, [AllFormsData]);

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
              alt="Preview"
              style={{
                objectFit: "cover",
                borderRadius: "10px",
                width: "100%",
                height: "100%",
              }}
              width="100%"
              height="100%"
              onClick={() => openModal(pictures?.data?.pictures[index]?.url)} // Open modal with image
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
          display: "flex",
          alignItems: "center",
          gap: "10px",
          padding: "0px",
        }}
      >
        <style>
          {`
            .switch {
              position: relative;
              display: inline-block;
              width: 40px;
              height: 24px;
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
              height: 16px;
              width: 16px;
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

      <div
        className="container mt-md-4 mt-3"
        style={{ backgroundColor: "#fff" }}
      >
        {/* Accordion Section */}
        <div className="px-0 py-1">
          <div className="accordion" id="inspectionAccordion">
            {AllFormsData?.map((section, index) => {
              if (index < 9) {
                return (
                  <div className="accordion-item " key={index}>
                    <button
                      onClick={() => handleClick(section, index)}
                      className="accordion-button collapsed py-2"
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
                          width={isMobile ? "20px" : "30px"}
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
                        className="accordion-body d-flex flex-wrap gap-md-2 gap-0 pt-1 pb-0"
                        style={{
                          transition: "all 0.3s ease",
                        }}
                      >
                        {activeSections.includes(section) &&
                          AllFormsData[index]?.data?.imageValueChecks?.map(
                            (item, idx) => {
                              if (toggle) {
                                console.log(item);
                                if (AllFormsData[index].name === "Tyres") {
                                  return null;
                                }
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
                                    console.log(item);

                                    if (AllFormsData[index].name === "Tyres") {
                                      return null;
                                    }
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
          className="mt-1 p-4 "
          style={{
            textAlign: window.innerWidth <= 768 ? "center" : "left",
          }}
        >
          Main - Vehicle Pictures
        </h5>
        {renderImagePlaceholders()}
      </div>

      {isModalOpen && selectedImage && (
        <div
          style={{
            display: "flex",
            position: "fixed",
            zIndex: 1,
            left: 0,
            top: 0,
            bottom: 0,
            right: 0,
            width: "100%",
            height: "100%",
            overflow: "auto",
            backgroundColor: "rgba(0, 0, 0, 0.9)",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <span
            style={{
              position: "fixed",
              top: "15px",
              right: "35px",
              color: "#f1f1f1",
              fontSize: "40px",
              fontWeight: "bold",
              cursor: "pointer",
            }}
            onClick={closeModal}
          >
            &times;
          </span>

          <img
            src={selectedImage} // Display selected image
            alt="Selected"
            style={{
              maxWidth: "95%",
              maxHeight: "95vh",
              width: "100%",
              objectFit: "contain",
              animationName: "zoom",
              animationDuration: "0.6s",
            }}
          />
        </div>
      )}
    </>
  );
};

export default Detail;
