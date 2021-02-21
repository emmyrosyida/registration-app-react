const Regex = () => {
  let rgx = {
    letterOnly: /^[A-Za-z]*$/,
    numberLetterOnly: /^[A-Za-z0-9]*$/,
    phone: /^(?:\d{3}-\d{5}-\d{3})?$/,
    email: /^(?:[0-9a-zA-Z]+([0-9a-zA-Z]*[-._+])*[0-9a-zA-Z]+@[0-9a-zA-Z]+([-.][0-9a-zA-Z]+)*([0-9a-zA-Z]*[.])[a-zA-Z]{2,6})?$/,
  };
  return rgx;
};

export default Regex;
