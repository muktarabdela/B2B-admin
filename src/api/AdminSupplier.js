import axiosInstance from "./axios";

const tokenFrom = localStorage.getItem('token');
console.log(tokenFrom)
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

//service to get all suppliers
export async function singleSupplier(data) {
    console.log("data from api endpoint", data);
    try {
        const response = await axiosInstance.post("admin/single-supplier", data);
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
    // userToken = await getAuth();
    try {
        const response = await axiosInstance.put("/admin/supplier-status", data);
        return response;
    } catch (error) {
        console.error("Error fetching specific user:", error);
        throw error;
    }
}


export async function updateSupplierStatus(data) {
    console.log("data from api endpoint", data);
    try {
        const response = await axiosInstance.put(
            "/admin/supplier-status",
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
