import "../../styles/topics.scss";
import Topic from "../Home/topic";
import { UseFetch } from "../../hooks/useFetch";

function TopicsPage() {
    const topics = UseFetch();

    return (
        <div className="topicsContainer">
            <h3 className="topicsHeadline">Popular topics</h3>
            <div className="topicsList">
                {topics.map((topic) => (
                    <Topic topic={topic} key={topic.id} />
                ))}
            </div>
        </div>
    );
}

export default TopicsPage;
