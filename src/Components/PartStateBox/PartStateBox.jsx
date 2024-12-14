import React from "react";

const PartStateBox = () => {
  return (
    <div
      style={{
        width: "100%",
        maxWidth: "300px",
        maxHeight: "160px",
        height: "165px",
        borderRadius: "0px",
        textAlign: "center",
        overflow: "hidden",
        fontFamily: "Arial, sans-serif",
      }}
    >
      {/* Title Section */}
      <div
        style={{
          backgroundColor: "#f9f9f9",
          padding: "12px",
          fontSize: "18px",
          fontWeight: "500",
          color: "#333",
        }}
      >
        Radiator Core Support
      </div>

      {/* Button Section */}
      <div
        style={{
          backgroundColor: "#f9f9f9", 
          fontSize: "14px",
          fontWeight: "bold",
          paddingBottom: "15px",
          color: "#333",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <button
          style={{
            backgroundColor: "var(--primary-color)",
            color: "var(--black-color)", 
            border: "none",
            borderRadius: "20px",
            padding: "8px 16px",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            gap: "8px",
            fontSize: "14px",
            fontWeight: "500",
            width: "auto",
            minWidth: "120px",
          }}
        >
          <img src="/assets/icons/viewIcon.png" width="16px" alt="viewIcon" />
          View Image
        </button>
      </div>

      {/* Status Section */}
      <div
        style={{
          backgroundColor: "var(--green-color)",
          fontSize: "14px",
          height: "35px",
          fontWeight: "500",
          color: "var(--black-color)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        Non-Accidented
      </div>
    </div>
  );
};

export default PartStateBox;
