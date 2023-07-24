import { collection, onSnapshot } from "firebase/firestore";
import { useContext, useEffect } from "react";
import { GlobalContext } from "../context/globalContext";
import { db } from "../firebase";
import { S } from "../reducers/SliderReducer";

function UseFetchSliders() {
    const { state, dispatch } = S();
    const { currentDate } = useContext(GlobalContext);

    useEffect(() => {
        const sub = onSnapshot(collection(db, "SliderImages"), (doc) => {
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
        return () => sub();
    }, []);

    return state;
}

export default UseFetchSliders;
