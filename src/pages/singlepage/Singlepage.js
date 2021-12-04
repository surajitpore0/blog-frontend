import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import SinglePost from "../../components/singlePost/SinglePost";
import "./singlepage.css";

export default function Singlepage() {
    return (
        <div className="single">
            <SinglePost />
            <Sidebar />
        </div>
    );
}
