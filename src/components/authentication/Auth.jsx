import "../../styles/auth.scss";
import React, { useState } from "react";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../../firebase";
import { useNavigate } from "react-router";
import { useContext } from "react";
import { AuthContext } from "../../context/authContext";

function Register() {
    const { dispatch } = useContext(AuthContext);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false);

    const navigate = useNavigate();

    const handleRegister = () => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                dispatch({ type: "LOGIN", payload: user });

                navigate("/admin");
            })
            .catch((error) => {
                setError(true);
                console.log(error);
            });
    };
    const handleLogin = () => {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                dispatch({ type: "LOGIN", payload: user });

                navigate("/admin");
            })
            .catch((error) => {
                setError(true);
                console.log(error);
            });
    };

    return (
        <div className="AuthContainer">
            <div className="innerAuthContainer">
                <div>
                    <input
                        type="email"
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="email.."
                    />
                </div>
                <div>
                    <input
                        type="password"
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="password.."
                    />
                </div>
                <div className="btnDiv">
                    <button type="submit" onClick={handleRegister}>
                        Register
                    </button>
                    <button type="submit" onClick={handleLogin}>
                        Login
                    </button>
                </div>
                {error && (
                    <div className="wrongTitle">
                        <span>
                            Something wents wrong! (you need '@' in login and at
                            least 6 char in password
                        </span>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Register;
