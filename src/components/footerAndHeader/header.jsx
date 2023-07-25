import React, { memo } from "react";
import "../../styles/header.scss";
import { BsSearch } from "react-icons/bs";
import { Link } from "react-router-dom";
import { icons } from "./reusableIcons";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase";
import { useContext } from "react";
import { AuthContext } from "../../context/authContext";

function Header() {
    const { dispatch } = useContext(AuthContext);
    const signout = async () => {
        signOut(auth)
            .then(() => {
                console.log("signOuted");
                dispatch({ type: "LOGOUT" });
            })
            .catch((error) => {
                alert("Can't LogOut!");
                console.log(error);
            });
    };

    return (
        <header>
            <div>
                <h2>RUNO</h2>
            </div>
            <div className="headerRightPannel">
                <nav className="pageNav">
                    <ul>
                        <li>
                            <span
                                onClick={signout}
                                style={{ cursor: "pointer" }}
                            >
                                Sign Out
                            </span>
                        </li>
                        <li>
                            <Link to={"/"}>Home</Link>
                        </li>
                        <li>
                            <Link to={"/articles"}>Articles</Link>
                        </li>
                    </ul>
                </nav>
                <div className="socialNetworkNav">{icons}</div>
                <div>
                    <BsSearch size={20} />
                </div>
            </div>
        </header>
    );
}

export default memo(Header);
