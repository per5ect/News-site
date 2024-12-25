import {useState} from "react";
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";
import {loginUser} from "../services/auth-service.js";
import {login} from "../store/authSlice.js";

export function useLogin() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const user = await loginUser(email, password);
            dispatch(login(user));
            setError(null);
            navigate("/");
        } catch (err) {
            setError(err.message);
        }
    };

    return {email,password, setEmail, setPassword, error, handleSubmit,dispatch, navigate }
}