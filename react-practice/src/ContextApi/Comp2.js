import React from 'react'
import Comp3 from './Comp3'
import { StudentInfoContext } from '../App'

const Comp2 = (props) => {
  return (
    <div>
        <h2>Comp2</h2>
        <Comp3/>
      {/* <CompThree f_name={props.f_name}/> */}
    </div>
  )
}

export default Comp2