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
    <div className="navbar bg-base-200 shadow-sm">
  <div className="flex-1 sm:text-left text-center ">
    <Link to='/' className="btn btn-ghost text-xl "> &#128105;devTinder</Link>
  </div>
  { selector && (
  <div className="flex gap-2">
   <div className="form-control">Welcome {selector.firstName}</div>
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
          <Link to='/profile' className="justify-between">
            Profile
            <span className="badge">New</span>
          </Link>
        </li>
        <li><a>Settings</a></li>
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