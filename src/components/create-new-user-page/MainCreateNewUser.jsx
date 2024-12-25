import {MainCreateNewUserForm} from "./MainCreateNewUserForm.jsx";

export function MainCreateNewUser() {
    return (
        <main className="mb-5">
            <div className="container mt-5">
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item x">
                            <a href="/" className="text-body-emphasis fw-bold">Home</a>
                        </li>
                        <li className="breadcrumb-item active text-black-50" aria-current="page">
                            Create User
                        </li>
                    </ol>
                </nav>
                <h2>Create User</h2>
                <MainCreateNewUserForm/>
            </div>
        </main>
    );
}
