import React from "react";
import Home from "./pages/home/Home";
import TopBar from "./components/topbar/TopBar";
export default function app() {
    return (
        <>
            <TopBar />
            <Home />
        </>
    );
}
