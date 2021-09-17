import React from 'react';
import './input.scss';

const Input = ({
  type,
  placeholder,
  defaultValue,
  required,
  onChange,
  value,
}) => (
  <div className="container-input">
    <input
      className="input"
      type={type}
      name=""
      id=""
      defaultValue={defaultValue}
      required={required}
      onChange={onChange}
      value={value}
    />
    <label className="label" htmlFor="usr">
      {placeholder}
    </label>
  </div>
);

export default Input;
