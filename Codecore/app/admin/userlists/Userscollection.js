import { blockUser, fetchAllUser } from '@/redux/axios'
import Link from 'next/link'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

const Userscollection = ({currentuser}) => {

    
    const dispatch=useDispatch()

    useEffect(()=>{
        dispatch(fetchAllUser())
      },[])


    const block=(id)=>{
        const data={type:"block",id}
        dispatch(blockUser(data))
        // dispatch(fetchAllUser())

          }
  
      const unBlock=(id)=>{
        const data={type:"unblock",id}
        dispatch(blockUser(data)) 
        // dispatch(fetchAllUser())

      }

    if(!currentuser){
        return <><h1>Loading</h1></>
    }
    return (
        <>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.1/css/all.min.css" integrity="sha256-2XFplPlrFClt0bIdPgpz8H7ojnk10H69xRqd9+uTShA=" crossOrigin="anonymous" />
<div className="container mt-3 mb-4">
<div className="col-lg-9 mt-4 mt-lg-0">
    <div className="row">
      <div className="col-md-12">
        <div className="user-dashboard-info-box table-responsive mb-0 bg-white p-4 shadow-sm">
          <table className="table manage-candidates-top mb-0">
            <thead>
              <tr>
                <th>UserName</th>
                <th className="text-center">Status</th>
                <th className="action text-right">Action</th>
              </tr>
            </thead>
            <tbody>
            {currentuser.map((user)=>(
              <tr className="candidates-list" key={user._id}>
                <td className="title">
                  <div className="thumb">
                    <img className="img-fluid" src={user?.profilepicture?user.profilepicture:"https://bootdey.com/img/Content/avatar/avatar7.png"} alt=""/>
                  </div>
                  <div className="candidate-list-details">
                    <div className="candidate-list-info">
                      <div className="candidate-list-title">
                      
                        <h5 className="mb-0"><Link href={`/user/userprofiles/${user?._id}`} >{user.username}</Link></h5>
                      </div>
                      <div className="candidate-list-option">
                       
                      </div>
                    </div>
                  </div>
                </td>
                <td className="candidate-list-favourite-time text-center">
                  {/* <a className="candidate-list-favourite order-2 text-danger" href="#"><i className="fas fa-heart"></i></a> */}
                  
                    <span className="candidate-list-time order-1">{user.isBlocked==false?'Not Blocked':'Blocked'}</span>

                    
                  
                </td>
                <td>
                  <ul className="list-unstyled mb-0 d-flex justify-content-end deco" >
                  <button onClick={()=>{unBlock(user._id)}}>
                    <a href="#" className="text-primary" data-toggle="tooltip" title="" data-original-title="view"><i className="far fa-eye"></i></a>
                    </button>
                    {/* <li><a href="#" className="text-info" data-toggle="tooltip" title="" data-original-title="Edit"><i className="fas fa-pencil-alt"></i></a></li> */}
                    <button onClick={()=>{block(user._id)}}>
                    <a href="#" className="text-danger" data-toggle="tooltip" title="" data-original-title="Delete"><i className="far fa-trash-alt"></i></a>
                    </button>
                  </ul>
                </td>
              </tr> 
                      ))}

                      
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</div>
        </>
   
  )
}

export default Userscollection