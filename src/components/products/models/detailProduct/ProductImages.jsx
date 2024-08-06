import React, { useEffect, useState } from 'react'
const ProductImages = ({ data }) => {
    const images = data?.product_images || [];
    const products = images.map(image => ({ thumbnail: image.image, large: image.image }));
    const [isOpen, setIsOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState(products[0]);

    useEffect(() => {
        setIsOpen(true)
        setSelectedImage(products[0].large)
    }, [])

    const openImage = (image) => {
        setSelectedImage(image);
        setIsOpen(true);
    };

    return (

        <>
            <div className="lg:col-span-3 lg:row-end-1">
                <div className="lg:flex lg:items-start">
                    <div className="lg:order-2 lg:ml-5">

                        {isOpen && selectedImage && (
                            <div className="max-w-[25em] overflow-hidden rounded-xl">
                                <img
                                    className="h-full w-full object-cover mx-auto"
                                    src={selectedImage}
                                    alt=""
                                />
                            </div>
                        )}
                    </div>
                    <div className="mt-2 w-full lg:order-1 lg:w-32 lg:flex-shrink-0">
                        <div className="flex lg:flex-col gap-4 items-start ">
                            {products.map((product, index) => (
                                <button
                                    key={index}
                                    onClick={() => openImage(product.large)}
                                    type="button"
                                    className={`${isOpen && selectedImage === product.large ? "border-2 rounded-lg opacity-60 border-orange-600 " : ""} flex-0 aspect-square mb-3 h-20 overflow-hidden rounded-xl border-2 border-gray-900 text-center`}
                                >
                                    <img
                                        className="h-full w-full object-cover"
                                        src={product.thumbnail}
                                        alt=""
                                    />
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default ProductImages