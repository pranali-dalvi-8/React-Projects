import React from 'react'

const Map = () => {

const myArray=[1,2,3,"pranali","shubham"]
const user=[
    {'id':1,'name':'pranali','age':20},
    {'id':2,'name':'divya','age':20}
]
  return (
    <div>
       {myArray.map((data)=>{
        return(
            <>
            <p>{data}</p>
            </>
        )
       })}

        {user.map((data,id)=>{
            return(
                <div key={id}>
                         {data.id}
                         {data.name}
                         {data.age}
                </div>
            )
        })}

    </div>
  )
}

export default Map;
