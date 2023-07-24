import { useReducer } from "react";
const reducer = (state, action) => {
    switch (action.type) {
        case "updatePercentage":
            return {
                ...state,
                successfulyUploaded: false,
                percentage: action.payload,
            };
        case "setPostImageURL":
            return {
                ...state,
                successfulyUploaded: false,
                postImage: action.payload,
            };
        case "setHeadline":
            return {
                ...state,
                successfulyUploaded: false,
                headline: action.payload,
            };
        case "setCategory":
            return {
                ...state,
                successfulyUploaded: false,
                category: action.payload,
            };
        case "setFile":
            console.log(action.payload);
            return {
                ...state,
                successfulyUploaded: false,
                file: action.payload,
            };
        case "setShortDesc":
            return {
                ...state,
                successfulyUploaded: false,
                shortDesc: action.payload,
            };
        case "setAuthor":
            return {
                ...state,
                successfulyUploaded: false,
                author: action.payload,
            };
        case "clean":
            return {
                author: "",
                shortDesc: "",
                percentage: null,
                headline: "",
                category: "Adventure",
                postImage: "",
                file: "",
                successfulyUploaded: true,
            };
        default:
            return state;
    }
};
export const P = () => {
    const [state, dispatch] = useReducer(reducer, {
        author: "",
        shortDesc: "",
        percentage: null,
        headline: "",
        category: "Adventure",
        postImage: "",
        file: "",
    });

    return { dispatch, state };
};
