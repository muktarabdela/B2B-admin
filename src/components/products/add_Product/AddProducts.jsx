import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ListCategory from './ListCategory';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import OtherProduct from "./OtherProduct"
import { setProductData } from '../../../store/ProductSlice';
import { setIsOpenCategory } from '../../../store/uiSlice';
import { addProduct } from '../../../api/adminProduct';
function AddProducts() {
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const [loading, setLoading] = useState()
    const productData = useSelector((state) => state.product.productData)
    console.log(productData)
    const isOpenCategory = useSelector((state) => state.ui.isOpenCategory);
    const category = useSelector((state) => state.ui.category)
    const [imageFiles, setImageFiles] = useState([]);

    // State to store server message
    useEffect(() => {
        dispatch(setProductData(({
            ...productData,
            category: category
        })));
    }, [category]);



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
        console.log('Form submitted');
        try {
            const uploadedImageUrls = [];
            for (let i = 0; i < imageFiles.length; i++) {
                const formDataCloudinary = new FormData();
                formDataCloudinary.append('file', imageFiles[i]);
                formDataCloudinary.append('upload_preset', 'product_image');
                const response = await axios.post('https://api.cloudinary.com/v1_1/do7kscbrk/image/upload', formDataCloudinary);
                console.log(response);
                uploadedImageUrls.push(response.data.secure_url);
            }
            const formDataWithImageUrls = {
                ...productData,
                images: uploadedImageUrls
            };

            dispatch(setProductData(formDataWithImageUrls));
            const response2 = await addProduct(formDataWithImageUrls);
            alert("Product added successfully");
            navigate("/all-products");
            console.log("Response from add product table", response2);
        } catch (error) {
            console.error('Error adding product:', error);
        } finally {
            setLoading(false);
        }
    };
    return (
        <div className='my-40'>
            <div>
                {/* Loader */}
                {loading && (
                    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50 z-50">
                        <div className="spinner"></div>
                    </div>
                )}
                {/* Loader CSS */}
                <style jsx>{`
				.spinner {
				width: 56px;
				height: 56px;
				border-radius: 50%;
				background: conic-gradient(#0000 10%, #474bff);
				-webkit-mask: radial-gradient(farthest-side, #0000 calc(100% - 9px), #000 0);
				animation: spinner-zp9dbg 1s infinite linear;
				}

				@keyframes spinner-zp9dbg {
				to {
					transform: rotate(1turn);
				}
				}
`}</style>
            </div>
            {isOpenCategory && <ListCategory />}
            <div className='max-w-6xl mx-auto border p-4 rounded ml-[20em]'>
                <h2 className='text-gray-600 text-3xl font-bold p-5'>Add products</h2>
                <p className='text-gray-400 text-lg pl-10 pb-2'>Add detail information about products</p>
                <form onSubmit={handleSubmit} className='mx-auto flex flex-col items-center justify-center'>
                    <div>
                        <div className='flex gap-3 '>
                            <div className="mb-4 cursor-pointer">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="category">
                                    category
                                </label>
                                <div
                                    onClick={() => dispatch(setIsOpenCategory(true))}
                                    className="shadow appearance-none border rounded w-[23em] py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                                    {category == '' ? "category" : category}
                                </div>
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="brand_name">
                                    brand_name
                                </label>
                                <input
                                    onChange={handleChange}
                                    // value={formData.brand_name}
                                    className="shadow appearance-none border rounded w-[23em] py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name='brand_name' id="brand_name" type="text" placeholder="brand_name" />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
                                    description
                                </label>
                                <input
                                    onChange={handleChange}
                                    // value={formData.description}
                                    className="shadow appearance-none border rounded w-[23em] py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name='description' id="description" type="text" placeholder="description" />
                            </div>
                        </div>

                        <div className='flex gap-3 '>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="manufacturer">
                                    manufacturer
                                </label>
                                <input
                                    onChange={handleChange}
                                    // value={formData.manufacturer}
                                    className="shadow appearance-none border rounded w-[23em] py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name='manufacturer' id="manufacturer" type="text" placeholder="manufacturer" />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="country_of_origin">
                                    country_of_origin
                                </label>
                                <input
                                    onChange={handleChange}
                                    // value={formData.country_of_origin}
                                    className="shadow appearance-none border rounded w-[23em] py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name='country_of_origin' id="country_of_origin" type="text" placeholder="country_of_origin" />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="application">
                                    application
                                </label>
                                <input
                                    onChange={handleChange}
                                    // value={formData.application}
                                    className="shadow appearance-none border rounded w-[23em] py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name='application' id="application" type="text" placeholder="application" />
                            </div>
                        </div>
                        <div className='flex gap-3 '>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="price">
                                    price
                                </label>
                                <input
                                    onChange={handleChange}
                                    // value={formData.price}
                                    className="shadow appearance-none border rounded w-[23em] py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name='price' id="price" type="text" placeholder="price" />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="stock">
                                    stock on hand
                                </label>
                                <input
                                    onChange={handleChange}
                                    // value={formData.stock}
                                    className="shadow appearance-none border rounded w-[23em] py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name='stock' id="stock" type="text" placeholder="stock" />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="images">
                                    image
                                </label>
                                <input type="file" id="images" name="images" onChange={handleImageChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" multiple />
                            </div>
                        </div>
                    </div>
                    {/* btn */}
                    <OtherProduct />

                    <div className="flex justify-center py-4">
                        <button
                            type="submit" // Make sure the button type is 'submit'
                            className="flex items-center text-center justify-center rounded-lg bg-blue-700 py-2 px-20 lg:px-40  font-bold text-white outline-none transition sm:order-1 sm:w-40 focus:ring" >
                            Submit
                        </button>
                    </div>
                </form>
            </div>

        </div>
    );
}

export default AddProducts;
