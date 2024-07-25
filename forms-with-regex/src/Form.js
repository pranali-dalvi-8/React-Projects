import React from "react";
import { useState } from "react";

function Form (){
    const[email,setEmail]=useState("");
    const[emailError,setEmailError]=useState("");
    const[password,setPassword]=useState('');
    const[phone,setPhone]=useState('');
    const[phoneError,setPhoneError]=useState('');
    // const phoneRegex=/^[0-9]{10}$/;
    const phoneRegex=/^(\+\d{1,3}[- ]?)?\d{10}$/;
    const emailRegex= /.+@.+\..+/;
    
    function handelSubmit(e){
        e.preventDefault();
        if(!validateEmail(email)){
            setEmailError('Invalid Email , plese enter valid email address');
            console.log('Invalid Email');
        }
        else{
            setEmailError(' ');
            console.log('valid '+email);
        }
        
        console.log(password);



        if(!validatePhone(phone)){
            setPhoneError('Invalid Phone , plese enter valid phone number');
            console.log('Invalid Phone Number');
        }
        else{
            setPhoneError(' ');
            console.log('Valid Phone '+phone)
        }
    }

    const validatePhone=(phone)=>phoneRegex.test(phone);
    const  validateEmail=(email)=>emailRegex.test(email)
    return(
        <div>
            <form onSubmit={handelSubmit}>
                <h1>Personal Information</h1>
                <label>Name : </label>
                <input  placeholder="Enter your name" />
                <br/>
                <label >Email : </label>
                <input 
                onChange={(e)=>setEmail(e.target.value)}
                type="email" 
                placeholder="Enter your Email" 
                required/>
                
                <br/>
                <div className="Error">{emailError}</div>
                <label>Password : </label>
                <input 
                onChange={(e)=>setPassword(e.target.value)}
                type="password" 
                placeholder="Enter your Password" 
                required/>
                <br/>
                <label>Phone : </label>
                <input
                onChange={(e)=>setPhone(e.target.value)} 
                placeholder="Enter your Phone"/>
                <div className="Error">{phoneError}</div>
                <br/><br/>
                
                <button type="submit"  >Submit</button>
            </form>
        </div>
    );
}
export default Form;