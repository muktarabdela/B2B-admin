import React, { useEffect, useState } from 'react';
import { setProductData } from '../../../store/ProductSlice';
import { useDispatch, useSelector } from 'react-redux';
import { message } from 'antd';
import { listSpecifications } from '@/api/adminProduct';


const OtherProduct = () => {
    const [messageApi, contextHolder] = message.useMessage()
    const [data, setData] = useState([]);
    const [showMessage, setShowMessage] = useState(false);

    const dispatch = useDispatch();
    const productData = useSelector((state) => state.product.productData);
    const [otherData, setOtherData] = useState([]);
    const [currentData, setCurrentData] = useState({ name: '', value: '' });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setCurrentData({
            ...currentData,
            [name]: value,
        });
    };

    const openSpecification = () => {
        const key = 'updatable';
        messageApi.open({
            key,
            type: 'success',
            content: 'Added to specification!',
            duration: 1,
        });
    }
    const openAddData = () => {
        const key = 'updatable';
        messageApi.open({
            key,
            type: 'success',
            content: 'Added specification!',
            duration: 1,
        });
    }


    const handleAddData = (e) => {
        e.preventDefault();
        console.log('Current data:', currentData);

        if (currentData.name && currentData.value) {
            setOtherData([...otherData, currentData]);
            dispatch(setProductData({
                ...productData,
                specification: [...otherData, currentData],
            }));
            // Clear inputs
            setCurrentData({ name: '', value: '' });
        } else {
            alert('Please fill out all fields before adding.');
        }
        openAddData()
    };

    const handleDeleteData = (index) => {
        const updatedData = otherData.filter((_, i) => i !== index);
        setOtherData(updatedData);
        dispatch(setProductData({
            ...productData,
            specification: updatedData,
        }));
    };

    const handleClick = (specificationName) => {
        openSpecification()
        setCurrentData({ ...currentData, name: specificationName });
    };

    useEffect(() => {
        const fetchSupplierData = async () => {
            try {
                const response = await listSpecifications();
                setData(response.data.data);
                console.log(response.data.data);
            } catch (error) {
                console.error('Error fetching supplier data:', error);
            }
        };

        fetchSupplierData();
    }, []);

    return (
        <>
            {contextHolder}
            <div className="max-w-4xl mx-auto p-4">
                <h2 className="text-3xl font-semibold text-center mb-6">Add Other Product Specification</h2>

                <div className="mb-6">
                    <h3 className='text-2xl font-semibold mb-4'>Most Common Product Specification Names</h3>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                        {data?.map((spec, i) => (
                            <div key={i}>
                                <button
                                    onClick={() => handleClick(spec.specification_name)}
                                    type="button"
                                    className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-xl  text-sm px-4 py-3.5 text-center inline-flex items-center"
                                >
                                    {spec.specification_name}
                                    <svg className="rtl:rotate-180 w-4 h-4 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                    </svg>
                                </button>
                            </div>
                        ))}
                    </div>
                </div>

                <div className='border-2 border-blue-600 rounded-xl overflow-x-auto mb-6'>
                    <table className="min-w-full text-sm text-left text-gray-900 dark:text-gray-400">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" className="px-6 py-3">Specification Name</th>
                                <th scope="col" className="px-6 py-3">Specification Value</th>
                                <th scope="col" className="px-6 py-3">Clear</th>
                            </tr>
                        </thead>
                        <tbody>
                            {otherData.map((data, index) => (
                                <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                    <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">{data.name}</td>
                                    <td className="px-6 py-4">{data.value}</td>
                                    <td className="px-6 py-4 text-red-600 cursor-pointer" onClick={() => handleDeleteData(index)}>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={24}
                                            height={24}
                                            viewBox="0 0 24 24"
                                            className="w-6 h-6"
                                        >
                                            <path d="M16.192 6.344l-4.243 4.242-4.242-4.242-1.414 1.414 4.242 4.242-4.242 4.242 1.414 1.414 4.242-4.242 4.243 4.242 1.414-1.414-4.242-4.242 4.242-4.242z" />
                                        </svg>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <form className="mb-6">
                    <div className="flex flex-col md:flex-row gap-4">
                        <div className="relative w-full">
                            <input
                                onChange={handleInputChange}
                                value={currentData.name}
                                id="name"
                                name="name"
                                type="text"
                                className="border border-gray-300 rounded-xl w-full px-3 py-3 text-sm text-gray-900 focus:border-blue-500 focus:outline-none focus:ring-1"
                                placeholder="Name"
                            />
                        </div>

                        <div className="relative w-full">
                            <input
                                onChange={handleInputChange}
                                value={currentData.value}
                                name="value"
                                id="value"
                                type="text"
                                className="border border-gray-300 rounded-xl w-full px-3 py-3 text-sm text-gray-900 focus:border-blue-500 focus:outline-none focus:ring-1"
                                placeholder="Value "
                            />
                        </div>
                    </div>

                    <button onClick={handleAddData} className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-xl font-medium hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
                        Add Product
                    </button>
                </form>
            </div>
        </>

    );
};

export default OtherProduct;
