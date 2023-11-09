import Link from "next/link";

import "./Users.css";

const User = ({ user }) => {
    console.log(user);
  return (
    <Link href={`/user/userprofiles/${user?._id}`} className="user-profile-link">
      <h3>{user.username.charAt(0).toUpperCase()}</h3>
      <h5>{user.username}</h5>
    </Link>
  );
};

export default User;