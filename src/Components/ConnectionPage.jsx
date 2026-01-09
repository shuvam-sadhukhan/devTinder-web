import React from 'react'

const ConnectionPage = ({data,value}) => {

    const {firstName,lastName,photoUrl,about,age}=data;
  return (
    <>
      <div className=' flex md:flex-row justify-evenly  items-center  py-2 px-4
         flex-col gap-2   '>
        <img src={photoUrl} alt=""  className='md:w-[100px] rounded-full w-[70px] basis-4xs '/>
        <h2 className='font-bold text-xl md:text-xl md:px-4 md:border-r-2 md:basis-3xs 
            '>{firstName}&nbsp;{lastName}</h2>
        <div className='flex justify-between md:px-4 gap-2 md:basis-3xs '>
          
          <button className="btn btn-primary rounded-2xl ">{value[0]}</button>
          <button className="btn btn-error rounded-2xl">{value[1]}</button>

          
    

        </div>
     
  
      </div>
      <hr></hr>
    </>
  )
}

export default ConnectionPage