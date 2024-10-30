import React from "react";
import Post from "./Post";

function Posts({person, post_text}) {
    return (
    
        <div className="posts">
            <h2>My posts</h2>
            <input type="text" name="text" placeholder="enter the post"/>
            <button className="post__button">Add post</button>
            <Post message="SHALOM, ILONA"/>
            <Post message="HELLO, ILONA"/>
            <Post message="ДА ПАБАЧЭННЯ, ILONA"/>
            <Post message="ГУДБАЙ, ILONA"/>
        </div>
    )
};
export default  Posts

