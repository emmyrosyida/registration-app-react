const Select = ({ text, name, opt, cls, change }) => {
  let listOption = [];
  opt.map((e) =>
    listOption.push(
      <option key={e.value} value={e.value}>
        {e.label}
      </option>
    )
  );

  return (
    <>
      <div className={cls}>
        <label>{text}:</label>
        <select onChange={change} htmlFor={name} name={name}>
          {listOption}
        </select>
      </div>
    </>
  );
};

export default Select;
