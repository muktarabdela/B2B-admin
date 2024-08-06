import axiosInstance from "./axios"
const token = localStorage.getItem('token');
console.log("token from user report", token);

export async function userReport(data) {
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