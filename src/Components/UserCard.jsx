import axios from "axios";
import { useDispatch, useSelector } from "react-redux"
import { BASE_URL } from "../Utils/constants";
import { removeFeed } from "../Utils/feedSlice";

const UserCard=({user})=>{

  // const data=useSelector((store)=>store.feed);
  const {_id,firstName,lastName,photoUrl,about,age,gender}=user;
  
  const dispatch=useDispatch();

  const handleChange=async(status,id)=>{
    try{
    const res= await axios.post(BASE_URL+'/request/send/'+status+'/'+id,{},{withCredentials:true})
    dispatch(removeFeed(id));

    }catch(e){
      console.log(e);
    }


 
  }
    return (  
        <>
        <div className="card bg-base-100 md:w-96 shadow-2xl w-72 p-2">
  <figure>
    <img src={photoUrl} alt="photo" className=" mx-2 rounded-2xl w-full h-[350px] " />
  </figure>
  <div className="card-body">
    <div className="first flex justify-between pb-2">
    <h2 className="card-title text-2xl">{firstName}&nbsp;{lastName}&nbsp;({age})</h2>
    <span className="inline">{gender}</span>
    </div>
    
    <p className="font-bold text-[14px] pb-4">{about}</p>
    <div className="card-actions justify-end">
     <button className="btn btn-info" onClick={()=>handleChange("ignore",_id)}>Ignore</button>
     <button className="btn btn-secondary" onClick={()=>handleChange("interested",_id)}>Interested</button>
    </div>
  </div>
</div>
        </>
    )
}
export default UserCard