import Product_1_thumbnail from "../assets/product_02.png"
import Product_2_thumbnail from "../assets/product_03.png"
import Product_3_thumbnail from "../assets/product_04.png"
import Product_4_thumbnail from "../assets/product_05.png"
import Product_1 from '../assets/product_02.png'
import Product_2 from "../assets/product_03.png"
import Product_3 from "../assets/product_04.png"
import Product4 from "../assets/product_05.png"
import react, { createContext, useContext, useEffect, useState } from 'react'
const stateContext = createContext()

export const ContextProvider = ({ children }) => {
    const products = [
        { thumbnail: Product_1_thumbnail, large: Product_1 },
        { thumbnail: Product_2_thumbnail, large: Product_2 },
        { thumbnail: Product_3_thumbnail, large: Product_3 },
        { thumbnail: Product_4_thumbnail, large: Product4 }
    ];
    const [isOpen, setIsOpen] = useState(false)
    const [selectedImage, setSelectedImage] = useState(products[0].large);
    useEffect(() => {
        setIsOpen(true)
        setSelectedImage(products[0].large)
    }, [])

    const openImage = (image) => {
        setSelectedImage(image);
        setIsOpen(true);
    };

    const closeImage = () => {
        setSelectedImage(null);
        setIsOpen(false);
    };

    return (
        <stateContext.Provider
            value={{
                isOpen,
                setIsOpen,
                selectedImage,
                openImage,
                closeImage,
                products
            }}>
            {children}
        </stateContext.Provider>
    )
}

export const useStateContext = () => useContext(stateContext)