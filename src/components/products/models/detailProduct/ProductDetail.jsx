import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

const ProductDetail = ({ data }) => {
    const dispatch = useDispatch();
    const { productId } = useParams();
    // const product = productData.find(p => p.id === parseInt(productId));
    console.log(data)
    const [openAccordionId, setOpenAccordionId] = useState("");
    const handleClick = (accordionId) => {
        setOpenAccordionId(openAccordionId === accordionId ? "" : accordionId);
    };
    const handleAddToCart = () => {
        dispatch(addItem({
            id: data.product_id,
            name: data.brand_name,
            image: data.image_urls[0],
            manufacturer: data.manufacturer,
            price: data.price,
        }
        ));
    };

    if (!data) {
        return <div>Product not found</div>;
    }

    return (
        <div className="lg:col-span-2 lg:row-span-2 lg:row-end-2 relative lg:right-20">
            <h1 className="flex items-center justify-between text-2xl font-bold text-gray-900 sm:text-3xl">
                <span className="text-1xl font-bold text-gray-500 sm:text-2xl">Product name</span>
                <p>
                    {data.brand_name}
                </p>
            </h1>

            <div className="mt-10 flex flex-col items-center justify-between space-y-4 border-t border-b py-4 sm:flex-row sm:space-y-0">
                <span className="text-1xl font-bold text-gray-500 sm:text-2xl">Product Price</span>
                <h1 className="text-3xl font-bold">${data.price}</h1>

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
                            <span className="text-gray-500">{data.brand_name}</span>
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
                            <span className="text-gray-500">{data.manufacturer}</span>
                        </p>
                        <p className="px-6 py-2 font-bold flex justify-between">
                            Country of Origin
                            <span className="text-gray-500">{data.country_of_origin}</span>
                        </p>
                        <p className="px-6 py-2 font-bold flex justify-between">
                            Application
                            <span className="text-gray-500">{data.application}</span>
                        </p>
                        <p className="px-6 py-2 font-bold flex justify-between">
                            Price
                            <span className="text-gray-500">${data.price}</span>
                        </p>
                        <p className="px-6 py-2 font-bold flex justify-between">
                            Stock
                            <span className="text-gray-500">{data.stock} units</span>
                        </p>
                    </div>
                </div>
            </div>
            <div className="p-4 border-t">
                <p
                    onClick={() => handleClick("3")}
                    className="text-md cursor-pointer"
                >
                    Other Product Details
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
                <div id="2" className={` ${openAccordionId === "3" ? "text-md mt-2 mb-2" : "hidden"} `}>
                    {data.specifications.map((spec, index) => (
                        <div key={index} className="mt-3 select-none flex-wrap items-center gap-1">
                            <p className="px-6 py-2 font-bold flex justify-between">
                                {spec.specification_type}
                                <span className="text-gray-500">{spec.specification_value}</span>
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;
