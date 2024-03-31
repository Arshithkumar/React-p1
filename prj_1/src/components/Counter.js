import React, { useState } from "react";
// import '../index.css';

function Counter(){
    var i=0;
    const [currentstate,updatestate]=useState(i);
    const handleinc=()=>{
        updatestate(currentstate+1);
    };
    const handledec=()=>{
        updatestate(currentstate-1);
    };
    return(
        <>
            <div className="con-par">
                <div className="Counter"> 
                <h1>The count value is {currentstate} <button onClick={handleinc}>+</button><button onClick={handledec}>-</button></h1>
                {/* <h1>The count value is {currentstate}</h1> */}
                </div>
            </div>
        </>
        
        
    )
}

export default Counter;