import { UseFetch } from "../../hooks/useFetch";
import "../../styles/articles.scss";
import Footer from "../Home/footer";
import Header from "../Home/header";
import articlesBg from "../../images/articlesBg.png";
import TopicsPage from "../Home/topics";

function Articles() {
    const Category = [
        "All",
        "Adventure",
        "Travel",
        "Fashion",
        "Technology",
        "Branding",
    ];

    const { wholeList, isLoading } = UseFetch();
    return (
        <>
            <div className="articlesHeader">
                <Header />
                <div className="articlesImageTitle">
                    <img src={articlesBg} />
                    <h1>Articles</h1>
                </div>
            </div>
            <div className="wholeListWrapper">
                <TopicsPage
                    topics={wholeList}
                    isLoading={isLoading}
                    topicsText="Articles"
                />
            </div>
            <Footer />
        </>
    );
}

export default Articles;
