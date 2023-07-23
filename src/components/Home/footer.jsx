import "../../styles/footer.scss";

import { BsFacebook, BsTwitter, BsYoutube, BsPinterest } from "react-icons/bs";
import { FaBehanceSquare } from "react-icons/fa";

function Footer() {
    return (
        <footer>
            <div className="topFooter">
                <div className="innerTopFooter">
                    <div>
                        <h4>Contact the Publisher</h4>
                        <ul>
                            <li>mike@runo.com</li>
                            <li>+944 450 904 505</li>
                        </ul>
                    </div>
                    <div>
                        <h4>Explorate</h4>
                        <ul>
                            <li>About</li>
                            <li>Partners</li>
                            <li>Job Opportunities</li>
                            <li>Advertise</li>
                            <li>Membership</li>
                        </ul>
                    </div>
                    <div className="HeadquarterDiv">
                        <h4>Headquarter</h4>
                        <p>191 Middleville Road, NY 1001, Sydney Australia</p>
                    </div>
                    <div>
                        <h4>Connections</h4>
                        <ul className="iconsDiv">
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
                    </div>
                </div>
            </div>
            <div className="bottomFooter">
                <div className="innerBottomFooter">
                    <div>
                        <p>2021 | RUNO Publisher Studio</p>
                    </div>
                    <div>
                        <p>Subscribe Now</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
