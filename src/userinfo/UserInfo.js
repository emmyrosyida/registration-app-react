import React from "react";
import EmailValid from "./EmailValid";
import { useLocation } from "react-router-dom";
import "./UserInfo.css";
import Header from "../commons/components/Header";
import Footer from "../commons/components/Footer";

const UserInfo = () => {
  const location = useLocation();
  const val = location.state;

  let title = val.title;
  switch (val.title) {
    case "1":
      title = "Mr";
      break;
    case "2":
      title = "Mrs";
      break;
    case "3":
      title = "Prof";
      break;
    default:
      break;
  }
  return (
    <div className="container">
      <Header title={`Welcome, ${title}. ${val.firstName} `}></Header>
      <div className="container-area">
        <div className="area">
          <p className="userTitle">User Information</p>
          <p>
            <span>First Name:</span> {val.firstName}
          </p>
          <p>
            <span>Last Name: </span>
            {val.lastName}
          </p>
          <p>
            <span>Date of Birth:</span> {val.dob}
          </p>
          <p>
            <span>Email:</span> {val.email}
          </p>
          <p>
            <span>Phone Number:</span>
            {val.phone === "" ? "N/A" : val.phone}
          </p>
        </div>
        <div className="area">
          <EmailValid email={val.email}></EmailValid>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default UserInfo;
