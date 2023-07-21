import { useContext } from "react";
import { useNavigate } from "react-router";
import { GlobalContext } from "../../context/globalContext";

function Topic({ topic }) {
    // to convert html content into text.
    const editorText = topic.desc;

    const { currentPostId, setCurrentPostId } = useContext(GlobalContext);

    const navigate = useNavigate(null);

    console.log(topic);

    const handleNavigateCurrentPost = () => {
        setCurrentPostId(topic.id);
        navigate("/currentpost");
    };

    return (
        <div className="topicWrapper" onClick={handleNavigateCurrentPost}>
            <div className="imagePart">
                <img src={topic.imageURL} />
                <span>{topic.category.toUpperCase()}</span>
            </div>
            <div className="textPart">
                <span>{topic.time}</span>
                <h4>{topic.headline}</h4>
                <div
                    dangerouslySetInnerHTML={{ __html: editorText }}
                    className="post"
                ></div>
            </div>
        </div>
    );
}

export default Topic;
