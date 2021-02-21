import regex from "./Regex";

const Validator = (name, input, state) => {
  let validate = false;
  let rgx = regex();
  switch (name) {
    case "firstName":
      if (!rgx.letterOnly.test(input)) validate = true;
      break;
    case "lastName":
      if (!rgx.letterOnly.test(input)) validate = true;
      break;
    case "email":
      if (!rgx.email.test(input)) validate = true;
      break;
    case "phone":
      if (!rgx.phone.test(input)) validate = true;
      break;
    case "confirmEmail":
      if (state.email !== input) validate = true;
      break;
    case "confirmPassword":
      if (state.password !== input) validate = true;
      break;
    case "password":
      if (!rgx.numberLetterOnly.test(input)) validate = true;
      break;
    default:
      break;
  }

  return validate;
};

export default Validator;
