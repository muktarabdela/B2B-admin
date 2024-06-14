import React, { useEffect, useState } from 'react';
import product1 from "../../assets/product_02.png";
import product2 from "../../assets/product_03.png";
import product3 from "../../assets/product_04.png";
import product4 from "../../assets/product_05.png";
import { allProducts } from '../../api/adminProduct';
import { useDispatch, useSelector } from 'react-redux';
import UpdateProduct from '../dashboard/supplier/UpdateProduct';
import { setDeleteModal, setSupplierUpdateStatus, setUpdateProductModal } from '../../store/uiSlice';
import { useNavigate } from 'react-router-dom';
import { fetchProducts } from '../../store/ProductSlice';
import SupplierUpdateStates from '../dashboard/supplier/SupplierUpdateStates';
import UpdateProductStatus from './models/UpdateProductStatus';
import { singleSupplier } from '../../api/AdminSupplier';


// Utility function to truncate strings
const truncateString = (str, maxLength) => {
  if (str?.length <= maxLength) return str;
  return str?.slice(0, maxLength) + '...';
};

function Check() {
  const dispatch = useDispatch()
  return (
    <>
      {/* component */}
      <div className="bg-slate-800 bg-opacity-50 flex justify-center items-center absolute top-0 right-0 bottom-0 left-0">
        <div className="bg-white px-16 py-14 rounded-md text-center">
          <h1 className="text-xl mb-4 font-bold text-slate-500">
            Do you Want Delete
          </h1>
          <button
            onClick={() => dispatch(setDeleteModal(false))}
            className="bg-red-500 px-4 py-2 rounded-md text-md text-white">
            Cancel
          </button>
          <button className="bg-indigo-500 px-7 py-2 ml-2 rounded-md text-md text-white font-semibold">
            Ok
          </button>
        </div>
      </div>
    </>

  )
}
const AllProducts = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [productData, setProductData] = useState([]);
  const [tooltipVisible, setTooltipVisible] = useState(false);
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });
  const [selectedProducts, setSelectedProducts] = useState(null);
  const supplierUpdateStatus = useSelector((state) => state.ui.supplierUpdateStatus);

  const productUpdateModal = useSelector((state) => state.ui.productUpdateModal);
  const deleteModal = useSelector((state) => state.ui.deleteModal);

  const { loading, error, products } = useSelector((state) => state.product)


  const handleMouseEnter = (event) => {
    setTooltipPosition({
      x: event.pageX,
      y: event.pageY
    });
    setTooltipVisible(true);
  };
  const handleMouseLeave = () => {
    setTooltipVisible(false);
  };

  const handleDetailProduct = (id) => {
    navigate(`/detail/products/${id}`);
  };
  const handleDetailSupplier = (id) => {
    navigate(`/detail/supplier/${id}`);
  };

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const handleUpdateStatus = (product) => {
    setSelectedProducts(product);
    dispatch(setSupplierUpdateStatus(true));
  };
  const handleUpdatePrice = (product) => {
    setSelectedProducts(product);
    dispatch(setUpdateProductModal(true));
  };

  return (
    <section className="border bg-gray-50  rounded-lg  max-w-[22em] lg:max-w-[60em] -0 h-full">

      <div className='border bg-gray-50  rounded-lg  h-full'>
        {productUpdateModal && <UpdateProduct product={selectedProducts} />}
        {supplierUpdateStatus && <UpdateProductStatus product={selectedProducts} />}
        {deleteModal && <Check />}
        <div className="w-full mx-auto bg-white shadow-lg rounded-sm border border-gray-200 mt-[8em]">
          <header className="px-5 py-4 border-b border-gray-100">
            <h2 className="font-semibold text-gray-800">Suppliers user</h2>
          </header>
          <div className="p-3">
            <div className="overflow-x-auto">
              <table className="table-auto w-full">
                <thead className="text-xs uppercase text-black font-semibold bg-gray-50">
                  <tr>
                    <th className="p-4 px-10 whitespace-nowrap">
                      <div className="font-semibold text-center">Product Owner</div>
                    </th>
                    <th className="p-2 whitespace-nowrap">
                      <div className="font-semibold text-center">Brand Name</div>
                    </th>
                    <th className="p-2 px-10 whitespace-nowrap">
                      <div className="font-semibold text-center">Images</div>
                    </th>
                    <th className="p-2 px-10 whitespace-nowrap">
                      <div className="font-semibold text-center">Owner</div>
                    </th>
                    <th className="p-2 whitespace-nowrap">
                      <div className="font-semibold text-center">Price</div>
                    </th>
                    <th className="p-2 px-10 whitespace-nowrap">
                      <div className="font-semibold text-center">Stock on Hand</div>
                    </th>
                    <th className="p-2 whitespace-nowrap">
                      <div className="font-semibold text-center">Status</div>
                    </th>
                    <th className="p-2 px-10 whitespace-nowrap">
                      <div className="font-semibold text-center">Country of Origin</div>
                    </th>
                    <th className="p-2 whitespace-nowrap">
                      <div className="font-semibold text-center">Detail</div>
                    </th>
                    <th className="p-2 px-10 whitespace-nowrap">
                      <div className="font-semibold text-center">update product price</div>
                    </th>
                    <th className="p-2 px-10 whitespace-nowrap">
                      <div className="font-semibold text-center">update product status</div>
                    </th>
                    <th className="p-2 whitespace-nowrap">
                      <div className="font-semibold text-center">Delete</div>
                    </th>
                  </tr>
                </thead>
                <tbody className="text-sm divide-y divide-gray-100">
                  {products.map((product, index) => (
                    <tr key={index}>
                      <td
                        onClick={() => handleDetailSupplier(product.owner)}
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                        className="p-2 whitespace-nowrap ">
                        {tooltipVisible && (
                          <div
                            className="absolute z-10 px-3 py-2 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm"
                            style={{
                              top: `${tooltipPosition.y}px`,
                              left: `${tooltipPosition.x}px`
                            }}
                          >
                            Detail Info about product owner
                          </div>
                        )}

                        <div className="flex items-center cursor-pointer hover:bg-gray-50 p-2 rounded-lg">

                          {product.owner === 0 ? (
                            <>
                              <div className="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3 cursor-pointer">
                                <img
                                  className="rounded-full"
                                  src="https://raw.githubusercontent.com/cruip/vuejs-admin-dashboard-template/main/src/images/user-36-05.jpg"
                                  width={40}
                                  height={40}
                                  alt="Alex Shatov"
                                />
                              </div>
                              <div className="font-medium text-gray-800">
                                admin
                              </div>
                            </>

                          ) : (
                            <>
                              <div className="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3 cursor-pointer">
                                <img
                                  className="rounded-full"
                                  src="https://raw.githubusercontent.com/cruip/vuejs-admin-dashboard-template/main/src/images/user-36-05.jpg"
                                  width={40}
                                  height={40}
                                  alt="Alex Shatov"
                                />
                              </div>
                              <div className="font-medium text-gray-800">
                                muhammed
                              </div>
                            </>

                          )}
                        </div>
                      </td>
                      <td className="p-2 whitespace-nowrap truncate">
                        <h5 className="text-center text-lg truncate">
                          {truncateString(product.brand_name, 20)}
                        </h5>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div className="flex items-center justify-center font-medium text-gray-500">
                          <img className='w-20 h-30' src={product1} alt="" />
                        </div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div className="text-center font-semibold text-lg">{product.owner === 0 ? 'admin' : 'supplier'}</div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div className="text-center font-semibold text-lg">${product.price}</div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div className="text-center font-semibold text-lg">{product.stock}</div>
                      </td>

                      <td className="p-2 whitespace-nowrap">
                        <div className={`text-[1.2em] font-medium text-center p-2 rounded-lg h-8 flex items-center justify-center w-20 mx-auto ${product.status === 'pending' ? 'bg-green-50 text-black-700' : product.status === 'rejected' ? 'bg-red-200 text-red-700' : 'bg-green-200 text-green-700'}`}>
                          {product.status}
                        </div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div className="text-center text-lg">{product.country_of_origin}</div>
                      </td>
                      <td className='p-2'>
                        <div
                          onClick={() => handleDetailProduct(product.product_hash)}
                          className="
                                                        cursor-pointer
                                                        text-[1.2em] font-medium text-center border-2 border-amber-300 bg-amber-100 rounded-lg p-2 h-8 flex items-center justify-center w-20 mx-auto">
                          <svg width="76" height="30" fill="none"
                            className='flex items-center justify-center'
                            stroke="#050505" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M14.121 14.121A3 3 0 1 0 9.88 9.88a3 3 0 0 0 4.242 4.242Z"></path>
                            <path d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7Z"></path>
                          </svg>
                          Show
                        </div>
                      </td>
                      <td className='p-2'>
                        <div
                          onClick={() => handleUpdatePrice(product)}
                          className="
                                                    cursor-pointer
                                                    text-[1.2em] font-medium text-center border-2 border-lime-900 bg-lime-100 rounded-lg p-2 h-8 flex items-center justify-center w-[7em] mx-auto">
                          <svg width="40" height="20" fill="none" stroke="#1a1a1a" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="m15.232 5.232 3.536 3.536m-2.036-5.036a2.5 2.5 0 0 1 3.536 3.536L6.5 21.036H3v-3.572L16.732 3.732Z"></path>
                          </svg>
                          Update
                        </div>
                      </td>
                      <td className='p-2'>
                        <div
                          onClick={() => handleUpdateStatus(product)}

                          className="
                                                    cursor-pointer
                                                    text-[1.2em] font-medium text-center border-2 border-lime-900 bg-lime-100 rounded-lg p-2 h-8 flex items-center justify-center w-[7em] mx-auto">
                          <svg width="40" height="20" fill="none" stroke="#1a1a1a" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="m15.232 5.232 3.536 3.536m-2.036-5.036a2.5 2.5 0 0 1 3.536 3.536L6.5 21.036H3v-3.572L16.732 3.732Z"></path>
                          </svg>
                          Update
                        </div>
                      </td>
                      <td className='p-2'>
                        <div
                          onClick={() => dispatch(setDeleteModal(true))}
                          className="
                                                        cursor-pointer
                                                        text-[1.2em] font-medium text-center border-2 border-red-300 bg-red-100 rounded-lg p-2 h-8 flex items-center justify-center w-20 mx-auto">
                          <svg width="40" height="20" fill="none" stroke="#050505" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20 7H4m16 0-.867 12.141A2 2 0 0 1 17.138 21H6.862a2 2 0 0 1-1.995-1.859L4 7m16 0-.867 12.141A2 2 0 0 1 17.138 21H6.862a2 2 0 0 1-1.995-1.859L4 7m16 0H4m5-4h6m-6 0a2 2 0 0 0-2 2v2h10V5a2 2 0 0 0-2-2m-6 0h6"></path>
                          </svg>
                          Delete
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AllProducts;
