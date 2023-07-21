import React from "react";
import bg from "../../images/bgImage.png";
import Header from "./header";
import "../../styles/header.scss";

function MainPage() {
    return (
        <>
            <Header />
            <div className="mainPageContainer">
                <div>
                    <img src={bg} />
                </div>
                <div className="innerContainer">
                    <div className="SliderText">
                        <span className="category">ADVENTURE</span>
                        <h2 className="sliderName">
                            Richird Norton photorealistic rendering as real
                            photos
                        </h2>
                        <div className="postDescriptionDiv">
                            <span className="postAddTime">21.07.2023</span>

                            <p className="postDescription">
                                Progressively incentivize cooperative systems
                                through technically sound functionalities. The
                                credibly productivate seamless data.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default MainPage;
