import "../../styles/addSlider.scss";
import { useRef } from "react";
import UseSpinner from "../../hooks/useSpinner";
import { UseAddSlider } from "../../hooks/useAddSlider";

function Addslider() {
    const fileInputRef = useRef(null);
    const selectFile = () => {
        fileInputRef.current.click();
    };
    const { isLoading, state, dispatch, handleUploadSlider } = UseAddSlider();

    return (
        <div className="addSliderContainer">
            <div className="innerAddSliderContainer">
                <div className="addImageBlock">
                    <div className="innerAddImageBlock">
                        {isLoading ? (
                            state.file !== "" ? (
                                <img
                                    src={state.img}
                                    className="image"
                                    alt="uploaded"
                                />
                            ) : (
                                <>
                                    <p>Select File</p>
                                    <input
                                        type="file"
                                        className="fileInput"
                                        ref={fileInputRef}
                                        onChange={(e) =>
                                            dispatch({
                                                type: "setFile",
                                                payload: e.target.files[0],
                                            })
                                        }
                                    />
                                    <button onClick={selectFile}>
                                        Choose file
                                    </button>
                                </>
                            )
                        ) : (
                            <UseSpinner />
                        )}
                    </div>
                </div>
                <div className="sliderText">
                    <input
                        type="text"
                        placeholder="Slider headline.."
                        value={state.sliderHeadline}
                        onChange={(e) =>
                            dispatch({
                                type: "setSliderHeadline",
                                payload: e.target.value,
                            })
                        }
                    />
                    <input
                        type="text"
                        placeholder="Slider title.."
                        value={state.sliderTitle}
                        onChange={(e) =>
                            dispatch({
                                type: "setSliderTitle",
                                payload: e.target.value,
                            })
                        }
                    />
                </div>
                <div className="uploadBtn">
                    <button onClick={handleUploadSlider}>Upload</button>
                </div>
            </div>
        </div>
    );
}

export default Addslider;
