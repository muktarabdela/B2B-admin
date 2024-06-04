import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectLink, setIsSidebarOpen } from '../../store/uiSlice';
import { FaTachometerAlt, FaCalendarAlt, FaUser, FaWpforms, FaChartLine, FaLayerGroup, FaUserShield } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import product from "../../assets/product.png"
import all_product from "../../assets/all-product.png"
const Sidebar = () => {
    const [isOpenProducts, setIsOpenProducts] = useState(false);
    const [isOpenReports, setIsOpenReports] = useState(false);
    const [isOpenBill, setIsOpenBill] = useState(false);

    const dispatch = useDispatch();
    const isSidebarOpen = useSelector((state) => state.ui.isSidebarOpen);
    const selectedLink = useSelector((state) => state.ui.selectedLink);

    const activeLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 w-[13em] mx-auto rounded-lg text-white bg-blue-800 text-white text-md m-2';
    const inactiveLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 text-gray-700 font-semibold text-md m-2 hover:bg-white rounded-md hover:w-[12em] hover:shadow-md';

    const links = [
        { name: 'Dashboard', to: '/dashboard', icon: <FaTachometerAlt /> },
        { name: 'Profile', to: '/profile', icon: <FaUser /> },
    ];

    const users = [
        { name: 'Supplier', href: '/supplier', icon: <FaTachometerAlt /> },
        { name: 'Business', href: '/business', icon: <FaCalendarAlt /> },
        { name: 'Personal user', href: '/personal', icon: <FaUser /> },
    ];

    const products = [
        { name: 'All Products', to: '/all-products', icon: <img className='w-6 h-6' src={all_product} alt="" /> },
        {
            name: 'Pending', to: '/pending', icon: <div>
                <svg width="30" height="25" fill="none" stroke="#363636" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2a10 10 0 1 0 0 20 10 10 0 1 0 0-20z"></path>
                    <path d="M12 6v6l4 2"></path>
                </svg>
            </div>
        },
        {
            name: 'Approve', to: '/approve', icon: <svg width="30" height="25" fill="none" stroke="#363636" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="m9 11 3 3L22 4"></path>
                <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
            </svg>
        },
        {
            name: 'Rejected', to: '/rejected', icon: <svg width="30" height="25" fill="none" stroke="#363636" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <rect width="18" height="18" x="3" y="3" rx="2" ry="2"></rect>
                <path d="m9 9 6 6"></path>
                <path d="m15 9-6 6"></path>
            </svg>
        },
        // { name: 'Failed', to: '/failed', icon: <FaChartLine /> },
        ,

    ];
    const reports = [
        { name: 'Sales report', to: '/sales-report', icon: <img className='w-6 h-6' src={all_product} alt="" /> },
        {
            name: 'Users report', to: '/users-report', icon: <div>
                <svg width="30" height="25" fill="none" stroke="#363636" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2a10 10 0 1 0 0 20 10 10 0 1 0 0-20z"></path>
                    <path d="M12 6v6l4 2"></path>
                </svg>
            </div>
        },
    ];
    const Bills = [
        { name: 'All Transactions', to: '/all-transactions', icon: <img className='w-6 h-6' src={all_product} alt="" /> },
        {
            name: 'pending', to: '/pending', icon: <div>
                <svg width="30" height="25" fill="none" stroke="#363636" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2a10 10 0 1 0 0 20 10 10 0 1 0 0-20z"></path>
                    <path d="M12 6v6l4 2"></path>
                </svg>
            </div>
        },
        {
            name: 'Approve', to: '/approve', icon: <div>
                <svg width="30" height="25" fill="none" stroke="#363636" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2a10 10 0 1 0 0 20 10 10 0 1 0 0-20z"></path>
                    <path d="M12 6v6l4 2"></path>
                </svg>
            </div>
        },
    ];
    const handleProductClick = () => {
        setIsOpenProducts(!isOpenProducts);
        setIsOpenReports(false)
        setIsOpenBill(false)
    };
    const handleReportClick = () => {
        setIsOpenReports(!isOpenReports);
        setIsOpenProducts(false)
        setIsOpenBill(false)
    };
    const handleBillClick = () => {
        setIsOpenBill(!isOpenBill);
        setIsOpenProducts(false)
        setIsOpenReports(false)
    };
    return (
        <div className={`fixed inset-0 overflow-hidden z-50 ${isSidebarOpen ? 'block' : 'hidden '} 
        transition-transform duration-300 ease-in-out border bg-gray-50 border-gray-400 rounded-lg text-black w-[18em] overflow-y-scroll mt-20 lg:mt-0`}>

            <div className="flex flex-col p-10 mt-0">
                <h2 className="text-[1.3em] font-bold my-4">E-PHARM Admin</h2>

                <form className="relative mx-auto flex w-[15em] items-center justify-between rounded-md border shadow-lg lg:hidden">
                    <svg
                        className="absolute left-2 block h-5 w-5 text-gray-400"
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <circle cx={11} cy={11} r={8} />
                        <line x1={21} y1={21} x2="16.65" y2="16.65" />
                    </svg>
                    <input
                        type="name"
                        name="search"
                        className="h-10 w-full rounded-md py-4 pr-4 pl-12 outline-none focus:ring-2"
                        placeholder="Search"
                    />
                    <button
                        type="submit"
                        className="absolute right-0 mr-1 inline-flex h-9 items-center justify-center rounded-lg bg-blue-800 px-2 font-medium text-white focus:ring-4 hover:bg-gray-700"
                    >
                        Search
                    </button>
                </form>

                <nav className="mt-4 text-gray-500 text-[1.1em] font-normal ">
                    <ul>
                        {links.map((link) => (
                            <li key={link.name} className={selectedLink === link.name.toLowerCase() ? activeLink : inactiveLink}>
                                <Link to={link.to}
                                    onClick={() => {
                                        dispatch(selectLink(link.name.toLowerCase()));
                                        if (window.innerWidth <= 768) {
                                            dispatch(setIsSidebarOpen(false));
                                        }
                                    }} className="flex items-center gap-2 ">
                                    {link.icon}
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                    </ul>


                    <ul>
                        <li className={inactiveLink}>
                            <div
                                onClick={() => {
                                    handleProductClick()
                                    if (window.innerWidth <= 768) {
                                    }
                                }} className="flex items-center gap-2 cursor-pointer">
                                <img className='w-6 h-6' src={product} alt="" />
                                Products
                                {isOpenProducts ? (<svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={30}
                                    height={30}
                                    viewBox="0 0 24 24"
                                    style={{ fill: "rgba(65, 63, 63, 1)", transform: "", msfilter: "" }}
                                >
                                    <path d="m6.293 13.293 1.414 1.414L12 10.414l4.293 4.293 1.414-1.414L12 7.586z" />
                                </svg>
                                ) : (<svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={30}
                                    height={30}
                                    viewBox="0 0 24 24"
                                    style={{ fill: "rgba(65, 63, 63, 1)", transform: "", msfilter: "" }}
                                >
                                    <path d="M16.293 9.293 12 13.586 7.707 9.293l-1.414 1.414L12 16.414l5.707-5.707z" />
                                </svg>)}

                            </div>
                        </li>
                        {isOpenProducts && (
                            <div className="flex flex-col gap-2 mt-2 mr-2 text-gray-500">
                                {products?.map((link, index) => (
                                    <li key={link.name} className=
                                        {`${selectedLink === link.name.toLowerCase() ? activeLink : inactiveLink} my-0 m-3 whitespace-nowrap`}>
                                        <Link to={link.to}
                                            onClick={() => {
                                                dispatch(selectLink(link.name.toLowerCase()));
                                                if (window.innerWidth <= 768) {
                                                    dispatch(setIsSidebarOpen(false));
                                                }
                                            }} className="flex items-center gap-2 ">
                                            {link.icon}
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </div>
                        )}
                    </ul>


                    <ul>
                        <li className={inactiveLink}>
                            <div
                                onClick={() => handleReportClick()}
                                className="flex items-center gap-2 cursor-pointer">
                                <img className='w-6 h-6' src={product} alt="" />
                                Reports
                                {isOpenReports ? (<svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={30}
                                    height={30}
                                    viewBox="0 0 24 24"
                                    style={{ fill: "rgba(65, 63, 63, 1)", transform: "", msfilter: "" }}
                                >
                                    <path d="m6.293 13.293 1.414 1.414L12 10.414l4.293 4.293 1.414-1.414L12 7.586z" />
                                </svg>
                                ) : (<svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={30}
                                    height={30}
                                    viewBox="0 0 24 24"
                                    style={{ fill: "rgba(65, 63, 63, 1)", transform: "", msfilter: "" }}
                                >
                                    <path d="M16.293 9.293 12 13.586 7.707 9.293l-1.414 1.414L12 16.414l5.707-5.707z" />
                                </svg>)}

                            </div>
                        </li>
                        {isOpenReports && (
                            <div className="flex flex-col gap-2 mt-2 mr-2 text-gray-500">
                                {reports?.map((link, index) => (
                                    <li key={link.name} className=
                                        {`${selectedLink === link.name.toLowerCase() ? activeLink : inactiveLink} my-0 m-3 whitespace-nowrap`}>
                                        <Link to={link.to}
                                            onClick={() => {
                                                dispatch(selectLink(link.name.toLowerCase()));
                                                if (window.innerWidth <= 768) {
                                                    dispatch(setIsSidebarOpen(false));
                                                }
                                            }} className="flex items-center gap-2 ">
                                            {link.icon}
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </div>
                        )}
                    </ul>
                    <ul>
                        <li className={inactiveLink}>
                            <div
                                onClick={() => handleBillClick()}
                                className="flex items-center gap-2 cursor-pointer">
                                <img className='w-6 h-6' src={product} alt="" />
                                Billing Info
                                {isOpenBill ? (<svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={30}
                                    height={30}
                                    viewBox="0 0 24 24"
                                    style={{ fill: "rgba(65, 63, 63, 1)", transform: "", msfilter: "" }}
                                >
                                    <path d="m6.293 13.293 1.414 1.414L12 10.414l4.293 4.293 1.414-1.414L12 7.586z" />
                                </svg>
                                ) : (<svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={30}
                                    height={30}
                                    viewBox="0 0 24 24"
                                    style={{ fill: "rgba(65, 63, 63, 1)", transform: "", msfilter: "" }}
                                >
                                    <path d="M16.293 9.293 12 13.586 7.707 9.293l-1.414 1.414L12 16.414l5.707-5.707z" />
                                </svg>)}

                            </div>
                        </li>
                        {isOpenBill && (
                            <div className="flex flex-col gap-2 mt-2 mr-2 text-gray-500">
                                {Bills?.map((link, index) => (
                                    <li key={link.name} className=
                                        {`${selectedLink === link.name.toLowerCase() ? activeLink : inactiveLink} my-0 m-3 whitespace-nowrap`}>
                                        <Link to={link.to}
                                            onClick={() => {
                                                dispatch(selectLink(link.name.toLowerCase()));
                                                if (window.innerWidth <= 768) {
                                                    dispatch(setIsSidebarOpen(false));
                                                }
                                            }} className="flex items-center gap-2 ">
                                            {link.icon}
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </div>
                        )}
                    </ul>


                </nav>


                <h2 className="text-[1.3em] font-bold">Users</h2>
                <nav className="mt-4 text-gray-500 text-[1.1em] font-normal">
                    <ul>
                        {users.map((link) => (
                            <li key={link.name} className={selectedLink === link.name.toLowerCase() ? activeLink : inactiveLink}>
                                <Link to={link.href} onClick={() => {
                                    dispatch(selectLink(link.name.toLowerCase()));
                                    if (window.innerWidth <= 768) {
                                        dispatch(setIsSidebarOpen(false));
                                    }
                                }} className="flex items-center gap-2">
                                    {link.icon}
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </div >
    );
};

export default Sidebar;
