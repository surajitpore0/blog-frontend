import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./sidebar.css";
export default function Sidebar() {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const getCategories = async () => {
            const res = await axios.get("/categories");
            setCategories(res.data);
        };
        getCategories();
    }, []);

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
                {/* <div className="sidebarItem">
                    <span className="sidebarTitle">categories</span>
                    <ul className="sidebarList">
                        {categories.map((c) => (
                            <Link className="link" to={`/?cat=${c.name}`}>
                                <li className="sidebarListItem">{c.name}</li>
                            </Link>
                        ))}
                    </ul>
                </div> */}

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
