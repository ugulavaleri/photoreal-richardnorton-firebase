import "./App.css";
import Home from "./components/Home/home";
import { Routes, Route, Navigate } from "react-router-dom";
import Notfound from "./components/notFound/notfound";
import Admin from "./components/adminpanel/admin";
import Addpost from "./components/adminpanel/addpost";
import Addslider from "./components/adminpanel/addslider";
import Generalpage from "./components/adminpanel/generalpage";
import Currentpost from "./components/currentpost/currentpost";
import Articles from "./components/articles/articles";
import Auth from "./components/authentication/Auth";
import { AuthContext } from "./context/authContext";
import { useContext } from "react";

function App() {
    const { currentUser } = useContext(AuthContext);

    const RequireAuth = ({ children }) => {
        return currentUser ? children : <Navigate to="/auth" />;
    };

    return (
        <Routes>
            <Route path="/auth" element={<Auth />} />
            <Route path="/" element={<Home />} />
            <Route path="/currentpost" element={<Currentpost />} />
            <Route path="/articles" element={<Articles />} />
            <Route
                path="/admin"
                element={
                    <RequireAuth>
                        <Admin />
                    </RequireAuth>
                }
            >
                <Route
                    index
                    element={
                        <RequireAuth>
                            <Generalpage />
                        </RequireAuth>
                    }
                />
                <Route
                    path="post"
                    element={
                        <RequireAuth>
                            <Addpost />
                        </RequireAuth>
                    }
                />
                <Route
                    path="slider"
                    element={
                        <RequireAuth>
                            <Addslider />
                        </RequireAuth>
                    }
                />
            </Route>
            <Route path="*" element={<Notfound />} />
        </Routes>
    );
}

export default App;
