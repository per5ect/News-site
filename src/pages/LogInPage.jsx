import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom"; // Импортируем useNavigate
import { login } from "../store/authSlice";
import { loginUser } from "../services/authService.js";

export function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);

    const dispatch = useDispatch();
    const navigate = useNavigate(); // Инициализируем useNavigate

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const user = await loginUser(email, password);
            dispatch(login(user)); // Сохраняем пользователя в Redux
            setError(null);
            navigate("/"); // Перенаправляем на главную страницу
        } catch (err) {
            setError(err.message);
        }
    };

    return (
        <div className="container mt-5">
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input
                        type="email"
                        id="email"
                        className="form-control"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input
                        type="password"
                        id="password"
                        className="form-control"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                {error && <div className="text-danger">{error}</div>}
                <button type="submit" className="btn btn-primary">Login</button>
            </form>
        </div>
    );
}
