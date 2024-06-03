import React from 'react'

const Shipping = () => {
  return (

    <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Personal Profile</h2>
      <div className="w-[40em]">
        <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
          <h3 className="text-xl font-medium text-gray-700">Personal Information</h3>
          <div className="mt-2">
            <div className="flex items-center justify-between">
              <span className="text-gray-600">shipping city :</span>
              <span className="text-gray-800">Bole</span>
            </div>
            <div className="flex items-center justify-between mt-2">
              <span className="text-gray-600"> shipping keble:</span>
              <span className="text-gray-800">kebel 04</span>
            </div>
            <div className="flex items-center justify-between mt-2">
              <span className="text-gray-600"> shipping region:</span>
              <span className="text-gray-800">Adiss ababa</span>
            </div>
            <div className="flex items-center justify-between mt-2">
              <span className="text-gray-600">shipping woreda:</span>
              <span className="text-gray-800">woreda 02</span>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Shipping