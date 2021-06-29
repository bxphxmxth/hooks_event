import React from 'react';

let InputChange = ({ text, setVal }) => {
    let changeTxt = (e) => {
        if (e.key === 'Enter') {
            text = e.target.value
            setVal({text});
        };
    };

    return (
        <div>
            <h1>Exo 2</h1>
            <h3>{text}</h3>
            <input onKeyPress={changeTxt} type="text" />
        </div>
    );
};

export default InputChange;