import axiosInstance from "./axios"


const getToken = () => {
    if (typeof window !== 'undefined') {
        return localStorage.getItem('token');
    }
    return null;
};
export async function loginAdmin(formData) {
    try {
        const response = await axiosInstance.post("/admin/login", formData);
        return response;
    } catch (error) {
        console.error("Error fetching specific user:", error);
        throw error;
    }
}

export const getAllAdminNotifications = async () => {
    const token = getToken();
    try {
        const response = await axiosInstance.get(
            `/admin/all-notifications`,
            {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
            }
        );
        return response.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

export const getUnreadAdminNotifications = async () => {
    const token = getToken();
    try {
        const response = await axiosInstance.get(
            `/admin/new-notifications`,
            {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
            }
        );
        return response.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
}
export const markNotificationAsRead = async (notificationId) => {
    const token = getToken();
    try {
        const response = await axiosInstance.patch(
            `/admin/read-notification/${notificationId}`,
            {},
            {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
            }
        );
        return response.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
}
