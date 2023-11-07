'use client'
import React, { useEffect } from "react";

// import "./Users.css";
// import UsersList from "./UsersList";
import LeftSideBar from "@/components/Home/LeftsideBar/LeftSideBar";
import { useDispatch } from "react-redux";
import { fetchAllUser } from "@/redux/axios";
import UsersList from "./UserList";

const Users = () => {

  return (
    <div className="home-container-1">
      <LeftSideBar  />
      <div className="home-container-2" style={{ marginTop: "30px" }}>
        <h1 style={{ fontWeight: "400" }}>Users</h1>
       <UsersList />
      </div>
    </div>
  );
};

export default Users;