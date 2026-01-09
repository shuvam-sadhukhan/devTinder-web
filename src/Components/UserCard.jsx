import { useSelector } from "react-redux"

const UserCard=({user})=>{

  // const data=useSelector((store)=>store.feed);
  const {firstName,lastName,photoUrl,about}=user[0];
    return (  
        <>
        <div className="card bg-base-100 md:w-96 shadow-2xl w-72">
  <figure>
    <img
      src={photoUrl}
      alt="photo" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{firstName}&nbsp;{lastName}</h2>
    <p>{about}</p>
    <div className="card-actions justify-end">
     <button className="btn btn-info">Ignore</button>
     <button className="btn btn-secondary">Interested</button>
    </div>
  </div>
</div>
        </>
    )
}
export default UserCard