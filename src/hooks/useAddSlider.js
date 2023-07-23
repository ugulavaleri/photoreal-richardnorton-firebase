import { addDoc, collection } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { useEffect, useReducer, useState } from "react";
import { db, storage } from "../firebase";
import { reducer } from "../hooks/useAddSliderReducer";

export function UseAddSlider() {
    const [state, dispatch] = useReducer(reducer, {
        sliderHeadline: "",
        sliderTitle: "",
        file: "",
        img: "",
    });
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        const upload = async () => {
            if (!state.file) return;
            setLoading(false);
            const uniqueImgName = new Date().getTime() + state.file.name;

            const storageRef = ref(storage, uniqueImgName);
            const uploadTask = uploadBytesResumable(storageRef, state.file);
            try {
                await uploadTask;
                const downloadURL = await getDownloadURL(
                    uploadTask.snapshot.ref
                );
                dispatch({ type: "uploadImage", payload: downloadURL });
                setLoading(true);
            } catch (error) {
                console.log(error);
            }
        };
        upload();
    }, [state.file]);

    const handleUploadSlider = async () => {
        setLoading(false);
        await addDoc(collection(db, "SliderImages"), {
            sliderHeadline: state.sliderHeadline,
            sliderDesc: state.sliderTitle,
            url: state.img,
        });
        setLoading(true);
        dispatch({ type: "clean" });
    };

    return { state, dispatch, isLoading, handleUploadSlider };
}
