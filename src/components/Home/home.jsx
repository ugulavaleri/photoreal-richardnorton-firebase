import TopicsPage from "./topics";
import Footer from "./footer";
import MainPage from "./mainPage";
import { UseFetch } from "../../hooks/useFetch";

function Home() {
    const { topics, isLoading } = UseFetch();

    return (
        <div className="container">
            <MainPage />
            <TopicsPage
                topics={topics}
                isLoading={isLoading}
                topicsText="Popular topics"
            />
            <Footer />
        </div>
    );
}

export default Home;
