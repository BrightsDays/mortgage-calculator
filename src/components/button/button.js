import React from 'react';
import "./button.sass";

const Button = ({name, action}) => {
    return (
        <button className="mortgage-button" onClick={e => {
            e.preventDefault();
            action();
        }}>{name}</button>
    );
};

export default Button;