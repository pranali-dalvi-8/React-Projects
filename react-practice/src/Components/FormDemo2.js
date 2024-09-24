import React from 'react'
import { useForm } from 'react-hook-form'

const FormDemo2 = () => {
    const {register,handleSubmit,formState : {errors}}=useForm();
    const handelregistration=(data)=>console.log(data);
    const handelerrors=(errors)=>{}
    const registerOptions ={
        name: {required:'Name is Required'},
        email : {required:'email is required'},
        password: {required:'password is required',
     minLength:{
            value:8,
            message:'minimum 8 charcters required'
            }
        }
        
    }

  return (
    <div>
        <form onSubmit={handleSubmit(handelregistration,handelerrors)}>
            <label>Name : </label>
            <input type='text' name='name' {...register('name',registerOptions.name)}/>
            <small>{errors?.name && errors.name.message}</small><br/><br/>
            <label>Email : </label>
            <input type='email' name='email' {...register('email',registerOptions.email)}/>
            <small>{errors?.email && errors.email.message}</small><br/><br/>
            <label>Password : </label>
            <input type='password' name='password' {...register('password',registerOptions.password)}/>
            <small>{errors?.password && errors.password.message}</small><br/><br/>
            <button>submit</button>
        </form>
    </div>
  )
}

export default FormDemo2
