import { Link } from "react-router-dom";
import "../../styles/notFound.scss";

function Notfound() {
    return (
        <div className="errorContainer">
            <h1>404</h1>
            <div>
                <Link to={"/"}>Back Home</Link>
            </div>
        </div>
    );
}

export default Notfound;
