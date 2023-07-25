import { MdTopic } from "react-icons/md";
import { AiFillFileImage, AiFillHome } from "react-icons/ai";
import { GoSignOut } from "react-icons/go";
import "../../styles/admin.scss";
import { useContext, useEffect, useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/authContext";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase";

function Admin() {
    const [activeNavItem, setActiveNavItem] = useState("/admin");
    const navigateHome = useNavigate();
    const { dispatch } = useContext(AuthContext);

    const signout = async () => {
        navigateHome("/");
        signOut(auth)
            .then(() => {
                dispatch({ type: "LOGOUT" });
            })
            .catch((error) => {
                alert("Can't LogOut!");
                console.log(error);
            });
    };
    const location = useLocation();

    const links = [
        {
            direction: "/admin",
            linkText: "General",
            icon: (
                <AiFillHome
                    size={30}
                    color={activeNavItem === "/admin" ? "#fff" : ""}
                />
            ),
        },
        {
            direction: "/admin/post",
            linkText: "Posts",
            icon: (
                <MdTopic
                    size={30}
                    color={activeNavItem === "/admin/post" ? "#fff" : ""}
                />
            ),
        },
        {
            direction: "/admin/slider",
            linkText: "Sliders",
            icon: (
                <AiFillFileImage
                    size={30}
                    color={activeNavItem === "/admin/slider" ? "#fff" : ""}
                />
            ),
        },
    ];

    useEffect(() => {
        setActiveNavItem(location.pathname);
    }, [location]);

    return (
        <div className="adminContainer">
            <div className="navBar">
                <h1>Admin Panel</h1>
                <nav>
                    <ul>
                        {links.map((link, i) => (
                            <li key={i}>
                                <Link
                                    to={link.direction}
                                    onClick={() =>
                                        setActiveNavItem(link.direction)
                                    }
                                    className={
                                        activeNavItem === link.direction
                                            ? "active"
                                            : "blackColor"
                                    }
                                >
                                    {link.icon}
                                    {link.linkText}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
                <span onClick={signout} className="signOutSpan">
                    <GoSignOut />
                    Sign out
                </span>
            </div>
            <div>
                <Outlet />
            </div>
        </div>
    );
}

export default Admin;
