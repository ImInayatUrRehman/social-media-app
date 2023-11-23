const LoadingSpinner = () => {
  return (
    <div className="d-flex justify-content-center spinner">
      <div
        className="spinner-border"
        role="status"
        style={{ width: "2rem", height: "2rem" }}
      ></div>
    </div>
  );
};

export default LoadingSpinner;
