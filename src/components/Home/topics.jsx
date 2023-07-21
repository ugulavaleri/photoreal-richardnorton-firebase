import "../../styles/topics.scss";
import Topic from "../Home/topic";
import { UseFetch } from "../../hooks/useFetch";
import UseSpinner from "../../hooks/useSpinner";
import { GlobalContext } from "../../context/globalContext";

function TopicsPage() {
    const { topics, isLoading, wholeList } = UseFetch(GlobalContext);

    // whole list for articles.
    console.log(wholeList);

    return (
        <div className="topicsContainer">
            <h3 className="topicsHeadline">Popular topics</h3>
            {isLoading ? (
                <div className="topicsList">
                    {topics.map((topic) => (
                        <Topic topic={topic} key={topic.id} />
                    ))}
                </div>
            ) : (
                <div className="spinnerBox">
                    <UseSpinner />
                </div>
            )}
        </div>
    );
}

export default TopicsPage;
