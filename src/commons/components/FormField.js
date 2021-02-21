const FormField = ({
  cls,
  required,
  text,
  name,
  type,
  val,
  change,
  max,
  min,
  errormsg,
  placeholder,
}) => {
  return (
    <>
      <div className={cls}>
        <label htmlFor={text}>{text}:</label>
        <input
          required={required}
          type={type}
          name={name}
          placeholder={text}
          minLength={min}
          maxLength={max}
          value={val}
          onChange={change}
        />
        {errormsg}
      </div>
    </>
  );
};

export default FormField;
