import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { createSocket } from '../Utils/socket';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { BASE_URL } from '../Utils/constants';

const Chats = () => {
    const {userId}=useParams();
    console.log(userId);
    const user=useSelector((store)=>store.user);
    const loggedInUser=user?._id;
    const [msg,setMsg]=useState('');
    const [arr,setArr]=useState([]);

    const handleSendMsg=()=>{ 
       const socket=createSocket();
      socket.emit("sendMessage",{firstName:user.firstName,loggedInUser,userId, text:msg});
      setMsg('');
    }

    const fetchchatMessages=async(id)=>{
      const res=await axios.get(BASE_URL+'/chat/'+id,{withCredentials:true});
      console.log(res.data.messages);
      const chatMessage=res.data.messages.map((e)=>{
        return {firstName:e?.senderId?.firstName,text:e?.text}
      })

      setArr(chatMessage);


    }

   


    useEffect(()=>{
      if(!loggedInUser) return;
     const socket=createSocket();
     socket.emit("joinChat",{firstName:user.firstName,loggedInUser,userId});

     socket.on("message recieved",({firstName,text})=>{
      console.log(firstName +":"+text);
      setArr((arr)=>[...arr,{firstName,text}]);
     })
     return ()=>{
      socket.disconnect();
     }
    },[loggedInUser,userId])

     useEffect(()=>{
    fetchchatMessages(userId);
    },[])
  return (
    <>
    <div className='w-3/4 mx-auto border border-gray-600 m-5 h-[70vh] flex flex-col'>
    <p className='p-5  border border-gray-400 md:text-2xl font-bold text-xl' >Chat</p>
    <div className='flex-1 overflow-scroll p-5'>
        {/* chat message */}
       {arr.map((e,index)=>{
        return (
        <div key={index} className={"chat " + (user?.firstName===e.firstName ? "chat-end" : "chat-start")}>
  
      <div className="chat-header">
        {e.firstName}
    <time className="text-xs opacity-50">12:45</time>
  </div>
  <div className="chat-bubble">{e.text}</div>
  {/* <div className="chat-footer opacity-50">Delivered</div> */}
</div>

);
})}
    </div>
    <div className='p-5 borer-t border border-gray-600 flex items-center gap-2'>
        <input value={msg} onChange={(e)=>setMsg(e.target.value)}
        className='flex-1 border border-gray-500  rounded-xl p-1 h-10' placeholder='Send Message'/>
        <button className='btn btn-secondary rounded-2xl' onClick={handleSendMsg}>Send</button>
    </div>

    </div>
    </>

  )
}

export default Chats