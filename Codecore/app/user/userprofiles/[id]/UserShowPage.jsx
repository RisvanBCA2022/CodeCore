import React from 'react'
import './usershowpage.css'
// import 'bootstrap/dist/css/bootstrap.min.css';


const UserShowPage = ({user}) => {
  return (
    <>
         <div className="container mt-5">
      <div className="row d-flex justify-content-center">
        <div className="col-md-7">
          <div className="card">
            <div className="avatar">
              <img src={user?.data?.profilepicture?user.data.profilepicture:"https://i.imgur.com/bDLhJiP.jpg"} width="100" className="rounded-circle" alt="User Avatar" />
            </div>
            <div className="user-details mt-3 text-center">
              <span className="badge">Pro</span>
              <h5 className="username">{user?.data?.username}</h5>
              <span>Web Developer</span>
              <div className="bio mt-1">
                <p>{user?.bio}</p>
              </div>
              <ul className="social-list">
                <li><i className="fa fa-facebook"></i></li>
                <li><i className="fa fa-dribbble"></i></li>
                <li><i className="fa fa-instagram"></i></li>
                <li><i className="fa fa-linkedin"></i></li>
                <li><i className="fa fa-google"></i></li>
              </ul>
              <div className="buttons">
                <button className="btn message-btn">Message</button>
                <button className="btn contact-btn">Contact</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default UserShowPage