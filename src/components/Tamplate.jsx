import "../styles/articles.scss";
import Footer from "./Home/footer";
import Header from "./Home/header";
import TopicsPage from "./Home/topics";
import MainPage from "./Home/mainPage";
import { memo } from "react";

function Template({ topics, isLoading, topicsText }) {
    return (
        <>
            <Header />
            <MainPage />
            <TopicsPage
                topics={topics}
                isLoading={isLoading}
                topicsText={topicsText}
            />
            <Footer />
        </>
    );
}

export default memo(Template);
