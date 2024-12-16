import "./ExteriorCondition.css";
const ExteriorCondition = ({ AllFormsData, data }) => {
    console.log(AllFormsData);
  return (
    <>
      <div className="carMainContainer">
        <div className="carContainer">

        </div>
        {/* <img
          className="carImg"
          src="https://wsa2.pakwheels.com/assets/car_certification_v2-7bc4d9c110b5423afde84bc73fb1f8d2.jpg"
          alt=""
        /> */}

        <div className="carDivsContainer">
            <div className="leftView">
                <div className="rearLeftFender">rearLeftFender</div>
                <div className="FrontLeftDoor2">FrontLeftDoor2</div>
                <div className="FrontLeftDoor1">FrontLeftDoor1</div>
                <div className="FrontLeftFender">FrontLeftFender</div>
            </div>
            <div className="topView">top</div>
            <div className="rightView">right</div>
        </div>
      </div>
    </>
  );
};

export default ExteriorCondition;
