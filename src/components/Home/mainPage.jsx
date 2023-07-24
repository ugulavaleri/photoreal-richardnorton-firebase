import { useEffect, useState } from "react";
import "../../styles/header.scss";
import "../../styles/mainPage.scss";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../../firebase";
import { S } from "../../reducers/SliderReducer";

function MainPage() {
    const { state, dispatch } = S();

    useEffect(() => {
        window.scrollTo(0, 0);
        const sub = onSnapshot(collection(db, "SliderImages"), (doc) => {
            let list = [];
            doc.docs.forEach((d) => {
                list.push({
                    id: d.id,
                    slider: d.data().url,
                    sliderHeadline: d.data().sliderHeadline,
                    sliderTitle: d.data().sliderDesc,
                    time: 12234,
                });
            });
            dispatch({ type: "fillList", payload: list });
        });
        return () => sub();
    }, []);

    return (
        <>
            <div className="mainPageContainer">
                <Swiper
                    spaceBetween={0}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                >
                    {state.list.map((img) => {
                        console.log("fetched list");
                        return (
                            <SwiperSlide key={img.id}>
                                <div className="sliderWrapper">
                                    <img
                                        src={img.slider}
                                        className="image"
                                        alt="Slider Image"
                                    />
                                    <div className="sliderTextContainer">
                                        <h2>{img.sliderHeadline}</h2>
                                        <div className="slidertitleDiv">
                                            <span>{img.time}</span>
                                            <p>{img.sliderTitle}</p>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        );
                    })}
                </Swiper>
            </div>
        </>
    );
}

export default MainPage;
