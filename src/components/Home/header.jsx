import React from "react";
import "../../styles/header.scss";
import {
    BsFacebook,
    BsTwitter,
    BsYoutube,
    BsPinterest,
    BsSearch,
} from "react-icons/bs";
import { FaBehanceSquare } from "react-icons/fa";
import { Link } from "react-router-dom";

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
                        <li>Articles</li>
                    </ul>
                </nav>
                <div className="socialNetworkNav">
                    <nav>
                        <ul>
                            <li>
                                <a href="https://www.facebook.com/">
                                    <BsFacebook color="#fff" size={18} />
                                </a>
                            </li>
                            <li>
                                <a href="https://twitter.com/">
                                    <BsTwitter color="#fff" size={18} />
                                </a>
                            </li>
                            <li>
                                <a href="https://www.youtube.com/">
                                    <BsYoutube color="#fff" size={18} />
                                </a>
                            </li>
                            <li>
                                <a href="https://www.pinterest.com/">
                                    <BsPinterest color="#fff" size={18} />
                                </a>
                            </li>
                            <li>
                                <a href="https://www.behance.net/">
                                    <FaBehanceSquare color="#fff" size={18} />
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div>
                    <BsSearch size={20} />
                </div>
            </div>
        </header>
    );
}

export default Header;
