import React from 'react';
import './anchors.sass';

const Anchors = ({ onClick }) => {
    const anchor = (value) => {
        onClick(value);
    };

    const listItems = ['10', '15', '20', '25', '30'].map((number) =>
        <input className={`mortgage-anchors__anchor mortgage-anchors__anchor--${number}`}
               type="radio"
               name="anchor"
               value={number}
               key={number}
               onChange={e => anchor(e.target.value)}/>
    );

    return (
        <div className="mortgage-anchors">
            {listItems}
        </div>
    );
}

export default Anchors;