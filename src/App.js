import React, { useState } from "react";
import "./App.css";

import AuthLanding from "./components/AuthLanding";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Dashboard from "./components/Dashboard";
import Upload from "./components/Upload";
import Chat from "./components/Chat";

function App() {
    const [page, setPage] = useState("auth");

    return (
        <>
            {page === "auth" && <AuthLanding setPage={setPage} />}
            {page === "login" && <Login setPage={setPage} />}
            {page === "signup" && <Signup setPage={setPage} />}
            {page === "dashboard" && <Dashboard setPage={setPage} />}
            {page === "upload" && <Upload setPage={setPage} />}
            {page === "chat" && <Chat setPage={setPage} />}
        </>
    );
}

export default App;
