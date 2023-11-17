import Link from "next/link";

import "./Users.css";
import { Avatar } from "@mui/material";

const User = ({ user }) => {
  return (
    <Link href={`/user/userprofiles/${user?._id}`} style={{ color: "black",textDecoration:'none',display:'flex',alignItems:'center',justifyContent:'flex-start'}}>
      {/* <h3>{user.username.charAt(0).toUpperCase()}</h3> */}
      <Avatar alt="User Avatar" src={user?.profilepicture} style={{ width: "125px", height: "125px" }}  />

      <h5 style={{ color: "black",textDecoration:'none'}}>{user.username}</h5>
    </Link>
  );
};

export default User;