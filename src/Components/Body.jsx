import React, { useEffect } from 'react'
import Navbar from './Navbar'
import { Outlet, useNavigate } from 'react-router-dom'
import Footer from './Footer'
import axios from 'axios'
import { BASE_URL } from '../Utils/constants'
import { useDispatch, useSelector } from 'react-redux'
import { addUser } from '../Utils/userSlice'

const Body = () => {
  const dispatch=useDispatch();
  const navigate=useNavigate();
 const selector=useSelector((store)=>store.user);


const fetchUser=async()=>{
  if(selector) return;
  try{
  const res= await axios.get(BASE_URL+'/profile/view',{withCredentials:true});
  dispatch(addUser(res.data));
  }catch(e){
    if(e.status===401){
    navigate('/login');
    }
   
    console.log(e);
  }


}


  useEffect(()=>{
     fetchUser();
  },[])
  return (
    <>
    <Navbar />
    <Outlet />
    <Footer />
    </>
  )
}

export default Body