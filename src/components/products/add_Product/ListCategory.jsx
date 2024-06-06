import React from 'react';
import { useDispatch } from 'react-redux';
import AccordionItem from './AccordionItem'; // Adjust the import path as necessary
import { setIsOpenCategory } from '../../../store/uiSlice';

const categoryData = [
    {
        name: 'Pharmaceutical Products',
        subcategories: [
            {
                name: 'Over the Counter',
                subcategories: [
                    { name: 'Aluminum Hydroxide + Magnesium Hydroxide' },
                    { name: 'Aluminum Hydroxide' },
                    { name: 'Aluminum Hydroxide + Magnesium Hydroxide + Simethicone' },
                    { name: 'Aluminum Hydroxide + Magnesium Trisilicate' },
                    { name: 'Calcium carbonate' },
                ],
            },
            {
                name: 'Pharmacy Supplies',
                subcategories: [
                    { name: 'Tablet counter' },
                    { name: 'Tablet cutter' },
                    { name: 'Tablet bag' },
                ],
            },
            {
                name: 'RX',
                subcategories: [
                    {
                        name: 'Analgesics and anti-inflammatory',
                        subcategories: [
                            { name: 'Acetaminophen' },
                            { name: 'Diclofenac Sodium 50 mg Tablet' },
                            { name: 'Ibuprofen 600 mg Tablet' },
                        ],
                    },
                    { name: 'Anemia treatment agents' },
                    { name: 'Anesthetics' },
                    // Add the rest of the subcategories here
                ],
            },
        ],
    },
    {
        name: 'Medical Supplies and Equipment',
        subcategories: [
            // Add subcategories here
        ],
    },
    {
        name: 'Clinical Laboratory',
        subcategories: [
            // Add subcategories here
        ],
    },
    {
        name: 'Nutrition and Supplements',
        subcategories: [
            // Add subcategories here
        ],
    },
    {
        name: 'Health and Hygiene',
        subcategories: [
            // Add subcategories here
        ],
    },
    {
        name: 'Education and Training Materials',
        subcategories: [
            // Add subcategories here
        ],
    },
];

const ListCategory = () => {
    const dispatch = useDispatch();

    return (
        <div className="relative z-10">
            <div className="fixed inset-0 w-screen overflow-y-auto">
                <div className="flex min-h-full items-center justify-center p-4 text-center sm:items-center sm:p-0">
                    <div className="relative transform overflow-hidden rounded-lg bg-gray-100 text-left transition-all sm:my-8 max-w-7xl shadow-2xl">
                        <div className="w-full px-40 py-10">
                            <h1 className="text-2xl font-semibold text-blue-800 border-b-2 border-orange-600 pb-2 rounded">
                                Select your product specific category
                            </h1>
                            <svg
                                onClick={() => dispatch(setIsOpenCategory(false))}
                                className="cursor-pointer absolute top-[-0.3em] right-2"
                                xmlns="http://www.w3.org/2000/svg"
                                width={40}
                                height={60}
                                viewBox="0 0 24 24"
                                style={{ fill: "rgba(0, 0, 0, 1)" }}
                            >
                                <path d="m16.192 6.344-4.243 4.242-4.242-4.242-1.414 1.414L10.535 12l-4.242 4.242 1.414 1.414 4.242-4.242 4.243 4.242 1.414-1.414L13.364 12l4.242-4.242z" />
                            </svg>
                            <div className="flex items-start">
                                <div className="relative w-full mt-4 text-black flex flex-col gap-2 justify-start items-center text-sm">
                                    {categoryData.map((item, index) => (
                                        <AccordionItem key={index} item={item} />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ListCategory;
