import React from "react";
import "./post.css";
export default function Post() {
    return (
        <div className="post">
            <img
                src="https://images.pexels.com/photos/1390433/pexels-photo-1390433.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                className="postImg"
                alt=""
            />
            <div className="postInfo">
                <div className="postCats">
                    <span className="postCat">Music</span>
                    <span className="postCat">Life</span>
                </div>
                <span className="postTitle">Lorem ipsum dolor sit amet .</span>
                <hr />
                <span className="postDate">1 hour ego</span>
                <p className="postDesc">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Ullam eveniet officiis at doloribus dolores voluptate saepe
                    cumque iusto eligendi sequi ipsum consequuntur, dolor, harum
                    quibusdam repudiandae laudantium fugit suscipit alias.
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Ullam eveniet officiis at doloribus dolores voluptate saepe
                    cumque iusto eligendi sequi ipsum consequuntur, dolor, harum
                    quibusdam repudiandae laudantium fugit suscipit alias.
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Ullam eveniet officiis at doloribus dolores voluptate saepe
                    cumque iusto eligendi sequi ipsum consequuntur, dolor, harum
                    quibusdam repudiandae laudantium fugit suscipit alias.
                </p>
            </div>
        </div>
    );
}
