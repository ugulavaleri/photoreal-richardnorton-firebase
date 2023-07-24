import { useEffect, useState } from "react";
import "../styles/topics.scss";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../firebase";

export const UseFetchPosts = () => {
    const [wholeList, setWholeList] = useState([]);
    const [isLoading, setLoading] = useState(false);
    const [filtered, setFilter] = useState([]);

    useEffect(() => {
        setLoading(false);
        const fetchData = async () => {
            try {
                onSnapshot(collection(db, "users-post"), (doc) => {
                    const list = doc.docs.map((l) => ({
                        id: l.id,
                        ...l.data(),
                    }));
                    setWholeList(list);
                    setFilter(list);
                    setLoading(true);
                });
            } catch (error) {
                console.log(error);
            }
        };
        fetchData();
    }, []);

    return { isLoading, wholeList, setWholeList, setFilter, filtered };
};
