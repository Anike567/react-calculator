import React from 'react';
import "./Container.css";
import Button from "./Button";



function Container() {
    const buttons = [];
    
    for (let i = 0; i < 10; i++) {
        buttons.push(
            <Button attr={i}/>
        );
    }
    
    return (
        <div className="container">
            <div className="input-container">
                <input className="input"></input>
            </div>
            <div className="btn-container">
                {buttons}
                <Button attr="*"></Button>
                <Button attr="+"></Button>
                <Button attr="-"></Button>
                <Button attr="/"></Button>
                <Button attr="="></Button>
                <Button attr="AC"></Button>
            </div>
        </div>
    );
}

export default Container;
