import { useContext, useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase";
import { P } from "../reducers/postReducer";
import { UseGetUrl } from "./useGetUrl";
import { GlobalContext } from "../context/globalContext";

// fetch custom hook
export const useAddPost = () => {
    const [value, setValue] = useState("");

    const { state, dispatch } = P();
    const { currentDate } = useContext(GlobalContext);
    const { isLoading, setLoading } = UseGetUrl(
        state,
        dispatch,
        "setPostImageURL"
    );

    console.log(isLoading);

    // uploads post
    const HandleSubmit = async () => {
        try {
            if (
                state.author.trim() &&
                state.headline.trim() &&
                state.category.trim() &&
                value.trim() &&
                state.file
            ) {
                await addDoc(collection(db, "users-post"), {
                    author: state.author,
                    headline: state.headline,
                    shortDesc: state.shortDesc,
                    category: state.category,
                    postImageURL: state.postImage,
                    entireBlog: value,
                    time: currentDate,
                });
                setValue("");
                // it cleans and also turns of submit message
                dispatch({ type: "clean" });
            } else {
                window.alert("you must fill all the gap and image");
            }
        } catch (error) {
            console.log(error);
        }
    };
    return {
        value,
        setValue,
        state,
        dispatch,
        HandleSubmit,
        isLoading,
    };
};
