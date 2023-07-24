import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { useEffect, useState } from "react";
import { storage } from "../firebase";

export function UseGetUrl(state, dispatch, dispatchType) {
    const [isLoading, setLoading] = useState(true);
    const [isDataFetched, setDataFetched] = useState(false);

    useEffect(() => {
        if (isDataFetched) {
            return;
        }
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
                dispatch({ type: dispatchType, payload: downloadURL });
                setLoading(true);
                setDataFetched(true);
            } catch (error) {
                console.log(error);
            }
        };
        upload();
    }, [state.file]);

    return { isLoading, setLoading };
}
