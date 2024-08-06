import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { listOfCategories } from '@/api/adminProduct';
import { setCategoryId } from '@/store/uiSlice';

const transformCategories = (categories) => {
    const categoryMap = {};
    categories.forEach((category) => {
        categoryMap[category.category_id] = { ...category, children: [] };
    });

    const nestedCategories = [];
    categories.forEach((category) => {
        if (category.parent_id === 0) {
            nestedCategories.push(categoryMap[category.category_id]);
        } else if (categoryMap[category.parent_id]) {
            categoryMap[category.parent_id].children.push(categoryMap[category.category_id]);
        }
    });

    return nestedCategories;
};

const ListCategory = ({ onSelectCategory }) => {
    const dispatch = useDispatch();
    const [currentCategories, setCurrentCategories] = useState([]);
    const [path, setPath] = useState([]);
    const [categoriesH, setCategoriesH] = useState([]);

    useEffect(() => {
        const categoryList = async () => {
            try {
                const response = await listOfCategories();
                setCategoriesH(response.data?.data);
                const transformedCategories = transformCategories(response.data?.data);
                setCurrentCategories(transformedCategories);
            } catch (error) {
                console.error("Error fetching categories:", error);
            }
        };
        categoryList();
    }, []);

    const handleCategoryClick = (category) => {
        if (category.children.length > 0) {
            setPath([...path, category]);
            console.log(category)
            setCurrentCategories(category.children);
            dispatch(setCategoryId(category.category_id));
        } else {
            onSelectCategory(category.category_id);
        }
    };
    const handleAddMainCategory = (category) => {
        dispatch(setCategoryId(0));
    }
    const handleBack = () => {
        const newPath = path.slice(0, -1);
        setPath(newPath);
        setCurrentCategories(newPath.length ? newPath[newPath.length - 1].children : transformCategories(categoriesH));
    };

    return (
        <div className="relative z-10">
            <div className="">
                <div className="flex min-h-full items-center justify-center p-4 text-center sm:p-6 lg:p-8">
                    <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 max-w-3xl w-full">
                        <div className="relative p-6 max-h-[80vh] overflow-y-auto">
                            <h1 className="text-lg font-semibold text-blue-800 border-b-2 border-orange-600 pb-2 rounded">
                                Select Your Category parent
                            </h1>
                            <div className="flex flex-col items-center mt-4 text-black text-sm">
                                <div className="w-full max-h-[60vh] overflow-y-auto">
                                    <div className="flex flex-col gap-2">
                                        {path.length > 0 && (
                                            <button
                                                onClick={handleBack}
                                                className="mb-4 text-blue-600 border-2 w-20 p-2 rounded hover:bg-gray-200 flex items-center"
                                            >
                                                &lt; Back
                                            </button>
                                        )}
                                        {currentCategories.map((category) => (
                                            <div
                                                key={category.category_id}
                                                className="cursor-pointer p-2 hover:bg-gray-200 rounded flex items-center"
                                                onClick={() => handleCategoryClick(category)}
                                            >
                                                {category.category_name}
                                                {category.children.length > 0 && (
                                                    <svg
                                                        className="inline w-4 h-4 mr-2 text-gray-500"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        strokeWidth="2"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    >
                                                        <path d="M9 18l6-6-6-6" />
                                                    </svg>
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <p onClick={handleAddMainCategory} className='border-b-2 border-orange-600 pb-2 text-lg mt-2 bg-blue-500 text-white border-2  p-1 rounded cursor-pointer hover:bg-blue-600'>
                                    add main category
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ListCategory;
