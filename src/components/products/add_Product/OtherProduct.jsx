import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setProductData } from '../../../store/ProductSlice';
import { listSpecifications } from '../../../api/adminProduct';

const OtherProduct = () => {
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
    };

    const handleDeleteBank = (index) => {
        const updatedData = otherData.filter((_, i) => i !== index);
        setOtherData(updatedData);
        dispatch(setProductData({
            ...productData,
            specification: updatedData,
        }));
    };

    const handleClick = (specificationName) => {
        setShowMessage(true);
        setCurrentData({ ...currentData, name: specificationName });

        setTimeout(() => {
            setShowMessage(false);
        }, 2000);
    };

    useEffect(() => {
        const fetchSupplierData = async () => {
            try {
                const data = await listSpecifications();
                setData(data.data.data);
                console.log(data.data.data);
            } catch (error) {
                console.error('Error fetching supplier data:', error);
            }
        };

        fetchSupplierData();
    }, []);


    return (
        <div className=" w-[40em]">
            <h2 className="text-2xl justify-center font-semibold flex items-center p-4">
                Add other product specification
            </h2>

            <div>
                <h1 className='text-2xl justify-center font-semibold flex items-center p-4'>most common product specification name</h1>
                <div className='grid grid-cols-3 gap-4 border p-3 rounded'>
                    {data?.map((spec, i) => (
                        <div key={i}>
                            <button
                                onClick={() => handleClick(spec.specification_name)}
                                type="button" className="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2.5 text-center inline-flex justify-center items-center dark:bg-blue-500 dark:hover:bg-blue-600 dark:focus:ring-blue-700 whitespace-nowrap">
                                {spec.specification_name}
                                <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                </svg>
                            </button>
                        </div>
                    ))}
                </div>
            </div>

            <div className='rounded border-2 max-w-1xl mx-auto my-4 border-blue-600'>
                <div className="relative overflow-x-auto">
                    <table className="w-full text-sm text-left rtl:text-right text-black dark:text-gray-400">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-800 dark:bg-gray-50">
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                    Product specification name
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Product specification value
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    CLEAR
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {otherData.map((data, index) => (
                                <tr key={index} className="text-gray-900">
                                    <th
                                        scope="row"
                                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:-white"
                                    >
                                        {data.name}
                                    </th>
                                    <td className="px-6 py-4">{data.value}</td>
                                    <td className="px-6 py-4">
                                        <div onClick={() => handleDeleteBank(index)}>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width={40}
                                                height={40}
                                                viewBox="0 0 24 24"
                                                style={{ fill: 'rgba(254, 3, 3, 1)', transform: '', msfilter: '' }}
                                                className="inline-block w-4 h-4 mr-2 cursor-pointer"
                                            >
                                                <path d="M16.192 6.344l-4.243 4.242-4.242-4.242-1.414 1.414 4.242 4.242-4.242 4.242 1.414 1.414 4.242-4.242 4.243 4.242 1.414-1.414-4.242-4.242 4.242-4.242z" />
                                            </svg>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            <div>
                {showMessage && (
                    <div
                        style={{
                            border: 'none',
                            borderRadius: '120px 0',
                            margin: '0 0 20px'
                        }}
                        className="absolute left-[13em] bottom-[-48em] mt-4 mr-4 bg-green-100 border-l-4 border-green-500 p-4 rounded-lg w-[15em] text-black">
                        <p>add specification in to input.</p>
                    </div>
                )}
                <div className="flex gap-4">
                    <div className="relative mb-4 w-full">
                        <input
                            onChange={handleInputChange}
                            value={currentData.name} // Controlled input
                            id="name" // Add an id here
                            name="name"
                            type="text"
                            className="border-1 peer block w-full appearance-none rounded-lg border border-gray-900 bg-gray-100 bg-transparent px-2.5 pb-2.5 pt-4 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
                            placeholder=" "
                        />
                        <label
                            htmlFor="name" // Match this with the id of the input
                            className="absolute rounded top-2 left-1 z-10 origin-[0] -translate-y-4 scale-75 transform cursor-text select-none px-2 mr-4 text-sm text-black duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-[0.4em] peer-focus:bg-gray-100 peer-focus:rounded peer-focus:text-white peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:whitespace-nowrap"
                        >
                            Name
                        </label>
                    </div>

                    <div className="relative mb-4 w-full">
                        <input
                            onChange={handleInputChange}
                            value={currentData.value} // Controlled input
                            name="value"
                            id="value"
                            type="text"
                            className="border-1 peer block w-full appearance-none rounded-lg border border-gray-900 bg-gray-100 bg-transparent px-2.5 pb-2.5 pt-4 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
                            placeholder=" "
                        />
                        <label
                            htmlFor="value"
                            className="absolute rounded top-2 left-1 z-10 origin-[0] -translate-y-4 scale-75 transform cursor-text select-none px-2 mr-4 text-sm text-black duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-[0.4em] peer-focus:bg-gray-100 peer-focus:rounded peer-focus:text-white peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:whitespace-nowrap"
                        >
                            Value
                        </label>
                    </div>
                </div>
            </div>

            <button onClick={handleAddData} className="bg-blue-500 text-white px-4 py-2 rounded">
                Add product
            </button>
        </div>
    );
};

export default OtherProduct;
