import React from 'react'

const PersonalInfo = ({ supplierData }) => {

    return (
        <div className='max-w-4xl mx-auto'>
            <div className=" mx-auto lg:p-6 bg-white shadow-md rounded-lg">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4 mx-auto">Supplier Profile</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
                    <div className="bg-gray-50 w-[20em] p-4 rounded-lg shadow-sm mx-">
                        <h3 className="text-xl font-medium text-gray-700">Personal Information</h3>
                        <div className="mt-2">
                            <div className="flex items-center justify-between">
                                <span className="text-gray-600">First Name:</span>
                                <span className="text-gray-800">{supplierData?.first_name}</span>
                            </div>
                            <div className="flex items-center justify-between mt-2">
                                <span className="text-gray-600">Last Name:</span>
                                <span className="text-gray-800">{supplierData?.last_name}</span>
                            </div>
                            <div className="flex items-center justify-between mt-2">
                                <span className="text-gray-600">Phone Number:</span>
                                <span className="text-gray-800">{supplierData?.phone_number} </span>
                            </div>
                            <div className="flex items-center justify-between mt-2">
                                <span className="text-gray-600">Title/Position:</span>
                                <span className="text-gray-800">{supplierData?.title_or_position}</span>
                            </div>
                        </div>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
                        <h3 className="text-xl font-medium text-gray-700">Account Information</h3>
                        <div className="mt-2">
                            <div className="flex items-center justify-between">
                                <span className="text-gray-600">Email:</span>
                                <span className="text-gray-800">{supplierData?.email}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PersonalInfo