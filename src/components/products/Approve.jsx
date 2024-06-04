import React from 'react'
import product1 from "../../assets/product_02.png"
import product2 from "../../assets/product_03.png"
import product3 from "../../assets/product_04.png"
import product4 from "../../assets/product_05.png"
const Approve = () => {
  return (
    <section className="antialiased  px-4">
      <div className="flex flex-col justify-center h-full lg:ml-20">
        {/* Table */}
        {/* {productModal && <UpdateProduct />}
          {deleteModal && <Check />}
          {detailModal && <SupplierDetail />} */}
        <div className="w-full max-w-5xl mx-auto bg-white shadow-lg rounded-sm border border-gray-200 mt-[8em]" >
          <header className="px-5 py-4 border-b border-gray-100">
            <h2 className="font-semibold text-gray-800">Suppliers user</h2>
          </header>
          <div className="p-3">
            <div className="overflow-x-auto">
              <table className="table-auto w-full">
                <thead className="text-xs uppercase text-black font-semibold bg-gray-50">
                  <tr>
                    <th className="p-4 px-10 whitespace-nowrap">
                      <div className="font-semibold text-center ">Product Owner</div>
                    </th>
                    <th className="p-2 whitespace-nowrap">
                      <div className="font-semibold text-center">brand Name</div>
                    </th>
                    <th className="p-2 px-10 whitespace-nowrap">
                      <div className="font-semibold text-center">images</div>
                    </th>
                    <th className="p-2  whitespace-nowrap">
                      <div className="font-semibold text-center"> Price</div>
                    </th>
                    <th className="p-2 px-10 whitespace-nowrap">
                      <div className="font-semibold text-center">Stock oh hand</div>
                    </th>
                    <th className="p-2 whitespace-nowrap">
                      <div className="font-semibold text-center"> Stutes</div>
                    </th>
                    <th className="p-2 px-10 whitespace-nowrap">
                      <div className="font-semibold text-center"> country of origin</div>
                    </th>
                    <th className="p-2 whitespace-nowrap">
                      <div className="font-semibold text-center">Detail</div>
                    </th>
                    <th className="p-2 px-10 whitespace-nowrap">
                      <div className="font-semibold text-center">Edit</div>
                    </th>
                    <th className="p-2  whitespace-nowrap">
                      <div className="font-semibold text-center">Delete</div>
                    </th>
                  </tr>
                </thead>
                <tbody className="text-sm divide-y divide-gray-100">

                  <tr>
                    <td className="p-2 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3">
                          <img
                            className="rounded-full"
                            src="https://raw.githubusercontent.com/cruip/vuejs-admin-dashboard-template/main/src/images/user-36-05.jpg"
                            width={40}
                            height={40}
                            alt="Alex Shatov"
                          />
                        </div>
                        <div className="font-medium text-gray-800">
                          muhamed
                        </div>
                      </div>
                    </td>
                    <td className="p-2 whitespace-nowrap">
                      <div className="text-center text-lg">amoxa</div>
                    </td>
                    <td className="p-2 whitespace-nowrap">
                      <div className="flex items-center justify-center font-medium text-gray-500">
                        <img className='w-20 h-30' src={product1} alt="" />
                      </div>
                    </td>

                    <td className="p-2 whitespace-nowrap">
                      <div className="text-center font-semibold text-lg">$65.7</div>
                    </td>
                    <td className="p-2 whitespace-nowrap">
                      <div className="text-center font-semibold text-lg">67</div>
                    </td>
                    <td className="p-2 whitespace-nowrap">
                      <div className="text-center text-lg">USA</div>
                    </td>
                    <td className="p-2 whitespace-nowrap">
                      <div className="text-[1.2em] font-medium 
                            text-center bg-green-200 p-2 rounded-lg text-green-700 h-8 flex items-center justify-center w-20 mx-auto">
                        Approved
                      </div>
                    </td>
                    <td className='p-2'>
                      <div
                        // onClick={() => dispatch(setDetailModal(true))}

                        className="
                            cursor-pointer
                            text-[1.2em] font-medium text-center border-2 border-amber-300 bg-amber-100 rounded-lg p-2 h-8 flex items-center justify-center w-20 mx-auto">
                        <svg width="76" height="30" fill="none"
                          className='flex items-center justify-center'
                          stroke="#050505" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path d="M14.121 14.121A3 3 0 1 0 9.88 9.88a3 3 0 0 0 4.242 4.242Z"></path>
                          <path d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7Z"></path>
                        </svg>
                        Show
                      </div>
                    </td>
                    <td className='p-2'>
                      <div className="
                            cursor-pointer
                            text-[1.2em] font-medium text-center border-2 border-lime-900 bg-lime-100 rounded-lg p-2 h-8 flex items-center justify-center w-20 mx-auto">
                        <svg width="40" height="20" fill="none" stroke="#1a1a1a" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path d="m15.232 5.232 3.536 3.536m-2.036-5.036a2.5 2.5 0 0 1 3.536 3.536L6.5 21.036H3v-3.572L16.732 3.732Z"></path>
                        </svg>
                        Edit
                      </div>
                    </td>
                    <td className='p-2'>
                      <div
                        // onClick={() => dispatch(setDeleteModal(true))}
                        className="
                                                    cursor-pointer
                                                    text-[1.2em] font-medium text-center border-2 border-red-300 bg-red-100 text-red-600 rounded-lg p-2 h-8 flex items-center justify-center w-[5.5em] mx-auto">
                        <svg width="40" height="20" fill="none" stroke="#131111" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path d="M10 11v6m4-6v6M4 7h16m-1 0-.867 12.142A2 2 0 0 1 16.138 21H7.862a2 2 0 0 1-1.995-1.858L5 7h14Zm-4 0V4a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v3h6Z"></path>
                        </svg>
                        Delete
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section >)
}

export default Approve