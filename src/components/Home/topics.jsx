import React, { useEffect, useState } from "react";
import "../../styles/topics.scss";
import Topic from "../Home/topic";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../../firebase";

function TopicsPage() {
    const [topics, setTopics] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                let id = onSnapshot(collection(db, "users-post"), (doc) => {
                    let list = [];
                    doc.docs.forEach((d) => {
                        console.log(d.id);
                        list.push({ id: d.id, ...d.data() });
                    });
                    setTopics(list);
                });
                console.log(id);
            } catch (error) {
                console.log(error);
            }
        };
        fetchData();
    }, []);

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
