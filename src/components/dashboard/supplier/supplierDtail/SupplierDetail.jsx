import React, { useEffect, useState } from 'react'
import PersonalInfo from './PersonalInfo'
import CompanyInfo from './CompanyInfo'
import CompanyDoc from './CompanyDoc'
import Shipping from './Shipping'
import Banks from './Banks'
import { useDispatch } from 'react-redux'
import { setDetailModal } from '../../../../store/uiSlice'

const SupplierDetail = ({ supplier }) => {
  console.log(supplier)
  const dispatch = useDispatch()
  const [activeComponent, setActiveComponent] = useState('Personal_info')

  const renderActiveComponent = () => {
    switch (activeComponent) {
      case 'Personal_info':
        return <PersonalInfo supplierData={supplier} />
      case 'company_Info':
        return <CompanyInfo supplierData={supplier} />
      case 'company_documentation':
        return <CompanyDoc supplierData={supplier} />
      case 'shipping':
        return <Shipping supplierData={supplier} />
      case 'bank_information':
        return <Banks supplierData={supplier} />
      default:
        return <contactInformation supplierData={supplier} />
    }
  }
  return (
    <div>
      <div
        className="py-12 bg-gray-700 transition duration-150 ease-in-out z-10 absolute top-0 right-0 bottom-0 left-0"
      >
        <div className="container mx-auto  max-w-6xl mr-20">
          <div className="relative py-8 px-5 md:px-10 bg-white shadow-md rounded border border-gray-400">

            Supplier user information Detail

            <div className='border-2 rounded mt-20 p-6 shadow-lg mb-20'>

              <div className='flex relative bottom-[4.3em] gap-10 overflow-x-auto'>
                <div
                  className={`${activeComponent === 'Personal_info'
                    ? 'text-black font-semibold border-blue-600 border-b-[3px] pb-2 whitespace-nowrap'
                    : ''
                    } cursor-pointer hover:border-b-[2px] pb-2 border-blue-500 text-gray-500 flex gap-2 items-center whitespace-nowrap`}
                  onClick={() => setActiveComponent('Personal_info')}
                >
                  {activeComponent === 'Personal_info' ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={20} // Use a consistent size for both icons
                      height={20}
                      viewBox="0 0 24 24"
                      style={{ fill: 'rgba(5, 5, 5, 1)', transform: '', msfilter: '' }}
                    >
                      <path d="M21 2H6a2 2 0 0 0-2 2v3H2v2h2v2H2v2h2v2H2v2h2v3a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1zm-8 2.999c1.648 0 3 1.351 3 3A3.012 3.012 0 0 1 13 11c-1.647 0-3-1.353-3-3.001 0-1.649 1.353-3 3-3zM19 18H7v-.75c0-2.219 2.705-4.5 6-4.5s6 2.281 6 4.5V18z" />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={20}
                      height={20}
                      viewBox="0 0 24 24"
                      style={{ fill: 'rgba(107, 114, 128, 1)', transform: '', msfilter: '' }}
                    >
                      <path d="M21 2H6a2 2 0 0 0-2 2v3H2v2h2v2H2v2h2v2H2v2h2v3a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1zm-8 2.999c1.648 0 3 1.351 3 3A3.012 3.012 0 0 1 13 11c-1.647 0-3-1.353-3-3.001 0-1.649 1.353-3 3-3zM19 18H7v-.75c0-2.219 2.705-4.5 6-4.5s6 2.281 6 4.5V18z" />
                    </svg>


                  )}
                  Personal Information
                </div>
                <div
                  className={`${activeComponent === 'company_Info'
                    ? 'text-black font-semibold border-blue-600 border-b-[3px] pb-2 whitespace-nowrap'
                    : ''
                    } cursor-pointer hover:border-b-[2px] pb-2 border-blue-500 text-gray-500 flex gap-2 items-center whitespace-nowrap`}
                  onClick={() => setActiveComponent('company_Info')}
                >
                  {activeComponent === 'company_Info' ? (
                    <svg
                      width={22}
                      height={22}
                      fill="none"
                      stroke="#000000"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M12 2a9 3 0 1 0 0 6 9 3 0 1 0 0-6z" />
                      <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
                      <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
                    </svg>

                  ) : (
                    <svg
                      width={22}
                      height={22}
                      fill="none"
                      stroke="#787878"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M12 2a9 3 0 1 0 0 6 9 3 0 1 0 0-6z" />
                      <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
                      <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
                    </svg>
                  )}
                  company Information
                </div>
                <div
                  className={`${activeComponent === 'company_documentation'
                    ? 'text-black font-semibold border-blue-600 border-b-[3px] pb-2 whitespace-nowrap'
                    : ''
                    } cursor-pointer hover:border-b-[2px] pb-2 border-blue-500 text-gray-500 flex gap-2 items-center whitespace-nowrap`}
                  onClick={() => setActiveComponent('company_documentation')}
                >
                  {activeComponent === 'company_documentation' ? (
                    <svg
                      width={22}
                      height={22}
                      fill="none"
                      stroke="#000000"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z" />
                      <path d="M13 2v7h7" />
                    </svg>


                  ) : (
                    <svg
                      width={22}
                      height={22}
                      fill="none"
                      stroke="#a8a8a8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z" />
                      <path d="M13 2v7h7" />
                    </svg>



                  )}
                  company Documentation
                </div>
                <div
                  className={`${activeComponent === 'shipping'
                    ? 'text-black font-semibold border-blue-600 border-b-[3px] pb-2 whitespace-nowrap'
                    : ''
                    } cursor-pointer hover:border-b-[2px] pb-2 border-blue-500 text-gray-500 flex gap-2 items-center whitespace-nowrap`}
                  onClick={() => setActiveComponent('shipping')}
                >
                  {activeComponent === 'shipping' ? (
                    <svg
                      width={22}
                      height={22}
                      fill="none"
                      stroke="#000000"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M12 2a9 3 0 1 0 0 6 9 3 0 1 0 0-6z" />
                      <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
                      <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
                    </svg>

                  ) : (
                    <svg
                      width={22}
                      height={22}
                      fill="none"
                      stroke="#787878"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M12 2a9 3 0 1 0 0 6 9 3 0 1 0 0-6z" />
                      <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
                      <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
                    </svg>
                  )}
                  Shipping Info
                </div>
                <div
                  className={`${activeComponent === 'bank_information'
                    ? 'text-black font-semibold border-blue-600 border-b-[3px] pb-2 whitespace-nowrap'
                    : ''
                    } cursor-pointer hover:border-b-[2px] pb-2 border-blue-500 text-gray-500 flex gap-2 items-center whitespace-nowrap`}
                  onClick={() => setActiveComponent('bank_information')}
                >
                  {activeComponent === 'bank_information' ? (
                    <svg
                      width={22}
                      height={22}
                      fill="#000000"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M11.415 2.395a1.99 1.99 0 0 1 1.17 0l2.986.918a16.722 16.722 0 0 1 4.39 2.089c1.054.705.555 2.348-.713 2.348H4.752c-1.268 0-1.767-1.643-.714-2.348a16.721 16.721 0 0 1 4.391-2.09l2.986-.917Zm.73 1.434a.49.49 0 0 0-.29 0l-2.985.918A15.22 15.22 0 0 0 5.5 6.25h13a15.22 15.22 0 0 0-3.37-1.503l-2.986-.918Z"
                        clipRule="evenodd"
                      />
                      <path d="M4.25 21a.75.75 0 0 1 .75-.75h14a.75.75 0 0 1 0 1.5H5a.75.75 0 0 1-.75-.75Z" />
                      <path d="M6.25 17a.75.75 0 0 0 1.5 0v-6a.75.75 0 0 0-1.5 0v6Z" />
                      <path d="M12 17.75a.75.75 0 0 1-.75-.75v-6a.75.75 0 0 1 1.5 0v6a.75.75 0 0 1-.75.75Z" />
                      <path d="M16.25 17a.75.75 0 0 0 1.5 0v-6a.75.75 0 0 0-1.5 0v6Z" />
                    </svg>



                  ) : (
                    <svg
                      width={22}
                      height={22}
                      fill="#a7a0a0"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M11.415 2.395a1.99 1.99 0 0 1 1.17 0l2.986.918a16.722 16.722 0 0 1 4.39 2.089c1.054.705.555 2.348-.713 2.348H4.752c-1.268 0-1.767-1.643-.714-2.348a16.721 16.721 0 0 1 4.391-2.09l2.986-.917Zm.73 1.434a.49.49 0 0 0-.29 0l-2.985.918A15.22 15.22 0 0 0 5.5 6.25h13a15.22 15.22 0 0 0-3.37-1.503l-2.986-.918Z"
                        clipRule="evenodd"
                      />
                      <path d="M4.25 21a.75.75 0 0 1 .75-.75h14a.75.75 0 0 1 0 1.5H5a.75.75 0 0 1-.75-.75Z" />
                      <path d="M6.25 17a.75.75 0 0 0 1.5 0v-6a.75.75 0 0 0-1.5 0v6Z" />
                      <path d="M12 17.75a.75.75 0 0 1-.75-.75v-6a.75.75 0 0 1 1.5 0v6a.75.75 0 0 1-.75.75Z" />
                      <path d="M16.25 17a.75.75 0 0 0 1.5 0v-6a.75.75 0 0 0-1.5 0v6Z" />
                    </svg>




                  )}
                  Bank Information
                </div>
              </div>

              <div className='flex gap-5'>
                {renderActiveComponent()}
              </div>

              <button
                onClick={() => dispatch(setDetailModal(false))}
                className="  ml-3 mt-10 border-2 border-gray-200 rounded-lg px-6 py-2"
              >
                Cancel
              </button>
            </div>

          </div>
        </div>
      </div>

    </div>
  )
}

export default SupplierDetail