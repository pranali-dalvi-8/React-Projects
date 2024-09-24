import React from 'react'

const ForEachMap = () => {
    const arr=[1,27,88,5];
    // console.log('using forEach',arr.forEach(x=>x*x*x).sort(function(a,b){
    //     return a-b;
    // }))
    console.log('using Map',arr.map(x=>x*x*x).sort(function(a,b){
        return a-b;
    }));


    const arrObj=[
        {
            name:'peter',
            id:1,
            pass:true
        },
        {
            name:'john',
            id:2,
            pass:true
        },
        {
            name:'doe',
            id:3,
            pass:false
        }
    ]
  return (
    <div>
    <ul>
      {
        arrObj.map((data)=>(
            <li key={data.id}>
            {data.pass ? <span>{data.name} is Passed</span>:<span>{data.name} is Failed</span>}
            </li>
  ))
      }
      </ul>
    </div>
  )
}

export default ForEachMap
