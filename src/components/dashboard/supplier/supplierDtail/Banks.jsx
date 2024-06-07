import React from 'react';

const Banks = ({ supplierData }) => {
    console.log("supplier bank", supplierData);

    if (!supplierData || !supplierData.banking_details) {
        return <div>No data available</div>;
    }

    return (
        <div className="w-[40em] mx-auto p-6 bg-white shadow-md rounded-lg">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Supplier Profile</h2>

            {supplierData.banking_details.split(',').map((bankInfo, index) => {
                // Split bank info by pipe (|) separator
                const [bankName, accountName, accountNumber] = bankInfo.trim().split('|');

                return (
                    <div key={index} className="mb-4">
                        <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
                            <h3 className="text-xl font-medium text-gray-700">Banks Detail</h3>
                            <div className="mt-2">
                                <div className="flex items-center justify-between">
                                    <span className="text-gray-600">Bank Name:</span>
                                    <span className="text-gray-800">{bankName}</span>
                                </div>
                                <div className="flex items-center justify-between mt-2">
                                    <span className="text-gray-600">Account Name:</span>
                                    <span className="text-gray-800">{accountName}</span>
                                </div>
                                <div className="flex items-center justify-between mt-2">
                                    <span className="text-gray-600">Account Number:</span>
                                    <span className="text-gray-800">{accountNumber}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

export default Banks;
