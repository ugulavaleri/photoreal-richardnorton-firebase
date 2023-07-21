// import React, { useState } from "react";
// import { Routes, Route, Link } from "react-router-dom";
// import { MdTopic } from "react-icons/md";
// import { AiFillFileImage, AiFillHome } from "react-icons/ai";
// import { GoSignOut } from "react-icons/go";
// import "../styles/admin.scss";
// import { Outlet, useNavigate } from "react-router";

// function AdminNavigation() {
// const [activeNavItem, setActiveNavItem] = useState("general");

// const handleActiveAdminNav = (navItem) => {
//     setActiveNavItem(navItem);
// };

// const navigateHome = useNavigate();

// const handleSignOut = () => {
//     navigateHome("/");
// };

// return (
//     <div className="adminContainer">
//         <div className="navBar">
//             <h1>RUNO</h1>
//             <nav>
//                 <ul>
//                     <li
//                         id="general"
//                         onClick={() => handleActiveAdminNav("general")}
//                         className={
//                             activeNavItem === "general" ? "active" : ""
//                         }
//                     >
//                         <Link to={"/admin"}>
//                             <AiFillHome
//                                 size={30}
//                                 color={
//                                     activeNavItem === "general" && "#fff"
//                                 }
//                             />
//                             General
//                         </Link>
//                     </li>
//                     <li
//                         id="posts"
//                         onClick={() => handleActiveAdminNav("posts")}
//                         className={
//                             activeNavItem === "posts" ? "active" : ""
//                         }
//                     >
//                         <Link to={"/admin/post"}>
//                             <MdTopic
//                                 size={30}
//                                 color={activeNavItem === "posts" && "#fff"}
//                             />
//                             Posts
//                         </Link>
//                     </li>
//                     <li
//                         id="sliders"
//                         onClick={() => handleActiveAdminNav("sliders")}
//                         className={
//                             activeNavItem === "sliders" ? "active" : ""
//                         }
//                     >
//                         <Link to={"/admin/slider"}>
//                             <AiFillFileImage
//                                 size={30}
//                                 color={
//                                     activeNavItem === "sliders" && "#fff"
//                                 }
//                             />
//                             Sliders
//                         </Link>
//                     </li>
//                 </ul>
//             </nav>
//             <Outlet />
//             <span onClick={handleSignOut} className="signOutSpan">
//                 <GoSignOut />
//                 Sign out
//             </span>
//         </div>
//     </div>
// );
// }

// export default AdminNavigation;
