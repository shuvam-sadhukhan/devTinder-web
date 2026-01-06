import { useDispatch, useSelector } from "react-redux"
import { BASE_URL } from "../Utils/constants";
import { Link, useNavigate } from "react-router-dom";
import { removeUser } from "../Utils/userSlice";
import axios from "axios";
import { removeFeed } from "../Utils/feedSlice";

const Navbar=()=>{

  const selector=useSelector((store)=>store.user);
  const navigate=useNavigate();
  const dispatch=useDispatch();

  const handleLogout=async()=>{
      const deleteData= await axios.post(BASE_URL+'/logout',{},{withCredentials:true});
      dispatch(removeUser());
      dispatch(removeFeed());
      navigate('/login');

  }
    return(
    <>
    <div className="navbar bg-base-200 shadow-sm ">
  <div className="flex-1 w-[100%]">
    <Link to='/feed' className="btn btn-ghost md:text-2xl text-sm md:px-4 px-1  "> &#128105;devTinder</Link>
  </div>
  { selector && (
  <div className="flex gap-2">
   <div className="form-control  text-sm md:text-2xl font-bold text-red-300 md:py-1 py-2 ">Welcome {selector.firstName}</div>
   <div className="dropdown dropdown-end mx-5">
    
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img
            alt="Tailwind CSS Navbar component"
            src={selector.photoUrl} />
        </div>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li>
          <Link to='/profile'>Profile</Link>
        </li>
        <li>
        <Link to='/connections'> Connections</Link>
        </li>
         <li>
        <Link to='/requests'> Pending Requests</Link>
        </li>
        <li><a><div onClick={handleLogout}>Logout</div></a></li>
      </ul>
    </div>
  </div>
)}
</div>
    
    </>
    )
}

export default Navbar