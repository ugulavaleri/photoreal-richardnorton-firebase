import { MdTopic } from "react-icons/md";
import { AiFillFileImage, AiFillHome } from "react-icons/ai";
import { GoSignOut } from "react-icons/go";
import "../../styles/admin.scss";
import { useEffect, useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router";
import { Link } from "react-router-dom";

function Admin() {
    const [activeNavItem, setActiveNavItem] = useState("/admin");
    const navigateHome = useNavigate();

    const handleSignOut = () => {
        navigateHome("/");
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
                <span onClick={handleSignOut} className="signOutSpan">
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
