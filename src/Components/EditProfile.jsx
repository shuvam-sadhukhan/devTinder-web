import axios from 'axios';
import React, { useState } from 'react'
import { BASE_URL } from '../Utils/constants';
import { useDispatch } from 'react-redux';
import { addUser } from '../Utils/userSlice';

const EditProfile = ({user}) => {

  const[firstName,setFirstName]=useState(user.firstName);
  const[lastName,setLastName]=useState(user.lastName);
  const[age,setAge]=useState(user.age);
  const[gender,setGender]=useState(user.gender);
  const[about,setAbout]=useState(user.about);
  const[photoUrl,setPhotoUrl]=useState(user.photoUrl);
  const [toast,setToast]=useState(false);
  const dispatch=useDispatch();
  

  const handleEdit=async()=>{
    try{
         const res=await axios.patch(BASE_URL+'/profile/edit',{
            firstName,lastName,age,gender,about,photoUrl},{withCredentials:true});
            dispatch(addUser(res.data.data));
           setToast(true);
           setTimeout(()=>{
            setToast(false);
           },5000);
           
         }catch(e){
            console.log(e);
         }
  }
  return (
    <>
    <div className='sm:flex sm:justify-center   flex-1 mx-4 '>
     <div className=" flex items-center justify-center  border-e-white px-4 py-4 my-4">
      <div className="w-xl h-auto  bg-white rounded-xl shadow-lg p-6">
        <h2 className="text-xl font-bold text-center text-gray-800 mb-1">
          Edit Profile
        </h2> 

        <form  className="space-y-4" onSubmit={(e)=>e.preventDefault()}>
         
          <div>
            <label className="block text-sm font-medium text-gray-700">
              FirstName
            </label>
            <input
              type="text" value={firstName} onChange={(e)=>setFirstName(e.target.value)} placeholder="Enter your first name"
              className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
          </div>
           <div>
            <label className="block text-sm font-medium text-gray-700">
              LastName
            </label>
            <input
              type="text" value={lastName} onChange={(e)=>setLastName(e.target.value)} placeholder="Enter your last name"
              className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
          </div>
           <div>
            <label className="block text-sm font-medium text-gray-700">
              Age
            </label>
            <input
              type="text" value={age} onChange={(e)=>setAge(e.target.value)} placeholder="Age"
              className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
           <div>
            <label className="block text-sm font-medium text-gray-700">
              Gender
            </label>
            <input
              type="text" value={gender} onChange={(e)=>setGender(e.target.value)} placeholder="gender"
              className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
           <div>
            <label className="block text-sm font-medium text-gray-700">
              About
            </label>
            <input
              type="text" value={about} onChange={(e)=>setAbout(e.target.value)} placeholder="About"
              className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
           <div>
            <label className="block text-sm font-medium text-gray-700">
              PhotoUrl
            </label>
            <input type="text" value={photoUrl} onChange={(e)=>setPhotoUrl(e.target.value)} placeholder="PhotoUrl"
            className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            
            />
          </div>
         {/* <button className="btn btn-dash btn-info  border-4 ">Edit</button> */}
         <button className="btn btn-soft btn-secondary border-2 w-full text-lg" onClick={handleEdit}>Edit </button>
        </form>
      </div>
    </div>  
   { toast &&(<div className="toast toast-top toast-center">
 
  <div className="alert alert-success ">
    <span>Message sent successfully.</span>
  </div>
</div>)}

 {/* // view profile */}

 <div className="card bg-base-100 md:w-96 md:h-149 shadow-sm my-4 w-86 h-130 mx-2" >
  <figure >
    <img className='mx-2 rounded-2xl w-full h-auto'
      src={user.photoUrl}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <div className="first flex justify-between pb-4">
    <h2 className="card-title text-2xl">{user.firstName}&nbsp;{user.lastName}&nbsp;({user.age})</h2>
    <span className='inline'>{user.gender}</span>
      </div>
     
    <p className='font-bold text-[14px] pb-4'>{user.about}</p>
   
  </div>
</div>
</div>
    </>
  )
}

export default EditProfile