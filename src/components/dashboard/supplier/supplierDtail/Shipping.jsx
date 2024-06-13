import React from 'react'

const Shipping = ({ Data }) => {
  const supplierData = Data && Data.length > 0 ? Data[0] : {};

  if (!supplierData || !supplierData.shipping_city) {
    return <div>No data available</div>;
  }
  return (

    <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Supplier Profile</h2>
      <div className="w-[40em]">
        <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
          <h3 className="text-xl font-medium text-gray-700">Supplier Information</h3>
          <div className="mt-2">
            <div className="flex items-center justify-between">
              <span className="text-gray-600">shipping city :</span>
              <span className="text-gray-800">{supplierData?.shipping_city} </span>
            </div>
            <div className="flex items-center justify-between mt-2">
              <span className="text-gray-600"> shipping keble:</span>
              <span className="text-gray-800">{supplierData?.shipping_keble}</span>
            </div>
            <div className="flex items-center justify-between mt-2">
              <span className="text-gray-600"> shipping region:</span>
              <span className="text-gray-800">{supplierData?.shipping_region}</span>
            </div>
            <div className="flex items-center justify-between mt-2">
              <span className="text-gray-600">shipping woreda:</span>
              <span className="text-gray-800">{supplierData?.shipping_woreda}</span>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Shipping