import {deleteUser} from "../../services/admin-service.js";

export function MainAllUsersCard({userData}) {
    const handleDelete = async (id) => {
        try {
            await deleteUser(id);
            window.location.reload();
        } catch (error) {
            console.error("Error deleting user:", error);
            alert("Failed to delete the user. Please try again.");
        }
    };
    return (
        <div className="d-flex flex-column align-items-center border border-1 p-3 rounded-1 all-users-card">
            <img src={userData.avatar} alt="" className="admin-users-avatar rounded-circle mb-3"/>
            <div>
                <div className="border-top border-bottom py-3">
                    <p className="mb-2 fw-light">Name: <span className="fw-bold">{userData.name}</span></p>
                    <p className="mb-2">Last Name: <span className="fw-bold">{userData.lastName}</span></p>
                    <p className="mb-2">Email: <span className="fw-bold">{userData.email}</span></p>
                    <p className="mb-0">Role: <span className="fw-bold">{userData.role}</span></p>
                </div>

                <button className="btn btn-danger mt-3 w-100" onClick={() => handleDelete(userData.id)}>
                    Delete User
                </button>
            </div>
        </div>
    )
}