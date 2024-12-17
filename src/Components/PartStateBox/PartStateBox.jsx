import React, { useState } from "react";

const PartStateBox = ({ data, index }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div
      style={{
        width: "100%",
        maxWidth: "300px",
        minHeight: "160px",
        maxHeight: "160px",
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
        {data?.name}
      </div>

      {/* Button Section */}

      <>
        <div
          style={{
            backgroundColor: "#f9f9f9",
            fontSize: "14px",
            fontWeight: "bold",
            paddingBottom: "15px",
            color: "#333",
            display: "flex",
            minHeight: "45px",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {data?.data?.image?.url && (
            <button
              onClick={openModal}
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
              <img
                src="/assets/icons/viewIcon.png"
                width="16px"
                alt="viewIcon"
              />
              View Image
            </button>
          )}
        </div>
      </>

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
  );
};

export default PartStateBox;
