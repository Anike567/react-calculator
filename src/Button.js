import React from 'react';
import "./Button.css";

function Button(props) {
    let color = undefined;
    if (props.attr >= '0' && props.attr <= '9') {
        color = "green";
    } else {
        color = "yellow";
    }


    const handleClick = (e) => {
        let input = document.getElementsByClassName("input")[0]
        if(e.target.innerHTML === "AC"){
            input.value="";
        }
        else if (e.target.innerHTML === '=') {
            let val = input.value;
            val = eval(val);
            input.value = val;
        }
        else {
            let val = input.value;
            val += e.target.innerHTML;
            input.value = val;
        }
    };

    return (
        <button className="btn bg-color" style={{ '--bg-color': color }} onClick={handleClick}>{props.attr}</button>
    );
}

export default Button;
