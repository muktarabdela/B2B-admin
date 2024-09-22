import axiosInstance from "./axios"

export const getToken = () => {
    if (typeof window !== 'undefined') {
        return localStorage.getItem('token');
    }
    return null;
};
export async function userReport(data) {
    const token = getToken();
    const send = { report_time: "weekly" }
    try {
        const response = await axiosInstance.post("/admin/user-report", send
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