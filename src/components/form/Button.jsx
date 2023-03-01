const Button = (props) => {
  const { type, onClick, text, className, ...btnProps } = props;

  return (
    <button type={type} onClick={onClick} className={className} {...btnProps}>
      {text}
    </button>
  );
};

export default Button;
