import axiosInstance from "./axios";

const getToken = () => {
    if (typeof window !== 'undefined') {
        return localStorage.getItem('token');
    }
    return null;
};
export async function allBusiness() {
    const token = getToken();
    try {
        const response = await axiosInstance.get("/admin/buyers"
            , {
                headers: {
                    Authorization: `Bearer ${token}`,
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
    const token = getToken();
    console.log("data from api endpoint", data);
    try {
        const response = await axiosInstance.put(
            "/admin/buyer-status",
            data,
            {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
            }
        );
        return response.data; // Return the response data
    } catch (error) {
        console.error("Error fetching specific user:", error);
        throw error;
    }
}