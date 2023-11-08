'use client'
import AdminLeftbar from '@/components/AdminHome/AdminLeftbar'
import { fetchAllUser } from '@/redux/axios'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './userlists.css'

const page = () => {
    const dispatch=useDispatch()
useEffect(()=>{
  dispatch(fetchAllUser())
},[])

  const users = useSelector((state) => state.userslice.usersdata);
    
    // console.log(users);

  return (
    <div>
     <div className='home-container-1'>
    <AdminLeftbar />
    <div className="main-bar">
      <div className="main-bar-header">
       <h1>All Users</h1>
      
       <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.1/css/all.min.css" integrity="sha256-2XFplPlrFClt0bIdPgpz8H7ojnk10H69xRqd9+uTShA=" crossorigin="anonymous" />
<div class="container mt-3 mb-4">
<div class="col-lg-9 mt-4 mt-lg-0">
    <div class="row">
      <div class="col-md-12">
        <div class="user-dashboard-info-box table-responsive mb-0 bg-white p-4 shadow-sm">
          <table class="table manage-candidates-top mb-0">
            <thead>
              <tr>
                <th>UserName</th>
                <th class="text-center">Status</th>
                <th class="action text-right">Action</th>
              </tr>
            </thead>
            <tbody>
            {users.map((user)=>(
              <tr class="candidates-list">
                <td class="title">
                  <div class="thumb">
                    <img class="img-fluid" src="https://bootdey.com/img/Content/avatar/avatar7.png" alt=""/>
                  </div>
                  <div class="candidate-list-details">
                    <div class="candidate-list-info">
                      <div class="candidate-list-title">
                      
                        <h5 class="mb-0"><a href="#">{user.username}</a></h5>
                      </div>
                      <div class="candidate-list-option">
                       
                      </div>
                    </div>
                  </div>
                </td>
                <td class="candidate-list-favourite-time text-center">
                  {/* <a class="candidate-list-favourite order-2 text-danger" href="#"><i class="fas fa-heart"></i></a> */}
                  <span class="candidate-list-time order-1">Not Blocked</span>
                </td>
                <td>
                  <ul class="list-unstyled mb-0 d-flex justify-content-end deco" >
                    <a href="#" class="text-primary" data-toggle="tooltip" title="" data-original-title="view"><i class="far fa-eye"></i></a>
                    {/* <li><a href="#" class="text-info" data-toggle="tooltip" title="" data-original-title="Edit"><i class="fas fa-pencil-alt"></i></a></li> */}
                    <a href="#" class="text-danger" data-toggle="tooltip" title="" data-original-title="Delete"><i class="far fa-trash-alt"></i></a>
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
      </div>

    </div>
 
    </div>
    
    </div>
  )
}

export default page