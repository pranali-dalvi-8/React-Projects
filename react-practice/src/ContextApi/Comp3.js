import React from 'react'
import { StudentInfoContext } from '../App'

const Comp3 = (props) => {
  return (
    <div>
     <StudentInfoContext.Consumer>
        {(getf_name)=>{
            return <h3>My name is {getf_name}</h3>
        }}
     </StudentInfoContext.Consumer>
      
    </div>
  )
}

export default Comp3
