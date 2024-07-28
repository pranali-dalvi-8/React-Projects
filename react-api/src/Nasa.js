import React, { useState } from "react";

function Nasa(){
    const[nasaData, setNasaData]=useState([]);

    function getData(){
        fetch(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&count=5`)
        .then(response=> response.json())
        .then(data => setNasaData(data))
        .catch((error)=>console.log(error))
        console.log(nasaData);
    }
    
    return(
        <div>
          <h1>Nasa Picture Of The Day</h1>
          <button onClick={getData}>Get Image</button><br/>
          <br/>
           <div>
      
              {nasaData.map(data => 
       
                <img src={data.url}></img>
           
              )}
              </div>
          
        </div>
        
    );
}
export default Nasa;


