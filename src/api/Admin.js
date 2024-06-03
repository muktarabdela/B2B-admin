import axiosInstance from "./axios"

export async function loginAdmin(formData) {
    try {
        const response = await axiosInstance.post("/admin/login", formData);
        return response;
    } catch (error) {
        console.error("Error fetching specific user:", error);
        throw error;
    }
}