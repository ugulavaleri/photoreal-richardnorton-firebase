import "../../styles/topics.scss";
import Topic from "../Home/topic";
import UseSpinner from "../../hooks/useSpinner";
import { memo, useEffect, useState } from "react";

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

    useEffect(() => {
        const flt = topics.filter((e) => e.category === chosenCategory);
        setFiltered(flt);
    }, [chosenCategory]);

    const handeFilter = (c) => {
        setChosenCategory(c);
    };

    // returns whole list if user choose 'All'
    let displayData = chosenCategory === "All" ? topics : filtered;

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
                    {displayData.map((topic) => (
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

export default memo(TopicsPage);
