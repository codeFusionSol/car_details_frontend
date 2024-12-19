import "./CommentsDisclaimer.css";

const CommentsDisclaimer = ({ AllFormsData }) => {
  const comments = AllFormsData?.find((item) => item.name === "Comments");
  const disclaimer = AllFormsData?.find((item) => item.name === "Disclaimer");

  return (
    <div className="container p-md-5 p-4">
      <div className="row">
        <div className="col-12 my-4 feedback-section">
          <h5 className="mb-2">Comments</h5>
          <p>{comments?.data.comments || "N/A"}</p>
        </div>
        <div className="col-12 my-4 feedback-section">
          <h5 className="mb-2">Disclaimer</h5>
          <p>{disclaimer?.data.disclaimer || "N/A"}</p>
        </div>
      </div>
    </div>
  );
};

export default CommentsDisclaimer;
