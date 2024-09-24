import React from 'react'
import { useForm } from 'react-hook-form';

const FormDemo1 = () => {
    const {register,handleSubmit}=useForm();
    const handelregistration=(data)=>console.log(data);
  return (
    <div>
      <form onSubmit={handleSubmit(handelregistration)}>
        <label>Name : </label>
        <input type='text' name='name' {...register('name')}/><br/><br/>
        <label>email : </label>
        <input type='email' name='email' {...register('email')}/><br/><br/>
        <label>Password : </label>
        <input type='password' name='password' {...register('password')}/><br/><br/>
       <button>submit</button>
      </form>
    </div>
  )
}

export default FormDemo1
