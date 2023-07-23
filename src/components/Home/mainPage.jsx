import { useEffect } from "react";
import Header from "./header";
import "../../styles/header.scss";
import "../../styles/mainPage.scss";
import defaultSliderImage from "../../images/articlesBg.webp";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { UseAddSlider } from "../../hooks/useAddSlider";

function MainPage() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, ["/"]);

    const { state } = UseAddSlider();
    console.log(state);

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
                    {state.list.length === 0 ? (
                        <img
                            src={defaultSliderImage}
                            className="image"
                            alt="sliderImage"
                        />
                    ) : (
                        state.list.map((img) => (
                            <SwiperSlide key={img.id}>
                                <div className="sliderWrapper">
                                    <img
                                        src={img.slider}
                                        className="image"
                                        alt="currentSliderImage"
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
                        ))
                    )}
                </Swiper>
            </div>
        </>
    );
}

export default MainPage;
