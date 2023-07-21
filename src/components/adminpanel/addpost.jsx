import React, { useContext, useEffect, useRef, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import noProfile from "../../images/noimage.png";
import { collection, addDoc, doc, setDoc } from "firebase/firestore";
import { db, storage } from "../../firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { GlobalContext } from "../../context/globalContext";

function Addpost() {
    const fileInputRef = useRef(null);
    const [value, setValue] = useState("");
    const [percentage, setPercentage] = useState(null);

    const [author, setAuthor] = useState("");
    const [headline, setHeadline] = useState("");
    const [category, setCategory] = useState("Adventure");
    const [image, setImage] = useState("");
    const [file, setFile] = useState("");

    const handleUpload = () => {
        fileInputRef.current.click();
    };
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
            const uniqueImageName = new Date().getTime() + file.name;

            const storageRef = ref(storage, uniqueImageName);
            const uploadTask = uploadBytesResumable(storageRef, file);

            uploadTask.on(
                "state_changed",
                (snapshot) => {
                    const progress =
                        (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                    console.log("Upload is " + progress + "% done");
                    setPercentage(progress);
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
                            setImage(downloadURL);
                        }
                    );
                }
            );
        };
        file && upload();
    }, [file]);

    // uploads post
    const handleSubmit = async () => {
        try {
            if (
                author.trim() !== "" &&
                headline.trim() !== "" &&
                category.trim() !== "" &&
                value.trim() !== "" &&
                file
            ) {
                await addDoc(collection(db, "users-post"), {
                    author: author,
                    headline: headline,
                    category: category,
                    imageURL: image,
                    desc: value,
                    time: formattedToday,
                });
                setAuthor("");
                setCategory("Adventure");
                setHeadline("");
                setPercentage(null);
                setFile("");
                setValue("");
                setImage("");
            } else {
                window.alert("you must fill all the gap and image");
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="addPostContainer">
            <div className="postBox">
                <div className="authorInputBox">
                    <input
                        type="text"
                        placeholder="Author.."
                        onChange={(e) => setAuthor(e.target.value)}
                        value={author}
                    />
                    <div>
                        <img
                            src={file ? URL.createObjectURL(file) : noProfile}
                            onClick={handleUpload}
                        />
                        <input
                            type="file"
                            onChange={(e) => setFile(e.target.files[0])}
                            style={{ display: "none" }}
                            ref={fileInputRef}
                            // value={file}
                        />
                    </div>
                </div>
                <div className="PostTextIntro">
                    <input
                        type="text"
                        placeholder="headline.."
                        onChange={(e) => setHeadline(e.target.value)}
                        value={headline}
                    />
                    <select onChange={(e) => setCategory(e.target.value)}>
                        <option value="Adventure">Adventure</option>
                        <option value="Travel">Travel</option>
                        <option value="Fashion">Fashion</option>
                        <option value="Technology">Technology</option>
                        <option value="Branding">Branding</option>
                    </select>
                </div>
                <div className="postText">
                    <ReactQuill
                        theme="snow"
                        value={value}
                        onChange={setValue}
                    />
                </div>
                <div className="submitBtn">
                    <button
                        onClick={handleSubmit}
                        disabled={percentage < 100 && percentage !== null}
                    >
                        Submit
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Addpost;
