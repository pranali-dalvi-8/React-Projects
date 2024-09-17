import React, {useState} from "react";



function State1(){
    
    const[count , setCount]=useState(0)
    return(
        <>
        <p>Clicked : {count}</p>
        <button onClick={()=>setCount(count+1)}>increase</button>
        <button onClick={()=>setCount(0)}>reset</button>
        </>
    )
}
export default State1;