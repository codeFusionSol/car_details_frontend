import "./CommentsDisclaimer.css";

const CommentsDisclaimer = ({ AllFormsData }) => {
  const comments = AllFormsData?.find((item) => item.name === "Comments");
  const disclaimer = AllFormsData?.find((item) => item.name === "Disclaimer");

  return (
    <div className="comments-disclaimer-container">
      <div className="comments-disclaimer-card">
        <div className="comments-section">
          <div className="comments-heading">
            <h5 className="comments-title">Comments</h5>
          </div>
          <div className="comments-value">
            <p className="comments-content">
              {comments?.data.comments || "N/A"}
            </p>
          </div>
        </div>
      </div>
      <div className="comments-disclaimer-card">
        <div className="disclaimer-section">
          <div className="disclaimer-heading">
            <h5 className="disclaimer-title">Disclaimer</h5>
          </div>
          <div className="disclaimer-value">
            <p className="disclaimer-content">
              {disclaimer?.data.disclaimer || "N/A"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommentsDisclaimer;
