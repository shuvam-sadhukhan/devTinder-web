import React from 'react'
import { Link } from 'react-router-dom';

const ConnectionPage = ({data}) => {

    const {_id,firstName,lastName,photoUrl,about,age}=data;
  return (
    <>
      <div className=' flex md:flex-row justify-evenly  items-center py-4  px-4 flex-col   gap-2 md:w-[700px] w-[300px] h-auto'>
        <img src={photoUrl} alt=""  className='md:w-[100px] rounded-full w-[70px] basis-4xs '/>
        <h2 className='font-bold text-xs md:text-xl md:px-4 md:border-r-2 md:basis-3xs flex-1 
            '>{firstName}&nbsp;{lastName}</h2>
        <div className='flex justify-between md:px-4 gap-2 md:basis-3xs  '>
          <Link to={'/chats/'+_id}><button className="btn btn-primary rounded-2xl  mx-5">Chat</button></Link>
          </div>
     
  
      </div>
      <hr></hr>
    </>
  )
}

export default ConnectionPage