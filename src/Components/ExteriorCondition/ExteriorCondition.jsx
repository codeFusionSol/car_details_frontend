import { useEffect, useState } from "react";
import "./ExteriorCondition.css";
const ExteriorCondition = ({ AllFormsData, data }) => {
  // console.log(AllFormsData);
  const [leftView, setLeftView] = useState(null);
  const [topView, setTopView] = useState(null);
  const [rightView, setRightView] = useState(null);

  const setData = () => {
    if (AllFormsData?.length > 10) {
      setLeftView(AllFormsData[10]?.data?.leftView);
      setTopView(AllFormsData[10]?.data?.topView);
      setRightView(AllFormsData[10]?.data?.rightView);
    }
  };
  useEffect(() => {
    setData();
  }, [AllFormsData?.length]);

  useEffect(() => {
    console.log(leftView, topView, rightView);
  }, [leftView, topView, rightView]);

  return (
    <>
      <div className="carMainContainer">
        <div className="carContainer">
          <img
            src="https://wsa2.pakwheels.com/assets/car_certification_v2-7bc4d9c110b5423afde84bc73fb1f8d2.jpg"
            className="carImg"
            alt="Car Diagram"
          />
          <div className="carDivsContainer">
            <div className="leftView">
              <div className="rearLeftFender">
                {leftView &&
                  leftView
                    ?.find((item) => item.name === "Rear Left Fender")
                    ?.value?.map((item, index) => (
                      <div
                        key={index}
                        className="pointDiv"
                        style={{
                          margin: "0px",
                          fontSize: "11px",
                        }}
                      >
                        {item}
                      </div>
                    ))}
              </div>
              <div className="FrontLeftDoor2">
                {leftView &&
                  leftView
                    ?.find((item) => item.name === "Front Left Door 2")
                    ?.value?.map((item, index) => (
                      <div
                        key={index}
                        className="pointDiv"
                        style={{
                          margin: "0px",
                          fontSize: "11px",
                        }}
                      >
                        {item}
                      </div>
                    ))}
              </div>
              <div className="FrontLeftDoor1">
                {leftView &&
                  leftView
                    ?.find((item) => item.name === "Front Left Door 1")
                    ?.value?.map((item, index) => (
                      <div
                        key={index}
                        className="pointDiv"
                        style={{
                          margin: "0px",
                          fontSize: "11px",
                        }}
                      >
                        {item}
                      </div>
                    ))}
              </div>
              <div className="FrontLeftFender">
                {leftView &&
                  leftView
                    ?.find((item) => item.name === "Front Left Fender")
                    ?.value?.map((item, index) => (
                      <div
                        key={index}
                        className="pointDiv"
                        style={{
                          margin: "0px",
                          fontSize: "11px",
                        }}
                      >
                        {item}
                      </div>
                    ))}
              </div>
            </div>

            <div className="topView">
              <div className="rearBumper">
                {topView &&
                  topView
                    ?.find((item) => item.name === "Rear Bumper")
                    ?.value?.map((item, index) => (
                      <div
                        key={index}
                        className="pointDiv"
                        style={{
                          margin: "0px",
                          fontSize: "11px",
                        }}
                      >
                        {item}
                      </div>
                    ))}
              </div>
              <div className="trunk">
                {topView &&
                  topView
                    ?.find((item) => item.name === "Trunk")
                    ?.value?.map((item, index) => (
                      <div
                        key={index}
                        className="pointDiv"
                        style={{
                          margin: "0px",
                          fontSize: "11px",
                        }}
                      >
                        {item}
                      </div>
                    ))}
              </div>
              <div className="roof">
                {topView &&
                  topView
                    ?.find((item) => item.name === "Roof")
                    ?.value?.map((item, index) => (
                      <div
                        key={index}
                        className="pointDiv"
                        style={{
                          margin: "0px",
                          fontSize: "11px",
                        }}
                      >
                        {item}
                      </div>
                    ))}
              </div>
              <div className="boonet">
                {topView &&
                  topView
                    ?.find((item) => item.name === "Boonet")
                    ?.value?.map((item, index) => (
                      <div
                        key={index}
                        className="pointDiv"
                        style={{
                          margin: "0px",
                          fontSize: "11px",
                        }}
                      >
                        {item}
                      </div>
                    ))}
              </div>
              <div className="frontBumper">
                {topView &&
                  topView
                    ?.find((item) => item.name === "Front Bumper")
                    ?.value?.map((item, index) => (
                      <div
                        key={index}
                        className="pointDiv"
                        style={{
                          margin: "0px",
                          fontSize: "11px",
                        }}
                      >
                        {item}
                      </div>
                    ))}
              </div>
            </div>

            <div className="rightView">
              <div className="rearRightFender">
                {rightView &&
                  rightView
                    ?.find((item) => item.name === "Rear Right Fender")
                    ?.value?.map((item, index) => (
                      <div
                        key={index}
                        className="pointDiv"
                        style={{
                          margin: "0px",
                          fontSize: "11px",
                        }}
                      >
                        {item}
                      </div>
                    ))}
              </div>
              <div className="FrontRightDoor2">
                {rightView &&
                  rightView
                    ?.find((item) => item.name === "Front Right Door 2")
                    ?.value?.map((item, index) => (
                      <div
                        key={index}
                        className="pointDiv"
                        style={{
                          margin: "0px",
                          fontSize: "11px",
                        }}
                      >
                        {item}
                      </div>
                    ))}
              </div>
              <div className="FrontRightDoor1">
                {rightView &&
                  rightView
                    ?.find((item) => item.name === "Front Right Door 1")
                    ?.value?.map((item, index) => (
                      <div
                        key={index}
                        className="pointDiv"
                        style={{
                          margin: "0px",
                          fontSize: "11px",
                        }}
                      >
                        {item}
                      </div>
                    ))}
              </div>
              <div className="FrontRightFender">
                {rightView &&
                  rightView
                    ?.find((item) => item.name === "Front Right Fender")
                    ?.value?.map((item, index) => (
                      <div
                        key={index}
                        className="pointDiv"
                        style={{
                          margin: "0px",
                          fontSize: "11px",
                        }}
                      >
                        {item}
                      </div>
                    ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ExteriorCondition;
