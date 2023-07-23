import { UseFetch } from "../../hooks/useFetch";
import "../../styles/articles.scss";
import Footer from "../Home/footer";
import Header from "../Home/header";
import TopicsPage from "../Home/topics";
import articlesBg from "../../images/articlesBg.png";

function Articles() {
    const { wholeList, isLoading } = UseFetch();

    return (
        <>
            <div className="articlesHeader">
                <Header />
                <div className="articlesImageTitle">
                    <img src={articlesBg} alt="articleBg" />
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
