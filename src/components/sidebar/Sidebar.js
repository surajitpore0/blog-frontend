import React from "react";
import "./sidebar.css";
export default function Sidebar() {
    return (
        <>
            <div className="sidebar">
                <div className="sidebarItem">
                    <span className="sidebarTitle">About me</span>
                    <img
                        src="https://images.pexels.com/photos/6609104/pexels-photo-6609104.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                        alt=""
                    />
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Ipsa quos unde rerum mollitia necessitatibus
                        distinctio voluptatibus temporibus et, debitis illo quas
                        illum quibusdam! Provident iure laborum, delectus
                        ratione error maiores.
                    </p>
                </div>
                <div className="sidebarItem">
                    <span className="sidebarTitle">categories</span>
                    <ul className="sidebarList">
                        <li className="sidebarListItem">Life</li>
                        <li className="sidebarListItem">Music</li>
                        <li className="sidebarListItem">Style</li>
                        <li className="sidebarListItem">Sport</li>
                        <li className="sidebarListItem">Tech</li>
                        <li className="sidebarListItem">Cinema</li>
                    </ul>
                </div>

                <div className="sidebarItem">
                    <span className="sidebarTitle">follow us</span>
                    <div className="sidebarSocial">
                        <i className="sidebarIcon fab fa-facebook-square"></i>
                        <i className="sidebarIcon fab fa-twitter-square"></i>
                        <i className="sidebarIcon fab fa-pinterest-p"></i>
                        <i className="sidebarIcon fab fa-instagram"></i>
                    </div>
                </div>
            </div>
        </>
    );
}
