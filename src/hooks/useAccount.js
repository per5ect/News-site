import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { updateUserData } from "../services/userData-service.js";
import { updateUser } from "../store/authSlice.js";

export function useAccount() {
    const { user } = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    const [successMessage, setSuccessMessage] = useState("");

    const [formData, setFormData] = useState({
        name: user?.name || "",
        lastName: user?.lastName || "",
        email: user?.email || "",
        avatar: user?.avatar || "",
        password: user?.password || "",
        role: user?.role || ""
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const updatedUser = await updateUserData(user.id, formData);
            dispatch(updateUser(updatedUser));
            localStorage.setItem("user", JSON.stringify(updatedUser));
            setSuccessMessage("Profile updated successfully!");
        } catch (error) {
            console.error("Error updating profile:", error);
            setSuccessMessage("Failed to update profile. Please try again.");
        }
    };

    return {formData, setFormData, successMessage, handleInputChange, handleSubmit};
}
