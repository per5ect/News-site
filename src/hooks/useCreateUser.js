import { useState } from "react";
import { createUser } from "../services/admin-service.js";

export function useCreateUser() {
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);
    const [formData, setFormData] = useState({
        name: "",
        lastName: "",
        email: "",
        password: "",
        avatar: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { name, lastName, email, password, avatar } = formData;
        if (!name || !lastName || !email || !password || !avatar) {
            setError("All fields are required");
            setSuccess(null);
            return;
        }

        const userData = {
            ...formData,
            role: "news-creator",
        };

        try {
            await createUser(userData);
            setSuccess("User created successfully!");
            setError(null);

            setFormData({
                name: "",
                lastName: "",
                email: "",
                password: "",
                avatar: "",
            });
        } catch (err) {
            setError("Failed to create user");
            setSuccess(null);
        }
    };

    return {formData, error, success, handleChange, handleSubmit};
}
