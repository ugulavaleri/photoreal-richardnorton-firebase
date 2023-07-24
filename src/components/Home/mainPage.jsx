import "../../styles/mainPage.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import UseFetchSliders from "../../hooks/useFetchSliders";

function MainPage() {
    const state = UseFetchSliders();

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
                    {state.list.map((img) => (
                        <SwiperSlide key={img.id}>
                            <div className="sliderWrapper">
                                <img
                                    src={img.slider}
                                    className="image"
                                    alt="Slider Image"
                                    loading="lazy"
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
                    ))}
                </Swiper>
            </div>
        </>
    );
}

export default MainPage;
