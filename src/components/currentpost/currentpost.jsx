import React, { useContext, useEffect, useState } from "react";
import "../../styles/userVisitedPost.scss";
import "../../styles/header.scss";
import { doc, getDoc } from "firebase/firestore";
import { GlobalContext } from "../../context/globalContext";
import Bg from "../../images/currentPostBg.webp";
import { db } from "../../firebase";
import Footer from "../Home/footer";
import Header from "../Home/header";

function Currentpost() {
    const { currentPostId } = useContext(GlobalContext);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, ["/currentPost"]);

    const [current, setCurrent] = useState(
        JSON.parse(localStorage.getItem("currentPost"))
    );

    useEffect(() => {
        localStorage.setItem("currentPost", JSON.stringify(current));
    }, [current, currentPostId]);

    useEffect(() => {
        console.log("fetched again");
        const getCurrentPost = async () => {
            const docRef = doc(db, "users-post", currentPostId);
            const docSnap = await getDoc(docRef);
            if (docSnap.exists()) {
                setCurrent(docSnap.data());
            } else {
                window.alert("something Wents Wrong");
            }
        };
        currentPostId && getCurrentPost();
    }, [currentPostId]);

    return (
        <>
            <Header />
            <div className="currentPostContainer">
                <div className="currentVisitedImgBox">
                    <img src={Bg} alt="userChosenPageBg" />
                </div>
                <div className="currentVisitedOnlyPost">
                    <div>
                        <span className="category">
                            {current?.category.toUpperCase()}
                        </span>
                    </div>
                    <div>
                        <h1>{current?.headline}</h1>
                    </div>
                    <div>
                        <p>{current?.shortDesc}</p>
                    </div>
                    <div className="author">
                        <span>By {current?.author}</span>
                    </div>
                </div>
            </div>
            <div className="entireBlog">
                <p
                    dangerouslySetInnerHTML={{
                        __html: current?.entireBlog,
                    }}
                ></p>
            </div>
            <div className="endOfBlog">
                <h3>By {current?.author}</h3>
            </div>
            <Footer />
        </>
    );
}

export default Currentpost;
