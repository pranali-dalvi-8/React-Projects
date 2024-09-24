import React from 'react'
import Comp2 from './Comp2'
import { StudentInfoContext } from '../App'

const Comp1 = (props) => {
  return (
    <div>
        <h2>comp1</h2>
        <Comp2/>

       {/* <p>My name is {props.f_name}</p>
       <CompTwo f_name={props.f_name}/> */}
    </div>
  )
}

export default Comp1