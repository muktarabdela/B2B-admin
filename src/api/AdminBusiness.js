import axiosInstance from "./axios";
const tokenFrom = localStorage.getItem('token');

export async function allBusiness() {
    // // userToken = await getAuth();

    try {
        const response = await axiosInstance.get("/admin/buyers"
            , {
                headers: {
                    Authorization: `Bearer ${tokenFrom}`,
                },
            }
        );
        return response;
    } catch (error) {
        console.error("Error fetching specific user:", error);
        throw error;
    }
}

export async function updateBusinessStatus(data) {
    console.log("data from api endpoint", data);
    try {
        const response = await axiosInstance.put(
            "/admin/buyer-status",
            data,
            {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${tokenFrom}`,
                },
            }
        );
        return response.data; // Return the response data
    } catch (error) {
        console.error("Error fetching specific user:", error);
        throw error;
    }
}