import "../../styles/topics.scss";
import Topic from "../Home/topic";
import UseSpinner from "../../hooks/useSpinner";
import { useEffect, useState } from "react";
import { UseFetch } from "../../hooks/useFetch";

function TopicsPage({ topics, isLoading, topicsText }) {
    const [chosenCategory, setChosenCategory] = useState("All");
    const [filtered, setFiltered] = useState(topics);

    const Category = [
        "All",
        "Adventure",
        "Travel",
        "Fashion",
        "Technology",
        "Branding",
    ];

    // uncomplete filter.
    useEffect(() => {
        const f = topics.filter((e) => e.category === chosenCategory);
        setFiltered(f);
    }, [chosenCategory]);

    const handeFilter = (c) => {
        setChosenCategory(c);
    };

    return (
        <div className="topicsContainer">
            <h3 className="topicsHeadline">{topicsText}</h3>
            <div className="CategoryWrapper">
                {Category.map((c, i) => (
                    <span
                        key={i}
                        className="filterByCategory"
                        style={{
                            color: c === chosenCategory ? "#D4A373" : "black",
                        }}
                        onClick={() => handeFilter(c)}
                    >
                        {c}
                    </span>
                ))}
            </div>
            {isLoading ? (
                <div className="topicsList">
                    {chosenCategory === "All"
                        ? topics.map((topic) => (
                              <Topic topic={topic} key={topic.id} />
                          ))
                        : filtered.map((topic) => (
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
