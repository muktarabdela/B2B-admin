import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { message } from 'antd';

const ProductDetail = ({ data }) => {
    const dispatch = useDispatch();
    const [messageApi, contextHolder] = message.useMessage()
    console.log(data)
    const [openAccordionId, setOpenAccordionId] = useState("");
    const handleClick = (accordionId) => {
        setOpenAccordionId(openAccordionId === accordionId ? "" : accordionId);
    };

    if (!data) {
        return <div>Product not found</div>;
    }

    return (
        <div className="lg:col-span-2 lg:row-span-2 lg:row-end-2 relative lg:right-20">
            {contextHolder}
            <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">
                {data?.brand_name}
            </h1>

            <div className="mt-10 flex flex-col items-center justify-between space-y-4 border-t border-b py-4 sm:flex-row sm:space-y-0">
                <div className="flex items-end">
                    <h1 className="text-3xl font-bold">{data?.selling_price} <span className='text-gray-500'>ETB</span>  </h1>
                </div>

            </div>

            <div className="p-4 border-t">
                <p
                    onClick={() => handleClick("1")}
                    className="text-md cursor-pointer"
                >
                    Product Type
                    <span className="absolute right-4">
                        {openAccordionId === "1" ?
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={30}
                                height={30}
                                viewBox="0 0 24 24"
                                style={{ fill: "rgba(228, 221, 221, 1)" }}
                            >
                                <path d="M5 11h14v2H5z" />
                            </svg>
                            :
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={30}
                                height={30}
                                viewBox="0 0 24 24"
                                style={{
                                    fill: "rgba(228, 222, 222, 1)",
                                    transform: "rotate(90deg)"
                                }}
                            >
                                <path d="M19 11h-6V5h-2v6H5v2h6v6h2v-6h6z" />
                            </svg>
                        }
                    </span>
                </p>
                <div id="1" className={` ${openAccordionId === "1" ? "text-md mb-2 mt-10" : "hidden"}`}>
                    <div className="mt-3 select-none flex-wrap items-center gap-1">
                        <p className="px-6 py-2 font-bold flex justify-between">
                            Brand Name
                            <span className="text-gray-500">{data?.brand_name}</span>
                        </p>
                        <p className="px-6 py-2 font-bold flex justify-between">
                            Category
                            <span className="text-gray-500">Category Name</span>
                        </p>
                    </div>
                </div>
            </div>

            <div className="p-4 border-t">
                <p
                    onClick={() => handleClick("2")}
                    className="text-md cursor-pointer"
                >
                    Product Details
                    <span className="absolute right-4">
                        {openAccordionId === "2" ?
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={30}
                                height={30}
                                viewBox="0 0 24 24"
                                style={{ fill: "rgba(228, 221, 221, 1)" }}
                            >
                                <path d="M5 11h14v2H5z" />
                            </svg>
                            :
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={30}
                                height={30}
                                viewBox="0 0 24 24"
                                style={{
                                    fill: "rgba(228, 222, 222, 1)",
                                    transform: "rotate(90deg)"
                                }}
                            >
                                <path d="M19 11h-6V5h-2v6H5v2h6v6h2v-6h6z" />
                            </svg>
                        }
                    </span>
                </p>
                <div id="2" className={` ${openAccordionId === "2" ? "text-md mt-2 mb-2" : "hidden"} `}>
                    <div className="mt-3 select-none flex-wrap items-center gap-1">
                        <p className="px-6 py-2 font-bold flex justify-between">
                            Manufacturer
                            <span className="text-gray-500">{data?.manufacturer}</span>
                        </p>
                        <p className="px-6 py-2 font-bold flex justify-between">
                            Country of Origin
                            <span className="text-gray-500">{data?.country_of_origin}</span>
                        </p>
                        <p className="px-6 py-2 font-bold flex justify-between">
                            Application
                            <span className="text-gray-500">{data?.application}</span>
                        </p>
                        <p className="px-6 py-2 font-bold flex justify-between">
                            Price
                            <span className="text-gray-500">{data?.selling_price} <span className='text-gray-500'>ETB</span></span>
                        </p>
                        <p className="px-6 py-2 font-bold flex justify-between">
                            Stock
                            <span className="text-gray-500">{data?.stock} units</span>
                        </p>
                    </div>
                </div>
            </div>
            <div className="p-4 border-t">
                <p onClick={() => handleClick("3")} className="text-md cursor-pointer">
                    Other Product Details
                    <span className="absolute right-4">
                        {openAccordionId === "3" ? (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={30}
                                height={30}
                                viewBox="0 0 24 24"
                                style={{ fill: "rgba(228, 221, 221, 1)" }}
                            >
                                <path d="M5 11h14v2H5z" />
                            </svg>
                        ) : (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={30}
                                height={30}
                                viewBox="0 0 24 24"
                                style={{
                                    fill: "rgba(228, 222, 222, 1)",
                                    transform: "rotate(90deg)"
                                }}
                            >
                                <path d="M19 11h-6V5h-2v6H5v2h6v6h2v-6h6z" />
                            </svg>
                        )}
                    </span>
                </p>
                <div id="2" className={`${openAccordionId === "3" ? "text-md mt-2 mb-2" : "hidden"}`}>
                    {data?.product_specifications?.map((spec, index) => {
                        const parsedSpec = JSON.parse(spec.value);
                        return (
                            <div key={index} className="mt-3 select-none flex-wrap items-center gap-1">
                                <p className="px-6 py-2 font-bold flex justify-between">
                                    {parsedSpec.specification_type}
                                    <span className="text-gray-500">{parsedSpec.specification_value}</span>
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;
