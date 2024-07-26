import React, { useEffect, useState } from 'react'
import ProductImages from './ProductImages'
import ProductDetail from './ProductDetail'
import { useParams } from "react-router-dom";
import { productById } from '../../../../api/adminProduct';

const DetailProduct = () => {
    const { productId } = useParams();
    const [product, setProduct] = useState(null);
    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await productById(productId)
                console.log(response.data.data.data)
                setProduct(response.data.data.data);
            } catch (error) {
                console.error("Error fetching product:", error);
            } finally {
            }
        };
        fetchProduct();
    }, [productId]);
    if (!product) {
        return <div>Product not found</div>;
    }
    return (
        <section className="py-12 sm:py-16 mt-20">
            <div className="container mx-auto px-4">
                <div className="lg:col-gap-12 xl:col-gap-16 mt-8 grid grid-cols-1 gap-12 lg:mt-12 lg:grid-cols-5 lg:gap-16 max-w-7xl mx-auto">
                    <ProductImages data={product} />
                    <ProductDetail data={product} />
                    <div className="lg:col-span-3 mt-20 lg:ml-[13em]">
                        <div className="border-b border-gray-300">
                            <nav className="flex gap-4">
                                <a
                                    href="#"
                                    title=""
                                    className="border-b-2 border-gray-900 py-4 text-sm font-medium text-gray-900 hover:border-gray-400 hover:text-gray-800"
                                >
                                    {" "}
                                    Description{" "}
                                </a>
                                <a
                                    href="#"
                                    title=""
                                    className="inline-flex items-center border-b-2 border-transparent py-4 text-sm font-medium text-gray-600"
                                >
                                    Reviews
                                    <span className="ml-2 block rounded-full bg-gray-500 px-2 py-px text-xs font-bold text-gray-100">
                                        {" "}
                                        1,209{" "}
                                    </span>
                                </a>
                            </nav>
                        </div>
                        <div className="mt-8 flow-root sm:mt-12">
                            <h1 className="text-3xl font-bold">Delivered To Your Door</h1>

                        </div>
                    </div>
                </div>
            </div>
        </section>



    )
}

export default DetailProduct