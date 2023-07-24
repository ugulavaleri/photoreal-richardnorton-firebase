import "../styles/articles.scss";
import "../styles/topics.scss";
import Footer from "./Home/footer";
import Header from "./Home/header";
import MainPage from "./Home/mainPage";
import TopicsPage from "./Home/topics";

function Template({ topics, isLoading, topicsText }) {
    return (
        <>
            <Header />
            <div className="wrapp">
                <MainPage />
            </div>
            <TopicsPage
                topics={topics}
                isLoading={isLoading}
                topicsText={topicsText}
            />
            <Footer />
        </>
    );
}

export default Template;
