import React, { useState } from 'react'

const FormDemo = () => {
    const [name, setName]=useState('');
    const showName=(e)=>{
       e.preventDefault();
       alert(`The Name is ${name}`)
    }
  return (
    <div>
        <form onSubmit={showName}>
             <label>Name : </label>
             <input type='text' value={name} id='name' onChange={(e)=> setName(e.target.value)}/><br/><br/>
             <input type='submit'/>
        </form>
    </div>
  )
}

export default FormDemo
