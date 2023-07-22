import { useEffect, useState } from "react";
import "../styles/topics.scss";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../firebase";

export const UseFetch = () => {
    const [topics, setTopics] = useState([]);
    const [wholeList, setWholeList] = useState([]);
    const [isLoading, setLoading] = useState(false);
    // const [filtered, setFilter] = useState([wholeList]);
    const [filtered, setFilter] = useState([]);

    useEffect(() => {
        setLoading(false);
        const fetchData = async () => {
            try {
                onSnapshot(collection(db, "users-post"), (doc) => {
                    let displayList = [];
                    let entireList = [];
                    doc.docs.forEach((d, i) => {
                        if (i < 8) {
                            displayList.push({ id: d.id, ...d.data() });
                        }
                        entireList.push({ id: d.id, ...d.data() });
                    });
                    setWholeList(entireList);
                    setFilter(entireList);
                    setTopics(displayList);
                    setLoading(true);
                });
            } catch (error) {
                console.log(error);
            }
        };
        fetchData();
    }, []);

    return { topics, isLoading, wholeList, setWholeList, setFilter, filtered };
};
