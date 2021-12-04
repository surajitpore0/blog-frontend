import React from "react";
import "./topBar.css";

export default function TopBar() {
    return (
        <div className="top">
            <div className="topLeft">
                <i className="topIcon fab fa-facebook-square"></i>
                <i className="topIcon fab fa-twitter-square"></i>
                <i className="topIcon fab fa-pinterest-p"></i>
                <i className="topIcon fab fa-instagram"></i>
            </div>
            <div className="topCenter">
                <ul className="topList">
                    <li className="topListItem">home</li>
                    <li className="topListItem">about</li>
                    <li className="topListItem">contact</li>
                    <li className="topListItem">write</li>
                    <li className="topListItem">logout</li>
                </ul>
            </div>
            <div className="topRight">
                <img
                    className="topImg"
                    src="https://images.pexels.com/photos/974266/pexels-photo-974266.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                    alt=""
                />
                <i className="topSearchIcon fas fa-search"></i>
            </div>
        </div>
    );
}
