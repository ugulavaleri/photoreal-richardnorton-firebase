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

function Header() {
    return (
        <div className="headerContainer">
            <header>
                <div className="innerHeader">
                    <h2>RUNO</h2>
                    <div className="headerRightPannel">
                        <nav className="pageNav">
                            <ul>
                                <li>Home</li>
                                <li>Articles</li>
                            </ul>
                        </nav>
                        <div className="socialNetworkNav">
                            <nav>
                                <ul>
                                    <li>
                                        <a href="https://www.facebook.com/">
                                            <BsFacebook
                                                color="#fff"
                                                size={18}
                                            />
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
                                            <BsPinterest
                                                color="#fff"
                                                size={18}
                                            />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.behance.net/">
                                            <FaBehanceSquare
                                                color="#fff"
                                                size={18}
                                            />
                                        </a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                        <div>
                            <BsSearch size={20} />
                        </div>
                    </div>
                </div>
            </header>
            <div className="SliderText">
                <span className="category">ADVENTURE</span>
                <h2 className="sliderName">
                    Richird Norton photorealistic rendering as real photos
                </h2>
                <div className="postDescriptionDiv">
                    <span className="postAddTime">1212434</span>

                    <p className="postDescription">
                        Progressively incentivize cooperative systems through
                        technically sound functionalities. The credibly
                        productivate seamless data.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Header;
