const Input = (props) => {
  const { type, className, label, placeholder } = props;

  return (
    <div className='mb-2'>
      {label ? <label className='form-label'>{label}</label> : ''}
      <input className={className} type={type} placeholder={placeholder} />
    </div>
  );
};

export default Input;
