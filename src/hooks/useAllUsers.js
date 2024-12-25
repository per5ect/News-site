import {useState} from "react";
import {getAllUsers} from "../services/admin-service.js";

export function useAllUsers() {
    const [userData, setUserData] = useState([]);
    const [filter, setFilter] = useState("all");

    const fetchUsers = async () => {
        const data = await getAllUsers();
        setUserData(data);
    };

    return {userData, filter, setFilter, fetchUsers};
}