import { MdTopic } from "react-icons/md";
import { AiFillFileImage, AiFillHome } from "react-icons/ai";
import { GoSignOut } from "react-icons/go";
import "../../styles/admin.scss";
import { useState } from "react";
import { Outlet, useNavigate } from "react-router";
import { Link } from "react-router-dom";

function Admin() {
    const [activeNavItem, setActiveNavItem] = useState("admin");
    const navigateHome = useNavigate();

    const handleActiveAdminNav = (navItem) => {
        setActiveNavItem(navItem);
    };

    const handleSignOut = () => {
        navigateHome("/");
    };

    return (
        <div className="adminContainer">
            <div className="navBar">
                <h1>Admin Panel</h1>
                <nav>
                    <ul>
                        <li>
                            <Link
                                to={"/admin"}
                                onClick={() => handleActiveAdminNav("admin")}
                                className={
                                    activeNavItem === "admin"
                                        ? "active"
                                        : "blackColor"
                                }
                            >
                                <AiFillHome
                                    size={30}
                                    color={
                                        activeNavItem === "general"
                                            ? "#fff"
                                            : ""
                                    }
                                />
                                General
                            </Link>
                        </li>
                        <li>
                            <Link
                                to={"post"}
                                onClick={() => handleActiveAdminNav("posts")}
                                className={
                                    activeNavItem === "posts"
                                        ? "active"
                                        : "blackColor"
                                }
                            >
                                <MdTopic
                                    size={30}
                                    color={
                                        activeNavItem === "posts" ? "#fff" : ""
                                    }
                                />
                                Posts
                            </Link>
                        </li>
                        <li>
                            <Link
                                to={"slider"}
                                onClick={() => handleActiveAdminNav("sliders")}
                                className={
                                    activeNavItem === "sliders"
                                        ? "active"
                                        : "blackColor"
                                }
                            >
                                <AiFillFileImage
                                    size={30}
                                    color={
                                        activeNavItem === "sliders"
                                            ? "#fff"
                                            : ""
                                    }
                                />
                                Sliders
                            </Link>
                        </li>
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
