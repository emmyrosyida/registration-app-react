import FormField from "../commons/components/FormField";
import Button from "../commons/components/Button";
import React, { useState } from "react";
import validator from "../utils/Validator";
import en from "../utils/ErrorMessage";
import Select from "../commons/components/Select";
import service from "../utils/Service";
import { useHistory } from "react-router-dom";
import "./RegForm.css";
import Header from "../commons/components/Header";
import Modal from "../commons/components/Modal";
import Footer from "../commons/components/Footer";
import Loader from "../commons/components/Loader";

const RegForm = () => {
  const errorMessage = en();
  const [show, setShow] = useState(false);
  const [msg, setMsg] = useState("");
  const [loader, setLoader] = useState(false);

  const history = useHistory();
  const field = {
    title: "Mr",
    firstName: "",
    lastName: "",
    email: "",
    dob: "",
    confirmEmail: "",
    confirmPassword: "",
    password: "",
    phoneNumber: "",
    id: "",
  };
  const [state, setState] = useState(field);
  const [errorState, setErrorState] = useState(field);

  const options = [
    { value: "1", label: "Mr" },
    { value: "2", label: "Mrs" },
    { value: "3", label: "Prof" },
  ];

  const handleChange = (e) => {
    console.log(e.target.value);
    let { name, value } = e.target;
    if (name === "phone") {
      if (value.length === 11)
        value = value.replace(/^([0-9]{3})([0-9]{5})([0-9]{3})$/, "$1-$2-$3");
      if (value.length <= 12) value = value.replace(/-/g, "");
      setState((ele) => ({ ...ele, phone: value }));
    } else {
      setState((ele) => ({ ...ele, [name]: value }));
    }

    handleError(name, value, state);

    if (name === "email" || name === "password") {
      let tempName =
        "confirm" +
        name.charAt(0).toUpperCase() +
        name.substring(1, name.length);
      handleError(tempName, state[tempName], { [name]: value });
    }
  };

  const handleError = (name, value, temp) => {
    setErrorState((ele) => ({
      ...ele,
      [name]: validator(name, value, temp),
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Object.values(errorState).some((value) => value === true))
      console.log("not submit");
    else {
      let data = [];
      setLoader(true);
      service(
        ["https://reqres.in/api/create", "https://reqres.in/api/login"],
        [
          {
            email: state.email,
          },
          {
            email: state.email,
            password: state.password,
          },
        ]
      ).subscribe((res) => {
        data.push(res);
        if (data.length === 2) {
          setLoader(false);
          if (data[1].status === 200) {
            history.push("/landing", state);
          } else {
            console.log("ERROR", data);
            setShow(true);
            setMsg(
              `The user with ${data[0].response.id} and ${data[0].response.email} cannot be logged in.`
            );
          }
        }
      });
    }
  };

  const closeModal = () => {
    setShow(false);
  };

  return (
    <>
      <Modal click={closeModal} show={show} msg={msg}></Modal>
      <Header title="Registration Form"></Header>
      <form onSubmit={handleSubmit}>
        {loader ? <Loader></Loader> : ""}
        <div className="row">
          <span className="column">
            All field marked with <span className="markred">(*)</span> is
            required.
          </span>
        </div>
        <div className="row">
          <Select
            cls="column required"
            name="title"
            text="Title"
            opt={options}
            change={handleChange}
          ></Select>
        </div>
        <div className="row">
          <FormField
            cls="column required"
            required={true}
            text="First Name"
            name="firstName"
            change={handleChange}
            errormsg={
              errorState.firstName && (
                <span className="errorMsg">{errorMessage.nameError}</span>
              )
            }
          ></FormField>
          <FormField
            cls="column required"
            required={true}
            text="Last Name"
            name="lastName"
            change={handleChange}
            errormsg={
              errorState.lastName && (
                <span className="errorMsg">{errorMessage.nameError}</span>
              )
            }
          ></FormField>
        </div>
        <div className="row">
          <FormField
            cls="column required"
            text="Date of birth"
            required={true}
            name="dob"
            type="date"
            change={handleChange}
          ></FormField>
          <FormField
            cls="column"
            text="Phone"
            val={state.phone}
            max={13}
            name="phone"
            type="tel"
            change={handleChange}
            errormsg={
              errorState.phone && (
                <span className="errorMsg">{errorMessage.phoneError}</span>
              )
            }
          ></FormField>
        </div>
        <div className="row">
          <FormField
            cls="column required"
            required={true}
            text="Email"
            name="email"
            type="email"
            change={handleChange}
            errormsg={
              errorState.email && (
                <span className="errorMsg">{errorMessage.emailError}</span>
              )
            }
          ></FormField>

          <FormField
            cls="column required"
            required={true}
            text="Confirm Email"
            name="confirmEmail"
            type="text"
            change={handleChange}
            errormsg={
              errorState.confirmEmail && (
                <span className="errorMsg">
                  {errorMessage.confirmEmailrror}
                </span>
              )
            }
          ></FormField>
        </div>

        <div className="row">
          <FormField
            cls="column required"
            required={true}
            text="Password"
            name="password"
            type="password"
            min={8}
            change={handleChange}
            errormsg={
              errorState.password && (
                <span className="errorMsg">{errorMessage.passwordError}</span>
              )
            }
          ></FormField>
          <FormField
            cls="column required"
            required={true}
            text="Confirm Password"
            name="confirmPassword"
            type="password"
            min={8}
            change={handleChange}
            errormsg={
              errorState.confirmPassword && (
                <span className="errorMsg">
                  {errorMessage.confirmPasswordError}
                </span>
              )
            }
          ></FormField>
        </div>

        <div className="row">
          <Button
            cls="column-full"
            color="primary"
            text="Submit"
            type="submit"
          ></Button>
        </div>
      </form>
      <Footer></Footer>
    </>
  );
};

export default RegForm;
