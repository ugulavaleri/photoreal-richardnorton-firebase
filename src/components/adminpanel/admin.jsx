import { MdTopic } from "react-icons/md";
import { AiFillFileImage, AiFillHome } from "react-icons/ai";
import { GoSignOut } from "react-icons/go";
import "../../styles/admin.scss";
import { useState } from "react";
import { Outlet, useNavigate } from "react-router";
import { Link } from "react-router-dom";

function Admin() {
    const [activeNavItem, setActiveNavItem] = useState("/admin");
    const navigateHome = useNavigate();

    const handleSignOut = () => {
        navigateHome("/");
    };

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
            direction: "post",
            linkText: "Posts",
            icon: (
                <MdTopic
                    size={30}
                    color={activeNavItem === "post" ? "#fff" : ""}
                />
            ),
        },
        {
            direction: "slider",
            linkText: "Sliders",
            icon: (
                <AiFillFileImage
                    size={30}
                    color={activeNavItem === "slider" ? "#fff" : ""}
                />
            ),
        },
    ];

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
