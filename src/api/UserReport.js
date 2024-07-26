import axiosInstance from "./axios"
const tokenFrom = localStorage.getItem('token');

export async function userReport(data) {
    const send = { report_time: "weekly" }
    try {
        const response = await axiosInstance.post("/admin/user-report", send
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