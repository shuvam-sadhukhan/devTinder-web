import axios from 'axios';
import React from 'react'
import { BASE_URL } from '../Utils/constants';
import { useDispatch } from 'react-redux';
import { removeRequest } from '../Utils/requestSlice';

const RequestPage = ({data,id}) => {

    const {_id,firstName,lastName,photoUrl,about,age}=data;
    const dispatch=useDispatch();
    

    const handleReviewRequest=async(status,id)=>{
        try{
            const res=axios.post(BASE_URL+'/request/review/'+status+'/'+id,{},{withCredentials:true})
            console.log(res);
            dispatch(removeRequest(id));


        }catch(e){
            console.log(e);
        }

    }
  return (
   <>
   <div className=' flex md:flex-row justify-evenly  items-center  py-2 px-4
         flex-col gap-2   '>
        <img src={photoUrl} alt=""  className='md:w-[100px] rounded-full w-[70px] basis-4xs '/>
        <h2 className='font-bold text-xl md:text-xl md:px-4 md:border-r-2 md:basis-3xs 
            '>{firstName}&nbsp;{lastName}</h2>
        <div className='flex justify-between md:px-4 gap-2 md:basis-3xs '>
          
          <button className="btn btn-primary rounded-2xl " onClick={()=>handleReviewRequest("accepted",id)}>Accept</button>
          <button className="btn btn-error rounded-2xl" onClick={()=>handleReviewRequest("rejected",id)}>Ignore</button>

          
    

        </div>
     
  
      </div>
      <hr></hr>
   </>
  )
}

export default RequestPage