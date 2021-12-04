import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import "./settings.css";
export default function Settings() {
    return (
        <div className="settings">
            <div className="settingWrapper">
                <div className="settingTitle">
                    <span className="settingUpdateTitle">
                        Update Your Account
                    </span>
                    <span className="settingDeleteTitle">Delete Account</span>
                </div>
                <form action="" className="settingsForm">
                    <label>Profile Picture</label>
                    <div className="settingsPP">
                        <img
                            src="https://images.pexels.com/photos/15286/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                            alt=""
                        />
                        <label htmlFor="fileInput">
                            <i className="far fa-user-circle settingsPPIcon"></i>
                        </label>

                        <input
                            type="file"
                            id="fileInput"
                            style={{ display: "none" }}
                        />
                    </div>

                    <label>username</label>
                    <input type="text" placeholder="Pore" />

                    <label>Email</label>
                    <input type="email" placeholder="pore@email.com" />

                    <label>Password</label>
                    <input type="password" />
                    <button type="submit" className="settingsSubmit">
                        Update
                    </button>
                </form>
            </div>
            <Sidebar />
        </div>
    );
}
