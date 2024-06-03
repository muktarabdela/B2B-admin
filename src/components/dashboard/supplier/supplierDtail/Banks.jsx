import React from 'react';

// Dummy data for banking array
const banking = [
    {
        bank_name: 'Bank of America',
        account_name: 'John Doe',
        account_number: '123456789'
    },
    {
        bank_name: 'Wells Fargo',
        account_name: 'Jane Smith',
        account_number: '987654321'
    }
];

const Banks = () => {
    return (
        <div className="w-[40em] mx-auto p-6 bg-white shadow-md rounded-lg">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Supplier Profile</h2>

            {banking.map((bank, index) => (
                <div key={index} className="mb-4">
                    <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
                        <h3 className="text-xl font-medium text-gray-700">Banks Detail</h3>
                        <div className="mt-2">
                            <div className="flex items-center justify-between">
                                <span className="text-gray-600">Bank Name:</span>
                                <span className="text-gray-800">{bank.bank_name}</span>
                            </div>
                            <div className="flex items-center justify-between mt-2">
                                <span className="text-gray-600">Account Name:</span>
                                <span className="text-gray-800">{bank.account_name}</span>
                            </div>
                            <div className="flex items-center justify-between mt-2">
                                <span className="text-gray-600">Account Number:</span>
                                <span className="text-gray-800">{bank.account_number}</span>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Banks;
