import React, { useContext, useEffect, useState } from "react";
// import bg from "../../images/bgImage.png";
import Header from "./header";
import "../../styles/header.scss";
import "../../styles/mainPage.scss";
import "../../App.css";
import defaultSliderImage from "../../images/articlesBg.png";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { collection, onSnapshot, serverTimestamp } from "firebase/firestore";
import { db } from "../../firebase";

function MainPage() {
    const [list, setList] = useState([]);

    useEffect(() => {
        try {
            onSnapshot(collection(db, "SliderImages"), (doc) => {
                let list = [];
                doc.docs.forEach((d) => {
                    list.push({
                        id: d.id,
                        slider: d.data().url,
                        sliderHeadline: d.data().sliderHeadline,
                        sliderTitle: d.data().sliderDesc,
                        time: `${new Date().getDate()}.${
                            new Date().getMonth() < 10
                                ? "0" + new Date().getMonth()
                                : new Date().getMonth()
                        }.${new Date().getFullYear()}`,
                    });
                });
                setList(list);
            });
        } catch (error) {
            console.log(error);
        }
    }, []);

    return (
        <>
            <Header />
            <div className="mainPageContainer">
                <Swiper
                    spaceBetween={0}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                >
                    {list.length === 0 ? (
                        <SwiperSlide>
                            <img src={defaultSliderImage} className="image" />
                        </SwiperSlide>
                    ) : (
                        list.map((img) => {
                            return (
                                <SwiperSlide key={img.id}>
                                    <div className="sliderWrapper">
                                        <img
                                            src={img.slider}
                                            className="image"
                                        />
                                        <div className="sliderTextContainer">
                                            <h2>{img.sliderHeadline}</h2>
                                            <div className="slidertitleDiv">
                                                <span>{img.time}</span>
                                                <span>-----</span>
                                                <p>{img.sliderTitle}</p>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            );
                        })
                    )}
                </Swiper>
            </div>
        </>
    );
}

export default MainPage;
