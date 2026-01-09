import axios from 'axios'
import React, { useEffect } from 'react'
import { BASE_URL } from '../Utils/constants'
import { useDispatch, useSelector } from 'react-redux'
import { addRequest } from '../Utils/requestSlice'
import ConnectionPage from './ConnectionPage'

const Requests = () => {
    const dispatch=useDispatch();
    const requests=useSelector((store)=>store.requests.req);
    const btn=['Accept','Ignore'];

    const fetchRequest=async()=>{
        try{
        const res=await axios.get(BASE_URL+'/user/requests/received',{withCredentials:true})
        console.log(res.data.data);
        dispatch(addRequest(res.data.data));

        }catch(e){
        console.log(e);
        }


    }

useEffect(()=>{
    fetchRequest();
},[])

if(!requests) return;
if(requests.length===0) return <h1>No pending request there</h1>

  return (
   <>
     <div className=' text-center bg-[#FBE580] min-h-screen opacity-70 '>
    <h2 className='font-bold text-xl md:text-3xl md:py-4'>Requests</h2> 
    <div className='md:w-[550px] h-auto  rounded-2xl mx-auto md:my-6 md:p-2 bg-[#FFFDE1] shadow-xl/30 
    w-[300px] p-1 my-4 mx-4'>
    {requests.map((e)=>{
      return  <ConnectionPage key={e._id} data={e.fromUserId} value={btn} />
    })}
    </div>
   </div>
   </>
  )
}

export default Requests