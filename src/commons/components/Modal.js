import ReactModal from "react-modal";

const Modal = ({ click, show, msg }) => {
  let custom = { width: "20rem", height: "13rem", margin: "0 auto" };
  let btn = { width: "38%", margin: "auto 1rem" };
  return (
    <>
      <ReactModal style={{ content: custom }} isOpen={show} ariaHideApp={false}>
        <p style={{ margin: "2rem auto", textAlign: "center" }}>{msg}</p>
        <div style={{ marginTop: "4rem" }}>
          <button style={btn} onClick={click}>
            Cancel
          </button>
          <button style={btn} onClick={click}>
            OK
          </button>
        </div>
      </ReactModal>
    </>
  );
};

export default Modal;
