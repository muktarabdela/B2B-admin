import React from 'react'

const CompanyInfo = () => {
    return (
        <div className="w-[40em] mx-auto p-6 bg-white shadow-md rounded-lg">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Supplier Profile</h2>
            <div className="">
                <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
                    <h3 className="text-xl font-medium text-gray-700">company Information</h3>
                    <div className="mt-2">
                        <div className="flex items-center justify-between">
                            <span className="text-gray-600"> company name:</span>
                            <span className="text-gray-800">E-Pharma</span>
                        </div>
                        <div className="flex items-center justify-between mt-2">
                            <span className="text-gray-600"> social media profiles:</span>
                            <span className="text-gray-800">links</span>
                        </div>
                        <div className="flex items-center justify-between mt-2">
                            <span className="text-gray-600"> website url:</span>
                            <span className="text-gray-800">www.e-pharma.com</span>
                        </div>
                    </div>
                </div>

            </div>


        </div>
    )
}


export default CompanyInfo