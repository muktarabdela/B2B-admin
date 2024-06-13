import axiosInstance from "./axios"
export async function allProducts(data) {
    // // userToken = await getAuth();
    try {
        const response = await axiosInstance.get("/admin/all-products", data);
        return response;
    } catch (error) {
        console.error("Error fetching specific user:", error);
        throw error;
    }
}

export async function productById(id) {
    // // userToken = await getAuth();
    try {
        const response = await axiosInstance.get(`/admin/product/${id}`);
        return response;
    } catch (error) {
        console.error("Error fetching specific user:", error);
        throw error;
    }
}

export async function addProduct(data) {
    // console.log("data from api edpoint", data)
    const dataToSend = {
        required_data: {
            category: data.category,
            brand_name: data.brand_name,
            description: data.description,
            manufacturer: data.manufacturer,
            country_of_origin: data.country_of_origin,
            application: data.application,
            price: data.price,
            stock: data.stock,
            images: data.images
        },
        unique_data: data.specification.map(spec => ({
            specification_type: spec.name,
            specification_value: spec.value
        }))
    };
    console.log("data to send", dataToSend)
    // // userToken = await getAuth();
    try {
        const response = await axiosInstance.post("/admin/add-product", dataToSend);
        return response;
    } catch (error) {
        console.error("Error fetching specific user:", error);
        throw error;
    }
}

export async function listSpecifications(data) {
    // // userToken = await getAuth();
    try {
        const response = await axiosInstance.get("admin/product_specifications", data);
        return response;
    } catch (error) {
        console.error("Error fetching specific user:", error);
        throw error;
    }
}
export async function updateProductStatus(data) {
    // // userToken = await getAuth();
    try {
        const response = await axiosInstance.post("/admin/change-product-status", data);
        return response;
    } catch (error) {
        console.error("Error fetching specific user:", error);
        throw error;
    }
}
