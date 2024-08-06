import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ListCategory from './ListCategory';
import { setIsOpenCategory } from '../../../store/uiSlice';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import OtherProduct from "./OtherProduct";
import { setProductData } from '../../../store/ProductSlice';
import { addProduct } from '@/api/adminProduct';

function AddProduct() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const productData = useSelector((state) => state.product.productData);
    const isOpenCategory = useSelector((state) => state.ui.isOpenCategory);
    const category = useSelector((state) => state.ui.category);
    const [imageFiles, setImageFiles] = useState([]);
    const status = useSelector((state) => state.ui.status);
    console.log(category)
    useEffect(() => {
        if (status === "pending") {
            alert("Please wait for the account to be approved");
            navigate("/");
        } if (status === "rejected") {
            alert("Please wait for the account to be approved");
            navigate("/");
        }
    }, [status, navigate]);

    useEffect(() => {
        // Avoid setting product data if category has not changed
        if (productData.category !== category) {
            dispatch(setProductData({
                ...productData,
                category: category
            }));
        }
    }, [category, dispatch, productData]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        dispatch(setProductData({ ...productData, [name]: value }));
    };

    const handleImageChange = (e) => {
        setImageFiles(e.target.files);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const uploadedImageUrls = [];
            for (let i = 0; i < imageFiles.length; i++) {
                const formDataCloudinary = new FormData();
                formDataCloudinary.append('file', imageFiles[i]);
                formDataCloudinary.append('upload_preset', 'product_image');
                const response = await axios.post('https://api.cloudinary.com/v1_1/do7kscbrk/image/upload', formDataCloudinary);
                uploadedImageUrls.push(response.data.secure_url);
            }
            const formDataWithImageUrls = {
                ...productData,
                images: uploadedImageUrls
            };

            dispatch(setProductData(formDataWithImageUrls));
            await addProduct(formDataWithImageUrls);
            alert("Product added successfully");
            navigate("/");
        } catch (error) {
            console.error('Error adding product:', error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="my-10 max-w-6xl mx-auto px-4 mr-0 mt-20">
            {/* Loader */}
            {loading && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                    <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent border-solid rounded-full animate-spin"></div>
                </div>
            )}
            {/* Loader CSS */}
            <style jsx>{`
                .animate-spin {
                    animation: spin 1s linear infinite;
                }
                @keyframes spin {
                    0% { transform: rotate(0deg); }
                    100% { transform: rotate(360deg); }
                }
            `}</style>

            {isOpenCategory && <ListCategory />}
            <div className="bg-white shadow-lg rounded-lg p-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Add Product</h2>
                <p className="text-gray-500 mb-6">Provide detailed information about the product.</p>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-gray-700 font-semibold mb-2" htmlFor="category">Category</label>
                            <div
                                onClick={() => dispatch(setIsOpenCategory(true))}
                                className="cursor-pointer shadow border rounded py-3 px-4 text-gray-700 hover:border-blue-500 focus:outline-none"
                            >
                                {category[0] || "Select category"}
                            </div>
                        </div>
                        <div>
                            <label className="block text-gray-700 font-semibold mb-2" htmlFor="brand_name">Brand Name</label>
                            <input
                                onChange={handleChange}
                                className="shadow border rounded w-full py-3 px-4 text-gray-700 focus:border-blue-500 focus:ring-1"
                                name="brand_name"
                                id="brand_name"
                                type="text"
                                placeholder="Brand Name"
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700 font-semibold mb-2" htmlFor="description">Description</label>
                            <input
                                onChange={handleChange}
                                className="shadow border rounded w-full py-3 px-4 text-gray-700 focus:border-blue-500 focus:ring-1"
                                name="description"
                                id="description"
                                type="text"
                                placeholder="Description"
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700 font-semibold mb-2" htmlFor="manufacturer">Manufacturer</label>
                            <input
                                onChange={handleChange}
                                className="shadow border rounded w-full py-3 px-4 text-gray-700 focus:border-blue-500 focus:ring-1"
                                name="manufacturer"
                                id="manufacturer"
                                type="text"
                                placeholder="Manufacturer"
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700 font-semibold mb-2" htmlFor="country_of_origin">Country of Origin</label>
                            <input
                                onChange={handleChange}
                                className="shadow border rounded w-full py-3 px-4 text-gray-700 focus:border-blue-500 focus:ring-1"
                                name="country_of_origin"
                                id="country_of_origin"
                                type="text"
                                placeholder="Country of Origin"
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700 font-semibold mb-2" htmlFor="application">Application</label>
                            <input
                                onChange={handleChange}
                                className="shadow border rounded w-full py-3 px-4 text-gray-700 focus:border-blue-500 focus:ring-1"
                                name="application"
                                id="application"
                                type="text"
                                placeholder="Application"
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700 font-semibold mb-2" htmlFor="price">Price</label>
                            <input
                                onChange={handleChange}
                                className="shadow border rounded w-full py-3 px-4 text-gray-700 focus:border-blue-500 focus:ring-1"
                                name="price"
                                id="price"
                                type="text"
                                placeholder="Price"
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700 font-semibold mb-2" htmlFor="stock">Stock on Hand</label>
                            <input
                                onChange={handleChange}
                                className="shadow border rounded w-full py-3 px-4 text-gray-700 focus:border-blue-500 focus:ring-1"
                                name="stock"
                                id="stock"
                                type="text"
                                placeholder="Stock"
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700 font-semibold mb-2" htmlFor="images">Images</label>
                            <input
                                type="file"
                                id="images"
                                name="images"
                                onChange={handleImageChange}
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                multiple
                            />
                        </div>
                    </div>

                    <OtherProduct />

                    <div className="flex justify-center py-4">
                        <button
                            type="submit"
                            className="bg-blue-700 text-white font-bold py-2 px-6 rounded-xl hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default AddProduct;
