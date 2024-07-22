import React, { useContext } from "react";
import { ThemeContext } from "./Context";

function GrandChild(){
    const theme=useContext(ThemeContext);
   return(
    <div style={{background:theme==='dark' ? "#333"  :  "#fff" , color :theme === 'dark' ? "#fff"  :  "#333" }}>

        <p>The current theme is {theme}</p>
      
    </div>
   );
}

export default GrandChild;