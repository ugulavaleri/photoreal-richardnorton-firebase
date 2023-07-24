import { useContext } from "react";
import { GlobalContext } from "../../context/globalContext";
import Template from "../Tamplate";

function Articles() {
    const { wholeList, isLoading } = useContext(GlobalContext);

    return (
        <Template
            topics={wholeList}
            isLoading={isLoading}
            topicsText="Articles"
        />
    );
}

export default Articles;
