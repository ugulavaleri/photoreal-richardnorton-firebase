import { addDoc, collection, onSnapshot } from "firebase/firestore";
import { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../context/globalContext";
import { db } from "../firebase";
import { S } from "../reducers/SliderReducer";
import { UseGetUrl } from "./useGetUrl";

export function UseAddSlider() {
    const { state, dispatch } = S();
    const { isLoading, setLoading } = UseGetUrl(state, dispatch, "uploadImage");

    const [isDataFetched, setDataFetched] = useState(false);
    const { currentDate } = useContext(GlobalContext);

    useEffect(() => {
        if (isDataFetched) {
            return;
        }
        try {
            onSnapshot(collection(db, "SliderImages"), (doc) => {
                let list = [];
                doc.docs.forEach((d) => {
                    list.push({
                        id: d.id,
                        slider: d.data().url,
                        sliderHeadline: d.data().sliderHeadline,
                        sliderTitle: d.data().sliderDesc,
                        time: currentDate,
                    });
                });
                dispatch({ type: "fillList", payload: list });
            });
            setDataFetched(true);
        } catch (error) {
            console.log(error);
        }
    }, [state.list]);

    const handleUploadSlider = async () => {
        setLoading(false);
        if (state.img !== "") {
            await addDoc(collection(db, "SliderImages"), {
                sliderHeadline: state.sliderHeadline,
                sliderDesc: state.sliderTitle,
                url: state.img,
            });
        } else {
            window.alert("you must add at least slider image!");
        }
        setLoading(true);
        dispatch({ type: "clean" });
    };

    return { state, dispatch, isLoading, handleUploadSlider };
}
