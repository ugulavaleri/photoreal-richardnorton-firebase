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
                        <li>
                            <Link to={"/articles"}>Articles</Link>
                        </li>
                    </ul>
                </nav>
                <div className="socialNetworkNav">
                    <nav>
                        <ul>
                            <li>
                                <a
                                    href="https://www.facebook.com/"
                                    aria-label="Facebook"
                                >
                                    <BsFacebook color="#fff" size={18} />
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://twitter.com/"
                                    aria-label="Twitter"
                                >
                                    <BsTwitter color="#fff" size={18} />
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://www.youtube.com/"
                                    aria-label="Youtube"
                                >
                                    <BsYoutube color="#fff" size={18} />
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://www.pinterest.com/"
                                    aria-label="Pinterest"
                                >
                                    <BsPinterest color="#fff" size={18} />
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://www.behance.net/"
                                    aria-label="Behance"
                                >
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
