import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setCategory, setIsOpenCategory } from '../../../store/uiSlice'

const AccordionItem = ({ item }) => {
    const dispatch = useDispatch();
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen(!isOpen);
        // Check if the item is the last subcategory in its hierarchy
        if (!item.subcategories || item.subcategories.length === 0) {
            // Dispatch action to set the category
            dispatch(setCategory(item.name));
            dispatch(setIsOpenCategory(false))
        }
    };

    return (
        <div className="w-full">
            {item.subcategories ? (
                // Render as accordion item if there are subcategories
                <div>
                    <div className="cursor-pointer text-[1.3em] font-semibold" onClick={handleClick}>
                        {item.name}
                        <span className="relative bottom-5 left-[20em]">
                            {isOpen ? (
                                <svg
                                    className="w-2.5 h-2.5"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 10 6"
                                    aria-hidden="true"
                                >
                                    <path
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="m1 1 4 4 4-4"
                                    />
                                </svg>
                            ) : (
                                <svg
                                    className="w-2.5 h-2.5"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 10 6"
                                    aria-hidden="true"
                                >
                                    <path
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="m1 5 4-4 4 4"
                                    />
                                </svg>
                            )}
                        </span>
                    </div>
                    {isOpen && (
                        <div className="flex flex-col gap-2 mt-2 mr-2 text-gray-500">
                            {item.subcategories.map((subItem, index) => (
                                <AccordionItem key={index} item={subItem} />
                            ))}
                        </div>
                    )}
                </div>
            ) : (
                // Render as clickable item if there are no subcategories
                <div className="cursor-pointer text-[1.3em] font-semibold" onClick={handleClick}>
                    {item.name}
                </div>
            )}
        </div>
    );
};

export default AccordionItem;
