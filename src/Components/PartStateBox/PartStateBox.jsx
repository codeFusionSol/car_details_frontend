import React, { useState } from "react";

const PartStateBox = ({ data, index, toggle }) => {
  // console.log(data);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  const isMobile = window.innerWidth <= 768;

  return (
    <>
      <div
        style={{
          width: "100%",
          maxWidth: isMobile ? "100%" : "300px",
          maxHeight: "160px",
          display: isMobile ? "flex" : "block",
          borderRadius: "0px",
          textAlign: "center",
          overflow: "hidden",
          fontFamily: "Arial, sans-serif",
          border: isMobile? "1px solid lightgray" : "none"
        }}
      >
        {/* Title Section */}
        <div
          style={{
            width: isMobile ? "60%" : "100%",
          }}
        >
          <div
            const
            style={{
              backgroundColor: "#f9f9f9",
              padding: isMobile ? "4px 6px" : "12px",
              fontSize: isMobile ? "12px" : "18px",
              fontWeight: "500",
              color: "#333",
              textTransform: "capitalize",
            }}
          >
            {data?.name === "radiatorCoreSupport"
              ? "Radiator Core Support"
              : data?.name === "rightStrutTowerApon"
              ? "Right Strut Tower Apon"
              : data?.name === "leftStrutTowerApon"
              ? "Left Strut Tower Apon"
              : data?.name === "cowlPanelFirewall"
              ? "Cowl Panel Firewall"
              : data?.name === "leftFrontRail"
              ? "Left Front Rail"
              : data?.name === "rightFrontRail"
              ? "Right Front Rail"
              : data?.name === "bootFloor"
              ? "Boot Floor"
              : data?.name === "bootLockPillar"
              ? "Boot Lock Pillar"
              : data?.name === "leftFrontRail"
              ? "Left Front Rail"
              : data?.name === "rightFrontRail"
              ? "Right Front Rail"
              : data?.name === "rearSubFrame"
              ? "Rear Sub Frame"
              : data?.name === "frontSubFrame"
              ? "Front Sub Frame"
              : data?.name === "leftAPillar"
              ? "Left A Pillar"
              : data?.name === "rightAPillar"
              ? "Right A Pillar"
              : data?.name === "rightCPillar"
              ? "Right C Pillar"
              : data?.name === "leftBPillar"
              ? "Left B Pillar"
              : data?.name === "rightBPillar"
              ? "Right B Pillar"
              : data?.name === "leftCPillar"
              ? "Left C Pillar"
              : data?.name === "engineOilLevel"
              ? "Engine Oil Level"
              : data?.name === "engineOilLeakage"
              ? "Engine Oil Leakage"
              : data?.name === "transmissionOilLeakage"
              ? "Transmission Oil Leakage"
              : data?.name === "coolantLeakage"
              ? "Coolant Leakage"
              : data?.name === "engineOilLeakage"
              ? "Engine Oil Leakage"
              : data?.name === "brakeOilLeakage"
              ? "Brake Oil Leakage"
              : data?.name === "engineBlow"
              ? "Engine Blow"
              : data?.name === "engineNoise"
              ? "Engine Noise"
              : data?.name === "engineVibration"
              ? "Engine Vibration"
              : data?.name === "engineMounts"
              ? "Engine Mounts"
              : data?.name === "hoses"
              ? "Hoses"
              : data?.name === "exhaustSound"
              ? "Exhaust Sound"
              : data?.name === "radiator"
              ? "Radiator"
              : data?.name === "suctionFan"
              ? "Suction Fan"
              : data?.name === "starterOperation"
              ? "Starter Operation"
              : data?.name === "wires"
              ? "Wires"
              : data?.name === "parkingHandBrake"
              ? "Parking Hand Brake"
              : data?.name === "frontRightDisc"
              ? "Front Right Disc"
              : data?.name === "frontLeftDisc"
              ? "Front Left Disc"
              : data?.name === "frontRightBrakePad"
              ? "Front Right Brake Pad"
              : data?.name === "frontLeftBrakePad"
              ? "Front Left Brake Pad"
              : data?.name === "rightBallJoint"
              ? "Right Ball Joint"
              : data?.name === "steeringWheelPlay"
              ? "Steering Wheel Play"
              : data?.name === "rightZLinks"
              ? "Right Z Links"
              : data?.name === "leftZLinks"
              ? "Left Z Links"
              : data?.name === "rightTieRodEnd"
              ? "Right Tie Rod End"
              : data?.name === "leftBallJoint"
              ? "Left Ball Joint"
              : data?.name === "frontRightBoots"
              ? "Front Right Boots"
              : data?.name === "frontLeftBoots"
              ? "Front Left Boots"
              : data?.name === "leftTieRodEnd"
              ? "Left Tie Rod End"
              : data?.name === "rearRightBoots"
              ? "Rear Right Boots"
              : data?.name === "rearLeftBoots"
              ? "Rear Left Boots"
              : data?.name === "frontRightShock"
              ? "Front Right Shock"
              : data?.name === "frontLeftShock"
              ? "Front Left Shock"
              : data?.name === "frontRightBushes"
              ? "Front Right Bushes"
              : data?.name === "rearRightBushes"
              ? "Rear Right Bushes"
              : data?.name === "rearLeftBushes"
              ? "Rear Left Bushes"
              : data?.name === "rearRightShock"
              ? "Rear Right Shock"
              : data?.name === "rearLeftShock"
              ? "Rear Left Shock"
              : data?.name === "frontRightShock"
              ? "Front Right Shock"
              : data?.name === "rearLeftShock"
              ? "Front Left Shock"
              : data?.name === "rearRightShock"
              ? "Rear Right Shock"
              : data?.name === "rearLeftShock"
              ? "Rear Left Shock"
              : data?.name === "steeringWheelCondition"
              ? "Steering Wheel Condition"
              : data?.name === "wiperWasherLever"
              ? "Wiper Washer Lever"
              : data?.name === "horn"
              ? "Horn"
              : data?.name === "lightsLeverSwitch"
              ? "Lights Lever Switch"
              : data?.name === "leftSideMirror"
              ? "Left Side Mirror"
              : data?.name === "rightSideMirror"
              ? "Right Side Mirror"
              : data?.name === "rearViewMirrorDimmer"
              ? "Rear View Mirror Dimmer"
              : data?.name === "rightSeatAdjusterRecliner"
              ? "Right Seat Adjuster Recliner"
              : data?.name === "leftSeatAdjusterRecliner"
              ? "Left Seat Adjuster Recliner"
              : data?.name === "rightSeatBelt"
              ? "Right Seat Belt"
              : data?.name === "leftSeatAdjusterLearTrack"
              ? "Left Seat Adjuster Lear Track"
              : data?.name === "rightSeatAdjusterLearTrack"
              ? "Right Seat Adjuster Lear Track"
              : data?.name === "leftSeatBelt"
              ? "Left Seat Belt"
              : data?.name === "rearSeatBelt"
              ? "Rear Seat Belt"
              : data?.name === "gloveBox"
              ? "Glove Box"
              : data?.name === "frontRightPowerWindowLever"
              ? "Front Right Power Window Lever"
              : data?.name === "frontLeftPowerWindowLever"
              ? "Front Left Power Window Lever"
              : data?.name === "rearRightPowerWindowLever"
              ? "Rear Right Power Window Lever"
              : data?.name === "windowSafetyLock"
              ? "Window Safety Lock"
              : data?.name === "autoLockButton"
              ? "Auto Lock Button"
              : data?.name === "rearLeftPowerWindowLever"
              ? "Rear Left Power Window Lever"
              : data?.name === "interiorLightings"
              ? "Interior Lightings"
              : data?.name === "dashControlsAC"
              ? "Dash Controls AC"
              : data?.name === "dashControlsDeFog"
              ? "Dash Controls De-Fog"
              : data?.name === "dashControlsHazzardLights"
              ? "Dash Controls Hazzard Lights"
              : data?.name === "audioVideo"
              ? "Audio Video"
              : data?.name === "trunkReleaseLever"
              ? "Trunk Release Lever"
              : data?.name === "bonnetReleaseLever"
              ? "Bonnet Release Lever"
              : data?.name === "fuelCapReleaseLever"
              ? "Fuel Cap Release Lever"
              : data?.name === "roofPoshish"
              ? "Roof Poshish"
              : data?.name === "floorMat"
              ? "Floor Mat"
              : data?.name === "frontRightSeatPoshish"
              ? "Front Right Seat Poshish"
              : data?.name === "frontLeftSeatPoshish"
              ? "Front Left Seat Poshish"
              : data?.name === "rearSeatPoshish"
              ? "Rear Seat Poshish"
              : data?.name === "dashboardCondition"
              ? "Dashboard Condition"
              : data?.name === "spareTire"
              ? "Spare Tire"
              : data?.name === "jack"
              ? "Jack"
              : data?.name === "tools"
              ? "Tools"
              : data?.name === "acFitted"
              ? "AC Fitted"
              : data?.name === "acOperational"
              ? "AC Operational"
              : data?.name === "blower"
              ? "Blower"
              : data?.name === "heating"
              ? "Heating"
              : data?.name === "cooling"
              ? "Cooling"
              : data?.name === "malfunctionCheck"
              ? "Malfunction Check"
              : data?.name === "rearViewCamera"
              ? "Rear View Camera"
              : data?.name === "batteryWarningLight"
              ? "Battery Warning Light"
              : data?.name === "oilPressureLowWarningLight"
              ? "Oil Pressure Low Warning Light"
              : data?.name === "temperatureWarningLight"
              ? "Temperature Warning Light"
              : data?.name === "gauges"
              ? "Gauges"
              : data?.name === "absWarningLight"
              ? "ABS Warning Light"
              : data?.name === "powerSteeringWarningLight"
              ? "Power Steering Warning Light"
              : data?.name === "airBagWarningLight"
              ? "Air Bag Warning Light"
              : data?.name === "keyFobBatteryLowLight"
              ? "Key Fob Battery Low Light"
              : data?.name === "terminalCondition"
              ? "Terminal Condition"
              : data?.name === "charging"
              ? "Charging"
              : data?.name === "battery"
              ? "Battery"
              : data?.name === "alternatorOperation"
              ? "Alternator Operation"
              : data?.name === "frontWindshieldCondition"
              ? "Front Windshield Condition"
              : data?.name === "trunkLock"
              ? "Trunk Lock"
              : data?.name === "frontLeftDoorWindow"
              ? "Front Left Door Window"
              : data?.name === "frontRightDoorWindow"
              ? "Front Right Door Window"
              : data?.name === "rearLeftDoorWindow"
              ? "Rear Left Door Window"
              : data?.name === "rearRightDoorWindow"
              ? "Rear Right Door Window"
              : data?.name === "rearWindshieldCondition"
              ? "Rear Windshield Condition"
              : data?.name === "windscreenWiper"
              ? "Windscreen Wiper"
              : data?.name === "rightHeadlightWorking"
              ? "Right Headlight Working"
              : data?.name === "leftHeadlightWorking"
              ? "Left Headlight Working"
              : data?.name === "rightHeadlightCondition"
              ? "Right Headlight Condition"
              : data?.name === "leftHeadlightCondition"
              ? "Left Headlight Condition"
              : data?.name === "rightTaillightWorking"
              ? "Right Tail Light Working"
              : data?.name === "leftTailLightWorking"
              ? "Left Tail Light Working"
              : data?.name === "rightTailLightCondition"
              ? "Right Tail Light Condition"
              : data?.name === "leftTailLightCondition"
              ? "Left Tail Light Condition"
              : data?.name === "rightTaillightCondition"
              ? "Right Tail Light Condition"
              : data?.name === "leftTaillightCondition"
              ? "Left Tail Light Condition"
              : data?.name === "frontRightTyre"
              ? "Front Right Tyre"
              : data?.name === "frontLeftTyre"
              ? "Front Left Tyre"
              : data?.name === "rearRightTyre"
              ? "Rear Right Tyre"
              : data?.name === "rearLeftTyre"
              ? "Rear Left Tyre"
              : data?.name === "wheelsCaps"
              ? "Wheels Caps"
              : data?.name === "frontRightTyreBrand"
              ? "Front Right Tyre Brand"
              : data?.name === "rearLeftTyreBrand"
              ? "Rear Left Tyre Brand"
              : data?.name === "rims"
              ? "Rims"
              : data?.name === "tyreCondition"
              ? "Tyre Condition"
              : data?.name === "tyrePressure"
              ? "Tyre Pressure"
              : data?.name === "tyreWear"
              ? "Tyre Wear"
              : data?.name === "rearRightTyreBrand"
              ? "Rear Right Tyre Brand"
              : data?.name === "tyreSize"
              ? "Tyre Size"
              : data?.name === "frontLeftTyreBrand"
              ? "Front Left Tyre Brand"
              : data?.name}
          </div>

          {/* Button Section */}

          <>
            {data?.data?.image?.url && (
              <div
                style={{
                  backgroundColor: "#f9f9f9",
                  fontSize: "14px",
                  fontWeight: "bold",
                  paddingBottom: window.innerWidth <= 768 ? "8px" : "15px",
                  color: "#333",
                  display: "flex",
                  minHeight: window.innerWidth <= 768 ? "35px" : "45px",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <button
                  onClick={openModal}
                  style={{
                    backgroundColor: "var(--primary-color)",
                    color: "var(--black-color)",
                    border: "none",
                    borderRadius: "20px",
                    padding: isMobile ? "4px" : "8px 16px",
                    cursor: "pointer",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "8px",
                    fontSize: isMobile ? "10px" : "14px",
                    fontWeight: "500",
                    width: "auto",
                    minWidth: "120px",
                  }}
                >
                  <img
                    src="/assets/icons/viewIcon.png"
                    width={isMobile ? "12px" : "16px"}
                    alt="viewIcon"
                  />
                  View Image
                </button>
              </div>
            )}
          </>
        </div>

        {/* Status Section */}
        <div
          style={{
            width: isMobile ? "40%" : "100%",
            height: isMobile ? "100%" : "35px",
            backgroundColor: !data?.data?.percentage
              ? "var(--green-color)"
              : data?.data?.percentage > 66
              ? "var(--green-color)"
              : data?.data?.percentage >= 34 && data?.data?.percentage <= 66
              ? "var(--orange-color)"
              : data?.data?.percentage <= 33
              ? "var(--red-color)"
              : "var(--green-color)",
            fontSize: isMobile? "12px":"14px",
            fontWeight: "500",
            color: "var(--black-color)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {index === 0
            ? data?.data?.value === true
              ? "Accidented"
              : "Non-Accidented"
            : index === 1 ||
              index === 2 ||
              index === 3 ||
              index === 4 ||
              index === 5 ||
              index === 6 ||
              index === 7 ||
              index === 8
            ? data?.data?.value
            : null}
        </div>

        {/* Modal */}
        {isModalOpen && (
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
              src={data?.data?.image?.url}
              alt={data?.name}
              style={{
                maxWidth: "95%",
                maxHeight: "95vh",
                width: "100%",
                objectFit: "contain",
                WebkitAnimationName: "zoom",
                WebkitAnimationDuration: "0.6s",
                animationName: "zoom",
                animationDuration: "0.6s",
              }}
            />
          </div>
        )}
      </div>
    </>
  );
};

export default PartStateBox;
