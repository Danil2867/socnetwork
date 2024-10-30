import React from "react";
import "./profile.css";
import Posts from "./posts/post/Posts.jsx"
function Profile() {
  return (
    <div className='profile'>
      <div className="header">
        <img className="header__icon" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSyWVvHq0-FnrRlRcRAe5f7fCfXA8a1zju23qjFe7vONiAT8q3"/>
        <p>Elon Musk</p>
      </div>
      <Posts/>
    </div>
  );
}

export default Profile;
