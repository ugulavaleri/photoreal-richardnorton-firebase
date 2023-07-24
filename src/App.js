import "./styles/RESPONSIVE.scss";
import "./App.css";
import Home from "./components/Home/home";
import { Routes, Route } from "react-router-dom";
import Notfound from "./components/notFound/notfound";
import Admin from "./components/adminpanel/admin";
import Addpost from "./components/adminpanel/addpost";
import Addslider from "./components/adminpanel/addslider";
import Generalpage from "./components/adminpanel/generalpage";
import { GlobalContextProvider } from "./context/globalContext";
import Currentpost from "./components/currentpost/currentpost";
import Articles from "./components/articles/articles";

function App() {
    return (
        <GlobalContextProvider>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/currentpost" element={<Currentpost />} />
                <Route path="/articles" element={<Articles />} />
                <Route path="/admin" element={<Admin />}>
                    <Route index element={<Generalpage />} />
                    <Route path="post" element={<Addpost />} />
                    <Route path="slider" element={<Addslider />} />
                </Route>
                <Route path="*" element={<Notfound />} />
            </Routes>
        </GlobalContextProvider>
    );
}

export default App;
