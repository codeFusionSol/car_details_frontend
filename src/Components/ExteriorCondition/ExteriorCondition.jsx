import { useEffect, useState } from "react";
import "./ExteriorCondition.css";
const ExteriorCondition = ({ AllFormsData, data }) => {
  console.log(AllFormsData);
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
        <div className="carContainer"></div>
        {/* <img
          className="carImg"
          src="https://wsa2.pakwheels.com/assets/car_certification_v2-7bc4d9c110b5423afde84bc73fb1f8d2.jpg"
          alt=""
        /> */}

        <img
          src="https://wsa2.pakwheels.com/assets/car_certification_v2-7bc4d9c110b5423afde84bc73fb1f8d2.jpg"
          className="carImg"
          alt=""
        />
        <div className="carDivsContainer">
          <div className="leftView">
            <div className="rearLeftFender">
              {leftView &&
                leftView[4]?.value?.map((item, index) => (
                  <div key={index} className="pointDiv">
                    {item}
                  </div>
                ))}
            </div>
            <div className="FrontLeftDoor2">
              {leftView &&
                leftView[2]?.value?.map((item, index) => (
                  <div key={index} className="pointDiv">
                    {item}
                  </div>
                ))}
            </div>
            <div className="FrontLeftDoor1">
              {leftView &&
                leftView[1]?.value?.map((item, index) => (
                  <div key={index} className="pointDiv">
                    {item}
                  </div>
                ))}
            </div>
            <div className="FrontLeftFender">
              {leftView &&
                leftView[1]?.value?.map((item, index) => (
                  <div key={index} className="pointDiv">
                    {item}
                  </div>
                ))}
            </div>
          </div>
          <div className="topView">
            <div className="rearBumper">
              {" "}
              {topView && topView[4]?.value?.map((item, index) => (
                <div key={index} className="pointDiv">
                  {item}
                </div>
              ))}
            </div>
            <div className="trunk">
              {" "}
              {topView && topView[3]?.value?.map((item, index) => (
                <div key={index} className="pointDiv">
                  {item}
                </div>
              ))}
            </div>
            <div className="roof">
              {" "}
              {topView && topView[2]?.value?.map((item, index) => (
                <div key={index} className="pointDiv">
                  {item}
                </div>
              ))}
            </div>
            <div className="boonet">
              {" "}
              {topView && topView[1]?.value?.map((item, index) => (
                <div key={index} className="pointDiv">
                  {item}
                </div>
              ))}
            </div>
            <div className="frontBumper">
              {" "}
              {topView && topView[0]?.value?.map((item, index) => (
                <div key={index} className="pointDiv">
                  {item}
                </div>
              ))}
            </div>
          </div>
          <div className="rightView">
            <div className="rearLeftFender">
              {rightView &&
                rightView[4]?.value?.map((item, index) => (
                  <div key={index} className="pointDiv">
                    {item}
                  </div>
                ))}
            </div>
            <div className="FrontLeftDoor2">
              {rightView && rightView[2]?.value?.map((item, index) => (
                <div key={index} className="pointDiv">
                  {item}
                </div>
              ))}
            </div>
            <div className="FrontLeftDoor1">
              {rightView && rightView[1]?.value?.map((item, index) => (
                <div key={index} className="pointDiv">
                  {item}
                </div>
              ))}
            </div>
            <div className="FrontLeftFender">
              {rightView && rightView[1]?.value?.map((item, index) => (
                <div key={index} className="pointDiv">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ExteriorCondition;
