import React from "react";

function Post(props) {
    return (
    
        <div className="post">
            <img width="5%" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSyWVvHq0-FnrRlRcRAe5f7fCfXA8a1zju23qjFe7vONiAT8q3"></img>
            <span>ELONA MASKA</span>
            <p>{props.message}</p>
    </div>
    )
};

export default Post