import React, { memo } from "react";
import "../../styles/header.scss";
import { BsSearch } from "react-icons/bs";
import { Link } from "react-router-dom";
import { icons } from "../icons";

function Header() {
    return (
        <header>
            <div>
                <h2>RUNO</h2>
            </div>
            <div className="headerRightPannel">
                <nav className="pageNav">
                    <ul>
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
