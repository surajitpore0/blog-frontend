import React from "react";
import "./singlePost.css";

export default function SinglePost() {
    return (
        <>
            <div className="singlePost">
                <div className="singlePostWrapper">
                    <img
                        src="https://images.pexels.com/photos/572897/pexels-photo-572897.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                        alt=""
                        className="singlePostImg"
                    />
                    <h1 className="singlePostTitle">
                        Lorem ipsum dolor sit amet consectetur.
                        <div className="singlePostEdit">
                            <i className="singlePostIcon far fa-edit"></i>
                            <i className="singlePostIcon far fa-trash-alt"></i>
                        </div>
                    </h1>
                    <div className="singlePostInfo">
                        <span className="singlePostAuthor">
                            Author: <b>Pore</b>
                        </span>

                        <span className="singlePostDate">1 hour ago</span>
                    </div>
                    <p className="singlePostDesc">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Autem, inventore sunt veritatis voluptate, reprehenderit
                        voluptatum ipsam praesentium cum temporibus similique,
                        ipsa quisquam repellat et ut cumque quidem dignissimos
                        necessitatibus? Deserunt. Lorem ipsum dolor sit amet
                        consectetur adipisicing elit. Autem, inventore sunt
                        veritatis voluptate, reprehenderit voluptatum ipsam
                        praesentium cum temporibus similique, ipsa quisquam
                        repellat et ut cumque quidem dignissimos necessitatibus?
                        Deserunt.
                    </p>
                </div>
            </div>
        </>
    );
}
