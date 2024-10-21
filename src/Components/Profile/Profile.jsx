import React from "react";
import "./profile.css";

function Profile() {
  return (
    <div className='profile'>
      <div className="header">
        <img className="header__icon" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSyWVvHq0-FnrRlRcRAe5f7fCfXA8a1zju23qjFe7vONiAT8q3"/>
        <p>Elon Musk</p>
      </div>
      <div className="posts">
          <input type="text" name="text" placeholder="enter the post"/>
          <button className="post__button">Add post</button>
      </div>
      <div className="comment">
          <img className="comment___icon" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSyWVvHq0-FnrRlRcRAe5f7fCfXA8a1zju23qjFe7vONiAT8q3" alt="" />
          <span className="sender__username">Elon Musk</span>
          <p>Some Text</p>
      </div>
    </div>
  );
}

export default Profile;
