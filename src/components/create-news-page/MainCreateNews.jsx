import {MainCreateForm} from "./MainCreateForm.jsx";

export function MainCreateNews() {
    return (
        <main className="mb-5">
            <div className="container mt-5">
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item">
                            <a href="/" className="text-body-emphasis fw-bold">Home</a>
                        </li>
                        <li className="breadcrumb-item active text-black-50" aria-current="page">
                            Create News
                        </li>
                    </ol>
                </nav>
                <h2>Create News</h2>
                <MainCreateForm/>
            </div>
        </main>
    );
}
