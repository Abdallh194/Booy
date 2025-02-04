import React from "react";
import { Spinner } from "react-bootstrap";

const Loading = () => {
  return (
    <div className="d-flex justify-content-center align-items-center h-100">
      <Spinner animation="grow" variant="warning" /> Loading ...
    </div>
  );
};

export default Loading;
