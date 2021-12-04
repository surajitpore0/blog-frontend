import React from "react";
import Home from "./pages/home/Home";
import TopBar from "./components/topbar/TopBar";
import Singlepage from "./pages/singlepage/Singlepage";
import Write from "./pages/write/Write";
import Settings from "./pages/setting/Settings";

export default function app() {
    return (
        <>
            <TopBar />
            <Settings />
        </>
    );
}
