import axiosInstance from "./axios";


const getToken = () => {
    if (typeof window !== 'undefined') {
        return localStorage.getItem('token');
    }
    return null;
};


export async function allSuppliers() {
    // // userToken = await getAuth();

    const token = getToken();

    try {
        const response = await axiosInstance.get("/admin/suppliers"
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

//service to get all suppliers
export async function singleSupplier(data) {
    const token = getToken();
    try {
        const response = await axiosInstance.get(`/admin/single-supplier/${data.contact_id}`
            , {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }
        )
        return response;
    } catch (error) {
        console.error("Error fetching specific user:", error);
        throw error;
    }

}

//service to get pending suppliers
export async function pendingSuppliers() {
    // // userToken = await getAuth();

    try {
        const response = await axiosInstance.get("/admin/pending_suppliers");
        return response;
    } catch (error) {
        console.error("Error fetching specific user:", error);
        throw error;
    }

}
//service to change supplier status
export async function changeSupplierStatus(data) {
    const token = getToken();
    // userToken = await getAuth();
    try {
        const response = await axiosInstance.put("/admin/supplier-status", data,
            {
                headers: {
                    "Content-Type": "application/json",
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


export async function updateSupplierStatus(data) {
    const token = getToken();

    console.log("data from api endpoint", data);
    try {
        const response = await axiosInstance.put(
            "/admin/supplier-status",
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
