import React, { useContext, useEffect } from "react";
import Template from "../Tamplate";
import { GlobalContext } from "../../context/globalContext";

function Home() {
    const { wholeList, isLoading } = useContext(GlobalContext);
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <Template
            topics={wholeList.slice(0, 8)}
            isLoading={isLoading}
            topicsText="Popular Topics"
        />
    );
}

export default Home;
