import axiosInstance from "./axios";

const tokenFrom = localStorage.getItem('token');

export async function allSuppliers() {
    // // userToken = await getAuth();

    try {
        const response = await axiosInstance.get("/admin/suppliers"
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