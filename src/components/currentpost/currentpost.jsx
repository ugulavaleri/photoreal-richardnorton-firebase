import React, { useContext, useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { GlobalContext } from "../../context/globalContext";
import { db } from "../../firebase";

function Currentpost() {
    const { currentPostId } = useContext(GlobalContext);
    const [current, setCurrent] = useState({});

    useEffect(() => {
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
        <div>
            <div>
                <h1>{current.id}</h1>
            </div>
            <div>
                <h1>{current.headline}</h1>
            </div>
            <div>
                <img src={current.imageURL} />
            </div>
            <div>
                <p dangerouslySetInnerHTML={{ __html: current.desc }}></p>
            </div>
        </div>
    );
}

export default Currentpost;
