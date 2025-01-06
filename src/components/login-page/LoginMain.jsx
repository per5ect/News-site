import {useLogin} from "../../hooks/useLogin.js";

export function LoginMain() {
    const {email,password, setEmail, setPassword, error, handleSubmit } = useLogin()

    return (
        <main className="mt-5 mb-5">
            <div className="container d-flex justify-content-center align-items-center">
                <div className="form-wrapper bg-dark p-5 rounded-4">s
                    <div className="d-flex flex-column mb-3 align-items-center">
                        <h2 className=" bg-white p-1 rounded-3 fw-bold mb-4"><a href="/" className="text-dark">NEWS Site</a></h2>
                        <h3 className="text-light fw-light">Sign in to your NEWS account</h3>
                        <a className="text-light" href="#">Don&#39;t have an account? Sign up</a>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-5">
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label text-light">Email address</label>
                                <input type="email" id="email" className="form-control"
                                       value={email}
                                       onChange={(e) => setEmail(e.target.value)}
                                        placeholder={"example@example.com"} required/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="password" className="form-label text-light">Password</label>
                                <input type="password" id="password" className="form-control"
                                       value={password}
                                       onChange={(e) => setPassword(e.target.value)}
                                        placeholder={"Password"} required/>
                            </div>
                            {error && <p className="text-light fw-bold">{error}</p>}
                        </div>
                        <button type="submit" className="btn btn-outline-light btn-lg w-100">Login</button>
                    </form>
                </div>
            </div>
        </main>
    )
}