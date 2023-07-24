import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebase";
import { S } from "../reducers/SliderReducer";
import { UseGetUrl } from "./useGetUrl";

export function UseAddSlider() {
    const { state, dispatch } = S();
    const { isLoading, setLoading } = UseGetUrl(state, dispatch, "uploadImage");

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
