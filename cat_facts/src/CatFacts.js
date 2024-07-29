import React, { useState } from "react";
import axios from 'axios'


function CatFacts(){
    const [fact, setFact]=useState('');
    const[imgurl,setImgUrl]=useState('');
   

    function fetchFact(){
        axios.get('https://catfact.ninja/fact')
        .then(response=>{
            console.log(response.data.fact);
            setFact(response.data.fact)
        })
       

        axios.get('https://api.thecatapi.com/v1/images/search')
        .then(response=>{
            console.log(response.data);
            setImgUrl(response.data[0])
            
        })

    }
    return(
        <div>
            <h2>Fetch a Cat Fact</h2>
            <button onClick={fetchFact}>Fetch fact</button><br/><br/>
            <p>{fact}</p>
            <div> 
            <img src={imgurl.url}/>
            </div>
            <br/>
            

           
        </div>
    );
}
export default CatFacts;