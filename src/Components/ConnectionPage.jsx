import React from 'react'

const ConnectionPage = ({data,value}) => {

    const {firstName,lastName,photoUrl,about,age}=data;
  return (
    <>
      <div className=' flex flex-row justify-evenly  items-center  py-2 px-4'>
        <img src={photoUrl} alt=""  className='md:w-[100px] rounded-full w-[70px] basis-4xs '/>
        <h2 className='font-bold text-sm md:text-xl px-4 border-r-2 basis-3xs '>{firstName}&nbsp;{lastName}</h2>
        <div className='flex justify-between px-2 gap-2 basis-3xs'>
          
          <button className="btn btn-primary rounded-2xl">{value[0]}</button>
          <button className="btn btn-error rounded-2xl">{value[1]}</button>

          
    

        </div>
     
  
      </div>
      <hr></hr>
    </>
  )
}

export default ConnectionPage