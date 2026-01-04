import React, { useState } from 'react'
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { addUser } from '../Utils/userSlice';
import { BASE_URL } from '../Utils/constants';
import { useNavigate } from 'react-router-dom';

const Login = () => {

    const [email,setEmail]=useState('shika@gmail.com');
    const [password,setPassword]=useState('Shika@123');
    const [error,setError]=useState(false);
    const [errMsg,setErrMsg]=useState(null);
    
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
    }

    }
  return (
   <>
   
   <div className="div flex justify-center my-10">
   <div className="card card-border bg-base-200 w-100">
  <div className="card-body">
    <h2 className="card-title justify-center">Login</h2>
   <div className="div">
  <fieldset className="fieldset">
  <legend className="fieldset-legend">Email Id</legend>
  <input type="text" className="input" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Email" />
    
</fieldset>
 <fieldset className="fieldset">
  <legend className="fieldset-legend">Password</legend>
  <input type="password" className="input" value={password} onChange={(e)=> setPassword(e.target.value)} placeholder="Password" />
  
</fieldset>
   </div>
   {error &&<p className='text-red-500'>Error message: {errMsg}</p>}
    <div className="card-actions justify-center">
      <button className="btn btn-soft btn-success" onClick={handleLogin}>Login</button>
    </div>
  </div>
</div>
</div>

   </>
  )
}

export default Login