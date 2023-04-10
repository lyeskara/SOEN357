import React from 'react';
import './Option.css'

function Option({optionName, link}) {
    return(
        <button className={"Option"} href={link} onClick={display}>
            {optionName}
        </button>
    );
}

function display() {
    alert("HELLO");
}

export default Option;