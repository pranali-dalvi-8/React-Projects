import React from 'react'
import CompTwo from './CompTwo'

const CompOne = (props) => {
  return (
    <div>
       <p>My name is {props.f_name}</p>
       <CompTwo f_name={props.f_name}/>
    </div>
  )
}

export default CompOne
