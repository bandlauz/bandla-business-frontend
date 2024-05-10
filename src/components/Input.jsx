import React, { useEffect, useRef, useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import './css/Input.css';

const Input = React.forwardRef(
  ({ label, value: iValue, areaProps, ...props }, ref) => {
    const inputRef = useRef(null);
    const [value, setValue] = useState(iValue === undefined ? '' : iValue);
    const [labelActive, setLabelActive] = useState(false);
    const [showPass, setShowPass] = useState(false);

    useEffect(() => {
      if (!value) return setLabelActive(false);
      if (!labelActive) setLabelActive(true);
    }, [value, labelActive]);

    function handleInputChange() {
      setValue(() => inputRef.current.value);

      inputRef.current.classList.remove('error');
    }

    function setInputRef(input) {
      inputRef.current = input;
      if (typeof ref === 'function') ref(input);
      else if (ref) ref.current = input;
    }

    function handleClick() {
      inputRef.current.focus();
      if (props.type === 'text') {
        setValue('');
        return;
      }
      if (props.type === 'password') {
        setShowPass((cur) => !cur);
        inputRef.current.type = showPass ? 'text' : 'password';
        return;
      }
    }

    return (
      <div
        {...areaProps}
        className={`input_area ${areaProps?.className || ''}`}
      >
        <label className={labelActive ? 'active' : ''}>{label}</label>
        <input
          {...props}
          value={value}
          ref={(input) => setInputRef(input)}
          onChange={handleInputChange}
        />
        <button className="fz_small df_ce" onClick={handleClick}>
          {props.type === 'password' &&
            (showPass ? <VisibilityIcon /> : <VisibilityOffIcon />)}
          {props.type === 'text' && <CloseIcon />}
        </button>
      </div>
    );
  }
);

export default Input;
