import {useEffect} from "react";
import {MainAllUsersCard} from "./MainAllUsersCard.jsx";
import {MainAllUsersFilterButtons} from "./MainAllUsersFilterButtons.jsx";
import {useAllUsers} from "../../hooks/useAllUsers.js";

export function MainAllUsers() {
    const {userData, filter, setFilter, fetchUsers} = useAllUsers()

    useEffect(() => {
        fetchUsers();
    }, []);

    const filteredUsers = filter === "all" ? userData : userData.filter(user => user.role === filter);

    return (
        <main className="mt-5 mb-5">
            <div className="container">
                <div className="all-users-title-btns">
                    <div className="d-flex align-items-center position-relative">
                        <span className="dot"></span>
                        <h2 className="ms-3">All users</h2>
                    </div>
                    <MainAllUsersFilterButtons setFilter={setFilter} />
                </div>

                <div className="mt-5 d-flex flex-wrap gap-4 justify-content-center">
                    {filteredUsers.length === 0 ? (
                        <h1 className="text-center">No users found</h1>) : (
                        filteredUsers.map(userData => (
                            <MainAllUsersCard key={userData.id} userData={userData} />
                        ))
                    )}
                </div>
            </div>
        </main>
    );
}
