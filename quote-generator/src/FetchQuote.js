import React ,{useState , useEffect} from "react";
import axios from "axios"
function FetchQAuote(){
    const[quote,setQuote]=useState('');

    function getQuote(){
       
            axios.get('https://api.api-ninjas.com/v1/quotes?X-Api-Key=yCmbMmHNO7nmF1vVWtgwBQ==PQnZtttSdP5KxZlq')
            .then(response=>{
              console.log(response.data);
              setQuote(response.data[0])
            })
         
    }
     useEffect(()=>{
        getQuote();
    },[])
   
    return(
        <div>
           <p>Ouote : {quote.quote}</p>
           <p>Author : {quote.author}</p>

           <button onClick={getQuote}>New Quote</button>

        </div>
    );
}
export default FetchQAuote;