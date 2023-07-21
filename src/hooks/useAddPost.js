import { useReducer, useEffect, useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db, storage } from "../firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

const reducer = (state, action) => {
    switch (action.type) {
        case "updatePercentage":
            return { ...state, percentage: action.payload };
        case "setImageURL":
            return { ...state, image: action.payload };
        case "setHeadline":
            return { ...state, headline: action.payload };
        case "setCategory":
            return { ...state, category: action.payload };
        case "setFile":
            return { ...state, file: action.payload };
        case "setTextarea":
            return { ...state, textarea: action.payload };
        case "setAuthor":
            return { ...state, author: action.payload };
        case "clean":
            return {
                author: "",
                textarea: "",
                percentage: null,
                headline: "",
                category: "Adventure",
                image: "",
                file: "",
            };
        default:
            return state;
    }
};

// fetch custom hook
export const useAddPost = () => {
    const [value, setValue] = useState("");
    const [state, dispatch] = useReducer(reducer, {
        author: "",
        textarea: "",
        percentage: null,
        headline: "",
        category: "Adventure",
        image: "",
        file: "",
    });

    // to get current date by specific format
    const today = new Date();
    const yyyy = today.getFullYear();
    let mm = today.getMonth() + 1;
    let dd = today.getDate();
    if (dd < 10) dd = "0" + dd;
    if (mm < 10) mm = "0" + mm;
    const formattedToday = dd + "." + mm + "." + yyyy;

    // uploads an image into firebase storage.
    useEffect(() => {
        const upload = () => {
            const uniqueImageName = new Date().getTime() + state.file.name;

            const storageRef = ref(storage, uniqueImageName);
            const uploadTask = uploadBytesResumable(storageRef, state.file);

            uploadTask.on(
                "state_changed",
                (snapshot) => {
                    const progress =
                        (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                    console.log("Upload is " + progress + "% done");
                    // setPercentage(progress);
                    dispatch({ type: "updatePercentage", payload: progress });
                    switch (snapshot.state) {
                        case "paused":
                            console.log("Upload is paused");
                            break;
                        case "running":
                            console.log("Upload is running");
                            break;
                        default:
                            break;
                    }
                },
                (error) => {
                    console.log(error);
                },
                () => {
                    getDownloadURL(uploadTask.snapshot.ref).then(
                        (downloadURL) => {
                            // setImage(downloadURL);
                            dispatch({
                                type: "setImageURL",
                                payload: downloadURL,
                            });
                        }
                    );
                }
            );
        };
        state.file && upload();
    }, [state.file]);

    // uploads post
    const handleSubmit = async () => {
        try {
            if (
                state.author.trim() !== "" &&
                state.headline.trim() !== "" &&
                state.category.trim() !== "" &&
                value.trim() !== "" &&
                state.file
            ) {
                await addDoc(collection(db, "users-post"), {
                    author: state.author,
                    headline: state.headline,
                    category: state.category,
                    imageURL: state.image,
                    desc: value,
                    time: formattedToday,
                });
                setValue("");
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
        handleSubmit,
        formattedToday,
    };
};
