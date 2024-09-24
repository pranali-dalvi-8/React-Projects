import React from 'react'
import { useState } from 'react'

function UseState(){

    const [form, setState]=useState({
        username:'',
        password:''
})

const printvalues=e=>{
     e.preventDefault()
     console.log(form.username,form.password)
}

const updatevalues=e=>{
    setState({...form,[e.target.name]:[e.target.value]})
}

    return(  
        <>
          <form onClick={printvalues}>
            <label>username : </label>
            <input type='text'value={form.username} name='username' id='username' onChange={updatevalues} /><br/><br/>
            <label>password : </label>
            <input type='text' value={form.password} name='password' id='password' onChange={updatevalues}/><br/><br/>
            <input type='submit'/>

          </form>
        </>
    );
 
}

export default UseState
