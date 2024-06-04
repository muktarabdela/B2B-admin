import React from 'react'
import { useStateContext } from '../../../../context/UseContext'
const ProductImages = () => {
    const { isOpen,
        setIsOpen,
        selectedImage,
        openImage,
        closeImage, products } = useStateContext()
    return (

        <>
            <div className="lg:col-span-3 lg:row-end-1 lg:ml-[13em]">
                <div className="lg:flex lg:items-start">
                    <div className="lg:order-2 lg:ml-5">

                        {isOpen && selectedImage && (
                            <div className="max-w-xl overflow-hidden rounded-lg">
                                <img
                                    className="h-full w-full max-w-full object-cover"
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
                                    className={`${isOpen && selectedImage === product.large ? "border-2 rounded-lg opacity-60 border-orange-600 " : ""} flex-0 aspect-square mb-3 h-20 overflow-hidden rounded-lg border-2 border-gray-900 text-center`}
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