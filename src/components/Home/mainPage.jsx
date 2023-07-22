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
import { collection, onSnapshot } from "firebase/firestore";
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
                    spaceBetween={30}
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
                                    <img src={img.slider} className="image" />
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
