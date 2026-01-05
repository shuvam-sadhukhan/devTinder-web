import axios from 'axios'
import React, { useEffect } from 'react'
import { BASE_URL } from '../Utils/constants'
import { useDispatch, useSelector } from 'react-redux'
import { addFeed } from '../Utils/feedSlice'
import UserCard from './UserCard'

const Feed = () => {  

  const dispatch=useDispatch();
  const selector=useSelector((store)=>store.feed);

  const feedApi=async()=>{
    if(selector) return;
    try{
    const res= await axios.get(BASE_URL+'/feed',{withCredentials:true});
    console.log(res.data);
    dispatch(addFeed(res.data));

    }catch(e){
      console.log(e);
    }


  }

  useEffect(()=>{
    feedApi();
  },[])

  
  return (
   <div className='flex justify-center my-10'>
   {/* { selector && <UserCard value={selector[0]} />} */}
   {selector && <UserCard user={selector}/>}
    </div>
   
  )
}

export default Feed