import React, { useState } from "react";

function FetchGithubUser(){
    const [username , setUsername]=useState('');
    const[userData,setUserData]=useState([]);

    function getData(){
        fetch(`https://api.github.com/users/${username}/repos`)
        .then(response => response.json())
        .then(data => setUserData(data))
        .catch((error) => console.log(error))
        console.log(userData);
    }
    return(
        <div>
             <label>Username : </label> 
           <input 
           value={username}
           placeholder="Enter Github User Name " 
           onChange={(e)=>setUsername(e.target.value)} />
           <br/>
           <br/>
           <button onClick={getData}  >Fetch Repos</button>

           <div>
            <ul>
              {userData.map(repo => 
       
                <li key={repo.id}>{repo.name}</li>
           
              )}
            </ul>
            
           </div>
            
        </div>
    );
}
export default FetchGithubUser;