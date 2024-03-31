import React from "react";
// import '../index.css';

var i=0
function Counter(){
    return(
        <>
            <div className="con-par">
                <div className="Counter"> 
                <h1>The count value is {i} <button>+</button></h1>
                </div>
            </div>
        </>
        
        
    )
}

export default Counter