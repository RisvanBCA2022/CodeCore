import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import User from "./User";
import "./Users.css";
import { fetchAllUser } from "@/redux/axios";

const UsersList = () => {
    const dispatch=useDispatch()
    useEffect(()=>{
        dispatch(fetchAllUser())
    },[])
  const users = useSelector((state) => state.userslice.usersdata);


  return (
    <div className="user-list-container">
      {users.map((user) => (
        <User user={user} key={user?._id} />
      ))}
    </div>
  );
};

export default UsersList;