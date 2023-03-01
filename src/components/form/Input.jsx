const Input = (props) => {
  const { value, name, onChange, type, className, label, placeholder } = props;

  return (
    <div className='mb-2'>
      {label ? <label htmlFor={name} className='form-label'>{label}</label> : ''}
      <input
        id={name}
        onChange={onChange}
        name={name}
        value={value}
        className={className}
        type={type}
        placeholder={placeholder}
      />
    </div>
  );
};

export default Input;
