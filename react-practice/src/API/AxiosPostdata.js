import axios from 'axios';
import React, { useEffect, useState } from 'react'

const AxiosPostdata = () => {
    const [postdata, setPostdata]=useState(null);
    const baseurl='https://jsonplaceholder.typicode.com/todos'
    useEffect(()=>{
       axios.get(baseurl).then((response)=>setPostdata(response.data)) 

    },[])
    function createPost(){
      axios.post(baseurl,{
        title:'hello student',
        body:'this is tutorial'
      }).then((response)=>{setPostdata(console.log(response.data))})
    }
    if (!postdata) return "nothing";
  return (
    
    <div>
       <ul>
        { postdata.map((item)=>{
            return <li key={item.id}> {item.title}</li>
        })}
       </ul>
       <button onClick={createPost}>Submit</button>
    </div>
  )
}

export default AxiosPostdata


// import axios from 'axios';
// import React, { useEffect, useState } from 'react';

// const AxiosPostdata = () => {
//     const [postdata, setPostdata] = useState([]);
//     const baseurl = 'https://jsonplaceholder.typicode.com/todos';

//     useEffect(() => {
//         axios.get(baseurl)
//             .then((response) => setPostdata(response.data))
//             .catch((error) => console.log(error));  // Handle any error
//     }, []);

//     function createPost() {
//         axios.post(baseurl, {
//             title: 'hello student',
//             body: 'this is tutorial'
//         })
//         .then((response) => {
//             console.log(response.data);  // Log the response for debugging
//             setPostdata([...postdata, response.data]);  // Update postdata by adding the new post
//         })
//         .catch((error) => console.log(error));  // Handle any error
//     }

//     if (postdata.length === 0) return "Nothing to display";

//     return (
//         <div>
//             <ul>
//                 {postdata.map((item) => (
//                     <li key={item.id}>
//                         <strong>{item.title}</strong>
//                         <p>{item.body}</p>
//                     </li>
//                 ))}
//             </ul>
//             <button onClick={createPost}>Submit</button>
//         </div>
//     );
// };

// export default AxiosPostdata;

