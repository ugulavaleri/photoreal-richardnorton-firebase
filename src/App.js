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
import Register from "./components/authentication/Auth";
import { AuthContext } from "./context/authContext";
import { useContext } from "react";

function App() {
    const { currentUser } = useContext(AuthContext);

    console.log(currentUser);

    const RequireAuth = ({ children }) => {
        return currentUser ? children : <Navigate to="/login" />;
    };

    return (
        <Routes>
            <Route path="/login" element={<Register />} />
            <Route
                path="/"
                element={
                    <RequireAuth>
                        <Home />
                    </RequireAuth>
                }
            />
            <Route
                path="/currentpost"
                element={
                    <RequireAuth>
                        <Currentpost />
                    </RequireAuth>
                }
            />
            <Route
                path="/articles"
                element={
                    <RequireAuth>
                        <Articles />
                    </RequireAuth>
                }
            />
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
            <Route
                path="*"
                element={
                    <RequireAuth>
                        <Notfound />
                    </RequireAuth>
                }
            />
        </Routes>
    );
}

export default App;
