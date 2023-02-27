const Button = (props) => {
  const { text, className, ...btnProps } = props;

  return (
    <button className={className} {...btnProps}>
      {text}
    </button>
  );
};

export default Button;
