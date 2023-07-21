import { useEffect, useState } from "react";
import "../styles/topics.scss";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../firebase";

export const UseFetch = () => {
    const [topics, setTopics] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                onSnapshot(collection(db, "users-post"), (doc) => {
                    let list = [];
                    doc.docs.forEach((d) => {
                        list.push({ id: d.id, ...d.data() });
                    });
                    setTopics(list);
                });
            } catch (error) {
                console.log(error);
            }
        };
        fetchData();
    }, []);

    return topics;
};
