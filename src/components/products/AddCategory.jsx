import React, { useState, useEffect } from 'react';
import ListCategory from '../ListCategory';
import { addCategory, listOfCategories } from '@/api/adminProduct'; // Make sure to import your API call
import { useDispatch, useSelector } from 'react-redux';
import { setCategoryId } from '@/store/uiSlice';

const AddCategory = () => {
  const dispatch = useDispatch();
  const [categoryName, setCategoryName] = useState('');
  const [parentId, setParentId] = useState(null);
  const [selectedCategoryName, setSelectedCategoryName] = useState('');
  const [categories, setCategories] = useState([]);
  const [error, setError] = useState(null)
  const categoryId = useSelector((state) => state.ui.categoryId);
  console.log("categoryId from add category com", categoryId);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await listOfCategories();
        setCategories(response.data?.data || []);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };
    fetchCategories();
  }, []);

  useEffect(() => {
    if (categoryId) {
      const selectedCategory = categories.find(category => category.category_id === categoryId);
      setSelectedCategoryName(selectedCategory ? selectedCategory.category_name : '');
    }
  }, [categoryId, categories]);

  const handleCategorySelection = (categoryId) => {
    dispatch(setCategoryId(categoryId));
    setParentId(categoryId);
  };

  const handleInputChange = (e) => {
    setCategoryName(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      category_name: categoryName,
      parent_id: categoryId,
    };
    try {
      const response = await addCategory(data);
      console.log('Category added successfully:', response);
      // setError(response.data.message);
      alert('Category added successfully!');
      window.location.reload();
    } catch (error) {
      console.error('Error adding category:', error);
      setError(error.response.data.message);
    }
  };
  console.log("error", error)
  return (
    <div className='p-4 mt-20 max-w-6xl mx-auto mr-20'>
      <p className='text-center text-2xl font-medium text-gray-800 -mb-4'> Add Category to your supplier</p>
      <p className='text-red-500'>{error}</p>
      <div className='flex mx-auto'>
        <ListCategory onSelectCategory={handleCategorySelection} />
        <div className='mt-14'>
          <form className="mb-6" onSubmit={handleSubmit}>
            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative w-full">
                <input
                  onChange={handleInputChange}
                  value={categoryName}
                  id="name"
                  name="name"
                  type="text"
                  className="border border-gray-300 rounded-xl w-full px-3 py-3 text-sm text-gray-900 focus:border-blue-500 focus:outline-none focus:ring-1"
                  placeholder="Category Name"
                />
              </div>
            </div>

            <div className="mt-4">
              <p className="text-gray-700">
                Selected Parent Category: <strong>{categoryId === 0 ? 'Add Main Category' : selectedCategoryName}</strong>
              </p>
            </div>

            <button className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-xl font-medium hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
              Add Category
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddCategory;
