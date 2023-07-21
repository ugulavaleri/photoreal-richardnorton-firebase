import React, { useRef } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import noProfile from "../../images/noimage.png";
import { useAddPost } from "../../hooks/useAddPost";
import UseSpinner from "../../hooks/useSpinner";

function Addpost() {
    // global reducer
    // every dispach method has proper type name.
    const { state, dispatch, handleSubmit, setValue, value } = useAddPost();

    const postInputRef = useRef(null);
    const handleUploadImage = () => {
        state.file === "" && postInputRef.current.click();
    };

    return (
        <div className="addPostContainer">
            <div className="postBox">
                <div className="authorInputBox">
                    <input
                        type="text"
                        placeholder="Author.."
                        onChange={(e) =>
                            dispatch({
                                type: "setAuthor",
                                payload: e.target.value,
                            })
                        }
                        value={state.author}
                    />
                    <input
                        type="text"
                        placeholder="headline.."
                        onChange={(e) =>
                            dispatch({
                                type: "setHeadline",
                                payload: e.target.value,
                            })
                        }
                        value={state.headline}
                    />
                    <select
                        onChange={(e) =>
                            dispatch({
                                type: "setCategory",
                                payload: e.target.value,
                            })
                        }
                    >
                        <option value="Adventure">Adventure</option>
                        <option value="Travel">Travel</option>
                        <option value="Fashion">Fashion</option>
                        <option value="Technology">Technology</option>
                        <option value="Branding">Branding</option>
                    </select>
                </div>
                <div className="shortDescriptionDiv">
                    <input
                        type="text"
                        placeholder="short description.."
                        value={state.shortDesc}
                        onChange={(e) =>
                            dispatch({
                                type: "setShortDesc",
                                payload: e.target.value,
                            })
                        }
                    />
                </div>
                <div className="postText">
                    <ReactQuill
                        theme="snow"
                        value={value}
                        onChange={setValue}
                    />
                </div>
                <div className="PostTextIntro">
                    <div>
                        <img
                            src={
                                state.file
                                    ? URL.createObjectURL(state.file)
                                    : noProfile
                            }
                            onClick={handleUploadImage}
                        />
                        <input
                            type="file"
                            onChange={(e) =>
                                dispatch({
                                    type: "setFile",
                                    payload: e.target.files[0],
                                })
                            }
                            style={{ display: "none" }}
                            ref={postInputRef}
                        />
                        <span>Upload Image</span>
                    </div>
                </div>
                <div className="submitBtn">
                    {state.successfulyUploaded && (
                        <span className="uploadMessage">
                            Post added Successfully!
                        </span>
                    )}
                    {state.percentage < 100 && state.percentage !== null && (
                        <UseSpinner />
                    )}
                    <button
                        onClick={handleSubmit}
                        disabled={
                            state.percentage < 100 && state.percentage !== null
                        }
                    >
                        Submit
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Addpost;
