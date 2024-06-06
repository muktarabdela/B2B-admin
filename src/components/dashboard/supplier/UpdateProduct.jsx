import React from 'react'
import { useDispatch } from 'react-redux'
import { setUpdateProductModal } from '../../../store/uiSlice'
const UpdateProduct = () => {
    const dispatch = useDispatch()
    return (
        <>
            {/* component */}
            {/* Code block starts */}
            <div
                className="relative z-50">
                <div
                    className="fixed inset-0  w-screen h-screen overflow-y-auto  shadow-2xl">
                    <div className="flex min-h-full items-center justify-center p-4 text-center sm:items-center sm:p-0  ">
                        <div className="container mx-auto w-11/12 md:w-2/3 max-w-lg">
                            <div className="relative py-8 px-5 md:px-10 bg-white shadow-md rounded border border-gray-400">
                                <div className="w-full flex justify-start text-gray-600 mb-3">
                                    <svg

                                        xmlns="http://www.w3.org/2000/svg"
                                        className="icon icon-tabler icon-tabler-wallet"
                                        width={52}
                                        height={52}
                                        viewBox="0 0 24 24"
                                        strokeWidth={1}
                                        stroke="currentColor"
                                        fill="none"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <path stroke="none" d="M0 0h24v24H0z" />
                                        <path d="M17 8v-3a1 1 0 0 0 -1 -1h-10a2 2 0 0 0 0 4h12a1 1 0 0 1 1 1v3m0 4v3a1 1 0 0 1 -1 1h-12a2 2 0 0 1 -2 -2v-12" />
                                        <path d="M20 12v4h-4a2 2 0 0 1 0 -4h4" />
                                    </svg>
                                </div>
                                <h1 className="text-gray-800 font-lg font-bold tracking-normal leading-tight text-2xl mb-20">
                                    Update Product Data
                                </h1>
                                <div className='flex justify-between items-center lg:lg:mx-10 py-2'>
                                    <p
                                        className="text-gray-800 text-md font-bold leading-tight tracking-normal"
                                    >
                                        product Owner
                                    </p>
                                    <p
                                        className="text-gray-600 text-md font-bold leading-tight tracking-normal"
                                    >
                                        Owner Name
                                    </p>
                                </div>
                                <div className='flex justify-between  lg:mx-10 py-3'>
                                    <p
                                        className="text-gray-800 text-md font-bold leading-tight tracking-normal"
                                    >
                                        Fill all information
                                    </p>
                                    <p
                                        className="text-gray-600 text-md font-bold leading-tight tracking-normal"
                                    >
                                        Yes
                                    </p>
                                </div>
                                <div className='flex justify-between lg:mx-10 py-3'>
                                    <p
                                        className="text-gray-800 text-md font-bold leading-tight tracking-normal"
                                    >
                                        Product Original Price                                    </p>
                                    <p
                                        className="text-gray-600 text-md font-bold leading-tight tracking-normal"
                                    >
                                        20$
                                    </p>
                                </div>
                                <div className='flex justify-between items-center lg:mx-10 py-2'>
                                    <p
                                        className="text-gray-800 text-md font-bold leading-tight tracking-normal"
                                    >
                                        Product Status
                                    </p>
                                    <p
                                        className='text-gray-800 text-md font-bold leading-tight tracking-normal bg-green-50 text-black-700 p-2 rounded-lg'
                                    // className={`text-[1.2em] font-medium text-center p-2 rounded-lg h-8 flex items-center justify-center w-20 mx-auto ${product.status === 'Pending' ? 'bg-green-50 text-black-700' : product.status === 'Rejected' ? 'bg-red-200 text-red-700' : 'bg-green-200 text-green-700'}`}
                                    >
                                        Pending
                                    </p>
                                </div>

                                <form className="max-w-sm mx-auto my-4 mb-6">
                                    <div className="mb-6">
                                        <label
                                            htmlFor="large-input"
                                            className="block mb-2 text-sm font-medium text-gray-900 "
                                        >
                                            New Product Price
                                        </label>
                                        <input
                                            type="text"
                                            id="large-input"
                                            className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500
                                        "
                                            placeholder='enter product price'
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Product Description</label>
                                        <textarea
                                            className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500"
                                            placeholder='leave message for product owner'
                                        // value={productDescription}
                                        // onChange={(e) => setProductDescription(e.target.value)}
                                        ></textarea>
                                    </div>

                                </form>

                                <div className="flex items-center justify-start w-full">
                                    <button className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 bg-indigo-700 rounded text-white px-8 py-2 text-sm">
                                        Submit
                                    </button>
                                    <button
                                        onClick={() => dispatch(setUpdateProductModal(false))}
                                        className="focus:outline-none focus:ring-2 focus:ring-offset-2  focus:ring-gray-400 ml-3 bg-gray-100 transition duration-150 text-gray-600 ease-in-out hover:border-gray-400 hover:bg-gray-300 border rounded px-8 py-2 text-sm"
                                        onclick="modalHandler()"
                                    >
                                        Cancel
                                    </button>
                                </div>
                                <button
                                    onClick={() => dispatch(setUpdateProductModal(false))}

                                    className="cursor-pointer absolute top-0 right-0 mt-4 mr-5 text-gray-400 hover:text-gray-600 transition duration-150 ease-in-out rounded focus:ring-2 focus:outline-none focus:ring-gray-600"
                                    onclick="modalHandler()"
                                    aria-label="close modal"
                                    role="button"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="icon icon-tabler icon-tabler-x"
                                        width={20}
                                        height={20}
                                        viewBox="0 0 24 24"
                                        strokeWidth="2.5"
                                        stroke="currentColor"
                                        fill="none"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <path stroke="none" d="M0 0h24v24H0z" />
                                        <line x1={18} y1={6} x2={6} y2={18} />
                                        <line x1={6} y1={6} x2={18} y2={18} />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </>

    )
}

export default UpdateProduct