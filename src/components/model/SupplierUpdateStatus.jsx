import * as React from "react";
import { updateSupplierStatus } from '../../api/AdminSupplier';

import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setSupplierUpdateStatus } from "@/store/uiSlice";

export default function SupplierUpdateStates({ supplier }) {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [status, setStatus] = React.useState('Pending');
    console.log(status)

    const handleStatusChange = (event) => {
        setStatus(event.target.value);
    };


    const handleFormSubmit = async (e) => {
        e.preventDefault();
        const data = {
            user_hash: supplier?.user_hash,
            status: status,
        };
        try {
            const response = await updateSupplierStatus(data);
            console.log('Supplier updated successfully:', response);
            alert('Supplier status updated successfully');
            navigate("/supplier");
            window.location.reload();
        } catch (error) {
            console.error('Error updating supplier:', error);
        }
    };


    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div className="relative w-11/12 max-w-lg p-6 bg-white shadow-md rounded-md md:w-2/3">
                <div className="flex justify-between items-center mb-4">
                    <h1 className="text-2xl font-bold text-gray-800">Update Product Status</h1>
                    <button
                        type="button"
                        onClick={() => dispatch(setSupplierUpdateStatus(false))}
                        className="text-gray-400 hover:text-gray-600 transition duration-150 ease-in-out rounded focus:ring-2 focus:outline-none focus:ring-gray-600"
                        aria-label="close modal"
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
                <div className="flex justify-between py-2">
                    <p className="text-gray-800 font-semibold text-lg"> user fill all information</p>
                    <p className={`px-4 py-1  ${supplier.business_permits_document ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'}`} variant="outline">
                        {supplier?.business_permits_document ? 'Yes' : 'No'}
                    </p>
                </div>
                <div className="flex justify-between py-2">
                    <p className="text-gray-800 font-semibold text-lg">Current user Status</p>
                    <p className={` font-medium text-center p-2 rounded-lg h-8 flex items-center justify-center ${supplier.status === 'Pending' ? 'bg-green-50 text-black-700' : supplier.status === 'Rejected' ? 'bg-red-200 text-red-700' : 'bg-green-200 text-green-700'}`}>
                        {supplier.status}
                    </p>
                </div>

                <form className="my-4" onSubmit={handleFormSubmit}>
                    <div className="mb-4">
                        <label htmlFor="status" className="block mb-2 text-lg font-medium text-gray-900">
                            Select a Status
                        </label>
                        <select
                            id="status"
                            className={`bg-gray-50 border border-gray-300 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ${status === 'Rejected' ? 'bg-red-100 text-red-700' : status === 'Verified' ? 'bg-green-100 text-green-700' : 'bg-green-50 text-black-700'} cursor-pointer`}
                            value={status}
                            onChange={handleStatusChange}
                        >
                            <option value="Pending">Pending</option>
                            <option value="approve">Approve</option>
                            <option value="rejected">Rejected</option>
                        </select>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="percentage" className="block mb-2 text-lg font-medium text-gray-900">
                            messages
                        </label>
                        <input
                            type="number"
                            id="percentage"
                            className="bg-gray-50 border border-gray-300 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        />
                    </div>

                    <div className="flex items-center justify-start mt-4">
                        <button type="submit" className="bg-indigo-700 text-white font-bold py-2 px-4 rounded-lg hover:bg-indigo-800 focus:outline-none focus:ring-2 focus:ring-indigo-700">
                            Submit
                        </button>
                        <button
                            type="button"
                            onClick={() => dispatch(setSupplierUpdateStatus(false))}
                            className="ml-3 bg-gray-100 text-gray-600 font-bold py-2 px-4 rounded-lg hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400"
                        >
                            Cancel
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}
