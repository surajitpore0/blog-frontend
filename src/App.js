import Home from "./pages/home/Home";
import TopBar from "./components/topbar/TopBar";
import Singlepage from "./pages/singlepage/Singlepage";
import Write from "./pages/write/Write";
import Settings from "./pages/setting/Settings";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Post from "./components/post/Post";
import Posts from "./components/posts/Posts";
import SinglePost from "./components/singlePost/SinglePost";
import { Context } from "./context/Context";
import { useContext } from "react";

export default function App() {
    const { user } = useContext(Context);

    return (
        <Router>
            <TopBar />
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/register">{user ? <Home /> : <Register />}</Route>
                <Route path="/login">{user ? <Home /> : <Login />}</Route>
                <Route path="/write">{user ? <Write /> : <Register />}</Route>
                <Route path="/settings">
                    {user ? <Settings /> : <Register />}
                </Route>
                <Route path="/post/:postId">
                    <Singlepage />
                </Route>
            </Switch>
        </Router>
    );
}
