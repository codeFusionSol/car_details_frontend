import "./CommentsDisclaimer.css";
const CommentsDisclaimer = ({ AllFormsData }) => {
  // console.log(AllFormsData);

  const comments = AllFormsData?.find((item) => item.name === "Comments");
  const disclaimer = AllFormsData?.find((item) => item.name === "Disclaimer");

  // console.log(comments, disclaimer);
  return (
    <div
      className="container p-md-5 p-4"
      style={{ backgroundColor: "lightgray" }}
    >
      <div className="row">
        <div className="col-12 my-4 feedback-section">
          <h5 className="mb-2 font-weight-bold">Comments</h5>
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
