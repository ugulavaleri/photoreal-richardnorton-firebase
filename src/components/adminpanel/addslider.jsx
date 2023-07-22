import { addDoc, collection } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { useEffect, useRef, useState } from "react";
import { db, storage } from "../../firebase";
import "../../styles/addSlider.scss";

function Addslider() {
    const fileInputRef = useRef(null);

    const selectFile = () => {
        fileInputRef.current.click();
    };
    const [file, setFile] = useState("");
    const [img, setImg] = useState("");

    //
    useEffect(() => {
        const upload = async () => {
            if (!file) return;

            const uniqueImgName = new Date().getTime() + file.name;

            const storageRef = ref(storage, uniqueImgName);
            const uploadTask = uploadBytesResumable(storageRef, file);
            try {
                await uploadTask;
                const downloadURL = await getDownloadURL(
                    uploadTask.snapshot.ref
                );
                setImg(downloadURL);
            } catch (error) {
                console.log(error);
            }
        };
        upload();
    }, [file]);

    const handleUploadSlider = async () => {
        await addDoc(collection(db, "SliderImages"), {
            url: img,
        });
        setFile("");
    };

    return (
        <div className="addSliderContainer">
            <div className="innerAddSliderContainer">
                <div className="addImageBlock">
                    <div className="innerAddImageBlock">
                        {file !== "" ? (
                            <img src={img} className="image" />
                        ) : (
                            <>
                                <p>Select File</p>
                                <input
                                    type="file"
                                    className="fileInput"
                                    ref={fileInputRef}
                                    onChange={(e) => setFile(e.target.files[0])}
                                />
                                <button onClick={selectFile}>
                                    Choose file
                                </button>
                            </>
                        )}
                    </div>
                </div>
                <div className="uploadBtn">
                    <button onClick={handleUploadSlider}>Upload</button>
                </div>
            </div>
        </div>
    );
}

export default Addslider;
