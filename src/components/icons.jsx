import { BsFacebook, BsTwitter, BsYoutube, BsPinterest } from "react-icons/bs";
import { FaBehanceSquare } from "react-icons/fa";

export const icons = (
    <nav className="iconsDiv">
        <ul>
            <li>
                <a href="https://www.facebook.com/" aria-label="Facebook">
                    <BsFacebook color="#fff" size={18} />
                </a>
            </li>
            <li>
                <a href="https://twitter.com/" aria-label="Twitter">
                    <BsTwitter color="#fff" size={18} />
                </a>
            </li>
            <li>
                <a href="https://www.youtube.com/" aria-label="Youtube">
                    <BsYoutube color="#fff" size={18} />
                </a>
            </li>
            <li>
                <a href="https://www.pinterest.com/" aria-label="Pinterest">
                    <BsPinterest color="#fff" size={18} />
                </a>
            </li>
            <li>
                <a href="https://www.behance.net/" aria-label="Behance">
                    <FaBehanceSquare color="#fff" size={18} />
                </a>
            </li>
        </ul>
    </nav>
);
