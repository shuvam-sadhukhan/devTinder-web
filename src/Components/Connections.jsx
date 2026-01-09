import axios from 'axios'
import React, {  useEffect } from 'react'
import { BASE_URL } from '../Utils/constants'
import { useDispatch, useSelector } from 'react-redux'
import { addConnections } from '../Utils/connectionSlice'
import ConnectionPage from './ConnectionPage'

const Connections = () => {

  const dispatch=useDispatch();
  const connections=useSelector((store)=>store.connections.view);
  const btn=['Remove','Block'];

    const fetchApi=async()=>{
        try{
        const res=await axios.get(BASE_URL+'/user/connections',{withCredentials:true})
        console.log(res.data.data);
        dispatch(addConnections(res.data.data));
        }catch(e){
            console.log(e);
        }

    }


    useEffect(()=>{
      fetchApi();
    },[])


    if(!connections) return;
    if(connections.length===0) return <h1>No connections found</h1>
  return (
   <>
   
   <div className=' text-center bg-[#FBE580] min-h-screen opacity-70 '>
    <h2 className='font-bold text-xl md:text-3xl md:py-4'>Connections</h2> 
    <div className='md:w-[550px] h-auto  rounded-2xl md:mx-auto md:my-6 md:p-2 bg-[#FFFDE1] shadow-xl/30 
       w-[300px] p-1 m-6 mx-auto'>
    {connections.map((e)=>{
      return  <ConnectionPage key={e._id} data={e}  value={btn}/>
    })}
    </div>
   </div>
   
   </>
  )
}

export default Connections