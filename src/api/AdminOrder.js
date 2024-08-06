import axiosInstance from "./axios";

const tokenFrom = localStorage.getItem('token');
console.log(tokenFrom)
export async function AllOrder() {
    // // userToken = await getAuth();

    try {
        const response = await axiosInstance.get("/admin/orders"
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
export async function updateOrder(data) {
    // // userToken = await getAuth();
    console.log(data)

    try {
        const response = await axiosInstance.put("/admin/change-order-status", data
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