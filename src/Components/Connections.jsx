import axios from 'axios'
import React, {  useEffect } from 'react'
import { BASE_URL } from '../Utils/constants'
import { useDispatch, useSelector } from 'react-redux'
import { addConnections } from '../Utils/connectionSlice'
import ConnectionPage from './ConnectionPage'

const Connections = () => {

  const dispatch=useDispatch();
  const connections=useSelector((store)=>store.connections.view);

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
   <div className=' text-center my-10'>
    <h1 className='font-bold text-2xl'>connections</h1> 
    <div className='w-[500px] h-auto border-2 mx-auto my-2 p-2 bg-amber-50'>
    {connections.map((e)=>{
      return  <ConnectionPage key={e._id} data={e} />
    })}
    </div>
   </div>
   </>
  )
}

export default Connections