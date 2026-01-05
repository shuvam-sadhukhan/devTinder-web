import axios from 'axios'
import React, { useEffect } from 'react'
import { BASE_URL } from '../Utils/constants'

const Connections = () => {

    const fetchApi=async()=>{
        try{
        const res=await axios.get(BASE_URL+'/user/connections',{withCredentials:true})
        console.log(res.data.data);
        }catch(e){
            console.log(e);
        }

    }


    useEffect(()=>{
      fetchApi();
    },[])
  return (
   <>
   </>
  )
}

export default Connections