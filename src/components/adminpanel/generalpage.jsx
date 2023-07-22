import "../../styles/adminGeneral.scss";
// import { GlobalContext } from "../../context/globalContext";
import { UseFetch } from "../../hooks/useFetch";
import { doc, deleteDoc } from "firebase/firestore";
import { db } from "../../firebase";

function Generalpage() {
    const { setWholeList, wholeList, filtered } = UseFetch();

    // removes article from data base.
    const handleDelete = async (id) => {
        try {
            await deleteDoc(doc(db, "users-post", id));
            setWholeList((prev) => prev.filter((e) => e.id !== id));
        } catch (error) {
            console.log(error);
        }
    };

    // searchs doc in database.
    const handleSearch = (val) => {
        const filter = filtered.filter((e) =>
            e.headline.toLowerCase().includes(val.toLowerCase())
        );
        setWholeList(filter);
    };

    return (
        <div className="adminGeneral">
            <div className="innerAdminGeneral">
                <input
                    type="text"
                    placeholder="Search by headline.."
                    onChange={(e) => handleSearch(e.target.value)}
                />
                <ul>
                    {wholeList.length === 0 ? (
                        <h1>No result</h1>
                    ) : (
                        wholeList.map((eachList) => {
                            return (
                                <li className="entireList" key={eachList.id}>
                                    <div className="imageWrapper">
                                        <img src={eachList.postImageURL} />
                                        <h3>{eachList.headline}</h3>
                                    </div>
                                    <div className="removeButton">
                                        <button
                                            onClick={() =>
                                                handleDelete(eachList.id)
                                            }
                                        >
                                            X
                                        </button>
                                    </div>
                                </li>
                            );
                        })
                    )}
                </ul>
            </div>
        </div>
    );
}

export default Generalpage;
