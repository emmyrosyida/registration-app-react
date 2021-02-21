const ErrorMessage = () => {
  let lang = {
    emailError: "Invalid email!",
    passwordLengthError: "Enter more than 8 characters!",
    passwordError: "Enter letters or numbers only!",
    nameError: "Enter letters only!",
    phoneError: "Invalid phone number!",
    confirmEmailrror: "Email is not the same!",
    confirmPasswordError: "Password is not the same!",
  };
  return lang;
};

export default ErrorMessage;
