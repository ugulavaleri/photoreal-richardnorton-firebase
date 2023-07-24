import { UseFetch } from "../../hooks/useFetch";
import React, { useEffect } from "react";
import Template from "../Tamplate";

function Home() {
    const { topics, isLoading } = UseFetch();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <Template
            topics={topics}
            isLoading={isLoading}
            topicsText="Popular Topics"
        />
    );
}

export default Home;
