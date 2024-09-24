import React from 'react'
import { useParams, useSearchParams } from 'react-router-dom'

const Student1 = () => {
    const params=useParams();
    const {name}=params;


  return (
    <div>
      <h1>This is sudent {name}</h1>
    </div>
  )
}

export default Student1
