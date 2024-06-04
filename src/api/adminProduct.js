import axiosInstance from "./axios"
export async function allProducts(data) {
    // // userToken = await getAuth();
    try {
        const response = await axiosInstance.get("/admin/all-products", data);
        return response;
    } catch (error) {
        console.error("Error fetching specific user:", error);
        throw error;
    }
}