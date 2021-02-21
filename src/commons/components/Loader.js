import React from "react";
import ReactLoading from "react-loading";

const loaderStyle = {
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  backgroundColor: "#FFF",
  padding: "20px",
  borderRadius: "5rem",
  zIndex: 1000,
};

const overlay = {
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: "rgba(0, 0, 0, .7)",
  zIndex: 1000,
};

export default function Loader() {
  return (
    <>
      <div style={overlay} />
      <div style={loaderStyle}>
        <ReactLoading type="bubbles" color="#467a7a" />
      </div>
    </>
  );
}
