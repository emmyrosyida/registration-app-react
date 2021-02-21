import "./Footer.css";

const Button = ({ cls, click, text, type }) => {
  return (
    <>
      <button className={cls} onClick={click} type={type}>
        {text}
      </button>
    </>
  );
};

export default Button;
