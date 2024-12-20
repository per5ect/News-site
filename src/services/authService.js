import axios from "axios";

const DB = "http://localhost:3000";

export const loginUser = async (email, password) => {
    try {
        const { data } = await axios.get(`${DB}/users`);
        const user = data.find(
            (user) => user.email === email && user.password === password
        );
        if (!user) throw new Error("Invalid email or password")
        else return user;
    } catch (error) {
        throw new Error(error.message);
    }
};