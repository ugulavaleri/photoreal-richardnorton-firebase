import { addDoc, collection } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { useEffect, useRef, useState } from "react";
import { db, storage } from "../../firebase";
import UseSpinner from "../../hooks/useSpinner";
import "../../styles/addSlider.scss";

function Addslider() {
    const fileInputRef = useRef(null);
    const [isLoading, setLoading] = useState(true);
    const [sliderHeadline, setSliderHeadline] = useState("");
    const [sliderTitle, setSliderTitle] = useState("");

    const selectFile = () => {
        fileInputRef.current.click();
    };
    const [file, setFile] = useState("");
    const [img, setImg] = useState("");

    //
    useEffect(() => {
        const upload = async () => {
            if (!file) return;
            setLoading(false);
            const uniqueImgName = new Date().getTime() + file.name;

            const storageRef = ref(storage, uniqueImgName);
            const uploadTask = uploadBytesResumable(storageRef, file);
            try {
                await uploadTask;
                const downloadURL = await getDownloadURL(
                    uploadTask.snapshot.ref
                );
                setImg(downloadURL);
                setLoading(true);
            } catch (error) {
                console.log(error);
            }
        };
        upload();
    }, [file]);

    const handleUploadSlider = async () => {
        setLoading(false);
        await addDoc(collection(db, "SliderImages"), {
            sliderHeadline: sliderHeadline,
            sliderDesc: sliderTitle,
            url: img,
        });
        setLoading(true);
        setFile("");
        setSliderHeadline("");
        setSliderTitle("");
    };

    return (
        <div className="addSliderContainer">
            <div className="innerAddSliderContainer">
                <div className="addImageBlock">
                    <div className="innerAddImageBlock">
                        {isLoading ? (
                            file !== "" ? (
                                <img src={img} className="image" />
                            ) : (
                                <>
                                    <p>Select File</p>
                                    <input
                                        type="file"
                                        className="fileInput"
                                        ref={fileInputRef}
                                        onChange={(e) =>
                                            setFile(e.target.files[0])
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
                        onChange={(e) => setSliderHeadline(e.target.value)}
                    />
                    <input
                        type="text"
                        placeholder="Slider title.."
                        onChange={(e) => setSliderTitle(e.target.value)}
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
