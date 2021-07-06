import React from 'react';
import './input.sass';
import validate from "../../helpers/validate";

const Input = ({ classList, label, placeholder, value, validateNum, action }) => {
    return (
        <div className={`mortgage-input ${classList}`}>
            <label>{label}</label>
            <input onChange={e => {
                validate(e.target, validateNum);
                action(e.target.value);
            }}
                   placeholder={placeholder}
                   value={value}/>
        </div>
    );
}

export default Input;