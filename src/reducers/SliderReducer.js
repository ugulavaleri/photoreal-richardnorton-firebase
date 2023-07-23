import { useReducer } from "react";
const reducer = (state, action) => {
    switch (action.type) {
        case "uploadImage":
            return {
                ...state,
                img: action.payload,
            };
        case "setFile":
            return {
                ...state,
                file: action.payload,
            };
        case "fillList":
            return {
                ...state,
                list: action.payload,
            };
        case "setSliderHeadline":
            return {
                ...state,
                sliderHeadline: action.payload,
            };
        case "setSliderTitle":
            return {
                ...state,
                sliderTitle: action.payload,
            };
        case "clean":
            return {
                ...state,
                file: "",
                sliderHeadline: "",
                sliderTitle: "",
            };
        default:
            break;
    }
};
export const S = () => {
    const [state, dispatch] = useReducer(reducer, {
        sliderHeadline: "",
        sliderTitle: "",
        file: "",
        img: "",
        list: [],
    });
    return { state, dispatch };
};
