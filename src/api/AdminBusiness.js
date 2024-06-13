import axiosInstance from "./axios";

export async function allBusiness() {
    // // userToken = await getAuth();

    try {
        const response = await axiosInstance.get("/admin/buyers");
        return response;
    } catch (error) {
        console.error("Error fetching specific user:", error);
        throw error;
    }

}