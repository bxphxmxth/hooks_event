
import React from 'react';

let ClickAlert = () => {
    let alertOnClick = () => {
        alert(`Tu as cliqué sur le button.`)
    };

    return (
        <div>
            <h1>Exo 5</h1>
            <button onClick={alertOnClick}>Alert on Click</button>
        </div>
    );
};

export default ClickAlert;