import React from 'react'

const LatestTransactions = () => {
    return (
        <div className='p-4'>
            <p className='text-3xl font-bold text-black mb-2'>
                Latest Transactions
            </p>
            <p className='text-lg text-gray-600'>
                This is a list of latest transactions
            </p>

            <div>
                <div className="overflow-x-auto border rounded-lg mt-4">
                    <table className="w-full text-sm text-left rtl:text-right text-gray-500 bg-[#F9FAFB] ">
                        <thead className="text-xs text-gray-700 uppercase">
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                    TRANSACTION
                                </th>
                                <th scope="col" className="px-6 py-3 whitespace-nowrap">
                                    DATE & TIME
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    AMOUNT
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    STATUS
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="bg-white text-gray-500  dark:border-gray-700">
                                <th
                                    scope="row"
                                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                                >
                                    Payment from Bonnie Green
                                </th>
                                <td className="px-6 py-4 whitespace-nowrap">Apr 23 ,2021</td>
                                <td className="px-6 py-4">$2300	</td>
                                <td className="">
                                    <span className='p-2 rounded-md font-semibold text-green-900 bg-green-200'>
                                        Completed
                                    </span>
                                </td>
                            </tr>
                            <tr className="bg-gray-100 text-gray-500  dark:border-gray-700">
                                <th
                                    scope="row"
                                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                                >
                                    Payment failed from muka
                                </th>
                                <td className="px-6 py-4 whitespace-nowrap">jun 13 ,2022</td>
                                <td className="px-6 py-4">$1300	</td>
                                <td className="">
                                    <span className='p-2 rounded-md font-semibold text-red-900 bg-red-200'>
                                        Cancelled
                                    </span>
                                </td>
                            </tr>
                            <tr className="bg-gray-100 text-gray-500  dark:border-gray-700">
                                <th
                                    scope="row"
                                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                                >
                                    Payment failed from muka
                                </th>
                                <td className="px-6 py-4 whitespace-nowrap">jun 13 ,2022</td>
                                <td className="px-6 py-4">$1300	</td>
                                <td className="">
                                    <span className='p-2 rounded-md font-semibold text-red-900 bg-red-200'>
                                        Cancelled
                                    </span>
                                </td>
                            </tr>
                            <tr className="bg-gray-100 text-gray-500  dark:border-gray-700">
                                <th
                                    scope="row"
                                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                                >
                                    Payment failed from muka
                                </th>
                                <td className="px-6 py-4 whitespace-nowrap">jun 13 ,2022</td>
                                <td className="px-6 py-4">$1300	</td>
                                <td className="">
                                    <span className='p-2 rounded-md font-semibold text-red-900 bg-red-200'>
                                        Cancelled
                                    </span>
                                </td>
                            </tr>
                            <tr className="bg-gray-100 text-gray-500  dark:border-gray-700">
                                <th
                                    scope="row"
                                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                                >
                                    Payment failed from muka
                                </th>
                                <td className="px-6 py-4 whitespace-nowrap">jun 13 ,2022</td>
                                <td className="px-6 py-4">$1300	</td>
                                <td className="">
                                    <span className='p-2 rounded-md font-semibold text-red-900 bg-red-200'>
                                        Cancelled
                                    </span>
                                </td>
                            </tr>

                            <tr className="bg-white text-gray-500  dark:border-gray-700">
                                <th
                                    scope="row"
                                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                                >
                                    Payment from Bonnie Green
                                </th>
                                <td className="px-6 py-4 whitespace-nowrap">Apr 23 ,2021</td>
                                <td className="px-6 py-4">$2300	</td>
                                <td className="">
                                    <span className='p-2 rounded-md font-semibold text-green-900 bg-green-200'>
                                        Completed
                                    </span>
                                </td>
                            </tr>

                            <tr className="bg-gray-100 text-gray-500  dark:border-gray-700 ">
                                <th
                                    scope="row"
                                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                                >
                                    Payment failed from muka
                                </th>
                                <td className="px-6 py-4 whitespace-nowrap">jun 13 ,2022</td>
                                <td className="px-6 py-4">$1300	</td>
                                <td className="">
                                    <span className='p-2 rounded-md font-semibold text-red-900 bg-red-200'>
                                        Cancelled
                                    </span>
                                </td>
                            </tr>

                            <tr className="bg-white border-b text-gray-500  dark:border-gray-700">
                                <th
                                    scope="row"
                                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                                >
                                    Payment from Bonnie Green
                                </th>
                                <td className="px-6 py-4 whitespace-nowrap">Apr 23 ,2021</td>
                                <td className="px-6 py-4">$2300	</td>
                                <td className="">
                                    <span className='p-2 rounded-md font-semibold text-green-900 bg-green-200'>
                                        Completed
                                    </span>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>


            </div>
        </div>
    )
}

export default LatestTransactions