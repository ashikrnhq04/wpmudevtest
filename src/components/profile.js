import React from "react";
import { useSelector } from "react-redux";

const Profile = () => {
  const user = useSelector((state) => state.user.value);
  const theme = useSelector((state) => state.theme.value);
  return (
    <div style={{ color: theme }}>
      <h2>Profile Page</h2>
      <p>User Name : {user.name} </p>
      <p>User Age : {user.age} </p>
      <p>User Email : {user.email} </p>
    </div>
  );
};

export default Profile;
