import axiosInstance from "./axios";


const getToken = () => {
    if (typeof window !== 'undefined') {
        return localStorage.getItem('token');
    }
    return null;
};
export async function AllOrder() {
    const token = getToken();

    try {
        const response = await axiosInstance.get("/admin/orders"
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
export async function updateOrder(data) {

const token = getToken();
    try {
        const response = await axiosInstance.put("/admin/change-order-status", data
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