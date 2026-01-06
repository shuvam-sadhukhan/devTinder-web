import React from 'react'

const ConnectionPage = ({data}) => {

    const {firstName,lastName,photoUrl,about}=data;
  return (
    <>
      <div className=' flex justify-around w-[80%] py-2'>
        <img src={photoUrl} alt=""  className='w-[100px] rounded-full'/>
        <h2 className='font-bold'>{firstName}&nbsp;{lastName}<p>{about}</p></h2>
     
  
      </div>
      <hr></hr>
    </>
  )
}

export default ConnectionPage