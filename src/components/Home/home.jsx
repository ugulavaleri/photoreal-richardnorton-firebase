import TopicsPage from "./topics";
import Footer from "./footer";
import MainPage from "./mainPage";

function Home() {
    return (
        <div className="container">
            <MainPage />
            <TopicsPage />
            <Footer />
        </div>
    );
}

export default Home;
