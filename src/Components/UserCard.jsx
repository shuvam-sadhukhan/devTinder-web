import { useSelector } from "react-redux"

const UserCard=({user})=>{

  // const data=useSelector((store)=>store.feed);
  const {firstName,lastName,photoUrl,about}=user[2];
    return (  
        <>
        <div className="card bg-base-100 w-96 shadow-sm">
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