import React, { useState } from "react";
import Button from "../commons/components/Button";
import Modal from "../commons/components/Modal";
import "./EmailValid.css";
const EmailValid = ({ email }) => {
  const [stateValid, setStateValid] = useState("");
  const [show, setShow] = useState(false);
  const listEmail = [
    "eve.holt@reqres.in",
    "hello1@gmail.com",
    "hello2@gmail.com",
    "hello3@gmail.com",
  ];

  const handleValidate = () => {
    if (listEmail.indexOf(email) !== -1) {
      setStateValid("This email exist!");
    } else {
      setStateValid("This email doesn't exists!");
    }
    setShow(true);
  };
  const listTr = [];
  listEmail.map((e) =>
    listTr.push(
      <tr>
        <td>{e}</td>
      </tr>
    )
  );

  const closeModal = () => {
    setShow(false);
  };

  let showModal;
  if (show) {
    showModal = <Modal click={closeModal} show={show} msg={stateValid}></Modal>;
  }

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Email Validator</th>
          </tr>
        </thead>
        <tbody>{listTr}</tbody>
      </table>
      {showModal}
      <Button cls="width" text="Validate" click={handleValidate}></Button>
    </div>
  );
};

export default EmailValid;
