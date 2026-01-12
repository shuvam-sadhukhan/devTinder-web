import React, { useState } from 'react'
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { addUser } from '../Utils/userSlice';
import { BASE_URL } from '../Utils/constants';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock, faUnlock } from '@fortawesome/free-solid-svg-icons';

const Login = () => {
 

    const[firstName,setFirstName]=useState('');
    const[lastName,setLastName]=useState('');
    const [email,setEmail]=useState('shika@gmail.com');
    const [password,setPassword]=useState('Shika@123');
    const [error,setError]=useState(false);
    const [errMsg,setErrMsg]=useState(null);
    const [lock,setLock]=useState(true);
    const [toggle,setToggle]=useState(true);

    const [errToast,setErrToast]=useState(false);
    const[toast,setToast]=useState(false);
    
    const dispatch=useDispatch();
    const navigate=useNavigate();

  const handleLogin=async()=>{
    
    try{
       
        const res= await axios.post(BASE_URL+'/login',{email, password,},{withCredentials:true});
       console.log(res.data); 
       dispatch(addUser(res.data));
       navigate('/feed');
      
      //  const res=await fetch('http://localhost:3000/login',{
      //   method:"POST",
      //   headers: {
      //   "Content-Type": "application/json"
      // },
      //   body: JSON.stringify({  email,password })
      //  });
      //  const data=await res.json();
      //  console.log(data);

    }catch(e){  
        console.log(e);
        
        setError(true);
        setErrMsg(e.response.data);
        setErrToast(true);
          setTimeout(()=>{
        setErrToast(false);
       },5000);
    }

    }

    const handleSignUp=async()=>{
      try{
      const res=await axios.post(BASE_URL+'/signup',{firstName,lastName,email,password},{withCredentials:true})
      console.log("successful");
      setToast(true);
      setTimeout(()=>{  
        setToast(false);
      },5000)
     
      
      }catch(e){
        console.log(e); 
         setErrToast(true);
          setTimeout(()=>{
        setErrToast(false);
       },5000);
      }

    }

    const handleLock=()=>{
      lock==true ? setLock(false) : setLock(true)
    }
    const handleToggle=()=>{
      setToggle(!toggle);
    }
  return (
   <>
   <div className=''>
   <div className="div flex justify-center md:my-10 my-3 ">
   <div className="card card-border  w-100  mx-10 shadow-2xl shadow-[#a1a19d] ">
  <div className="card-body">
    <h2 className="card-title justify-center font-bold text-2xl">{toggle ? "Login" : "SignUp"}</h2>
   <div className="div">
   {!toggle &&(<>
  <fieldset className="fieldset">
  <legend className="fieldset-legend">FirstName</legend>
  <input type="text" className="input" value={firstName} onChange={(e)=>setFirstName(e.target.value)} placeholder="First Name" />
    
</fieldset>
 <fieldset className="fieldset">
  <legend className="fieldset-legend">LastName</legend>
  <input type="text" className="input" value={lastName} onChange={(e)=>setLastName(e.target.value)} placeholder="Last Name" />
    
</fieldset>
</>
)} 

  <fieldset className="fieldset">
  <legend className="fieldset-legend">Email Id</legend>
  <input type="text" className="input" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Email" />
    
</fieldset>
 <fieldset className="fieldset">
  <legend className="fieldset-legend">Password</legend>
  <div className='flex relative'>
  <input type={lock ? "password" : "text"} className="input" value={password} onChange={(e)=> setPassword(e.target.value)} placeholder="Password" />
  {lock ? <FontAwesomeIcon icon={faLock} className='absolute top-3 md:left-72 left-58 fa-lg' onClick={()=>handleLock()} /> :
  <FontAwesomeIcon icon={faUnlock} className='absolute top-3 md:left-72 left-58 fa-lg' onClick={()=>handleLock()} />}
  </div>
</fieldset>
   </div>
   {error &&<p className='text-red-500'>Error message: {errMsg}</p>}
    <div className="card-actions justify-center">
      <button className="btn btn-soft btn-success" onClick={toggle ? handleLogin : handleSignUp} >{toggle ? "Login" : "SignUp"}</button>
    </div>
    <div className='text-center'>
    <p className='font-bold'>{toggle ? "New user: ": "Already a user:"}
      <button className='font-black text-red-300 cursor-pointer' onClick={handleToggle}>{toggle ? "SignUp" : "Login"}</button></p>
      </div>
  </div>
</div>
</div>
 {/* toast message */}

{errToast && (<div className="toast toast-top toast-center">
  
   <div className="alert alert-success bg-red-500">
    <span>Something went wrong</span>
  </div>
</div>)}
 
</div>
<div className="toast toast-top toast-center">
 
 {toast && <div className="alert alert-success">
    <span>Registration successfull</span>
  </div>
}
</div>
   </>
  )
}

export default Login