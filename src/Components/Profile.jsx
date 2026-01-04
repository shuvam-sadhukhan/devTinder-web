import React, {  useState } from "react";
import { useSelector } from "react-redux";

const Profile = () => {
  const user=useSelector((store)=>store.user);
  
  const[firstName,setFirstName]=useState('');
  const[lastName,setLastName]=useState('');
  const[age,setAge]=useState('');
  const[gender,setGender]=useState('');
  const[about,setAbout]=useState('');
  const[photoUrl,setPhotoUrl]=useState('');

  return (
    <div className=" flex items-center justify-center bg-gray-100 px-4 py-4">
      <div className="w-2xl max-h-auto  bg-white rounded-xl shadow-lg p-6">
        <h2 className="text-xl font-bold text-center text-gray-800 mb-3">
          Edit Profile
        </h2> 

        <form  className="space-y-4">
         
          <div>
            <label className="block text-sm font-medium text-gray-700">
              FirstName
            </label>
            <input
              type="text" value={firstName} onChange={(e)=>setFirstName(e.target.value)} placeholder="Enter your first name"
              className="mt-1 w-[80%] rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
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
         <button className="btn btn-soft btn-secondary border-2 w-full text-lg">Edit </button>
        </form>
      </div>
    </div>  
  );
};

export default Profile;
