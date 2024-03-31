import React, { useState } from "react";
import './Header.css';
import Counter from "./Counter";

function Header(){
    const [firststate,nextstate]=useState(false);
    const display=()=>{
        nextstate(!firststate);
    };
    return(
        <div>
            <ul className="List-items">
                <li>Home</li>
                <li>Contact</li>
                <li>User</li>
            </ul>
            <div className="comp">
                <button className="btn" onClick={display}>Toggle</button>
            </div>
            {firststate && <Counter/>}
        </div>
    )
}

export default Header