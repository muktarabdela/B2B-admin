import axiosInstance from "./axios";

export async function allSuppliers() {
    // // userToken = await getAuth();

    try {
        const response = await axiosInstance.get("/admin/suppliers");
        return response;
    } catch (error) {
        console.error("Error fetching specific user:", error);
        throw error;
    }

}

//service to get all suppliers
export async function singleSupplier(data) {
    // userToken = await getAuth();

    try {
        const response = await axiosInstance.post("/admin/single-supplier", data);
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
        const response = await axiosInstance.post("/admin/active_supplier", data);
        return response;
    } catch (error) {
        console.error("Error fetching specific user:", error);
        throw error;
    }
}
