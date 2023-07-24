import { useEffect } from "react";
import { UseFetch } from "../../hooks/useFetch";
import Template from "../Tamplate";

function Articles() {
    const { wholeList, isLoading } = UseFetch();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <Template
            topics={wholeList}
            isLoading={isLoading}
            topicsText="Articles"
        />
    );
}

export default Articles;
