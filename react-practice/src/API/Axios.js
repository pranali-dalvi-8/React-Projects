import axios from 'axios';
import React, { useEffect  , useState} from 'react'


const Axios = () => {
    const [data,setData]=useState(null);
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/todos')
        .then((response)=>setData(response.data))
    })
  return (
    <div>

        {data && data.map((item)=>{
            return <p key={item.id}>{item.id} - {item.title}</p>;
        })}
    </div>
  )
}

export default Axios
