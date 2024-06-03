import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { closeSidebar, selectLink, setIsSidebarOpen } from '../../store/uiSlice';
import { FaTachometerAlt, FaCalendarAlt, FaUser, FaWpforms, FaChartLine, FaLayerGroup, FaUserShield } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    const dispatch = useDispatch();
    const isSidebarOpen = useSelector((state) => state.ui.isSidebarOpen);
    const selectedLink = useSelector((state) => state.ui.selectedLink);

    const activeLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 w-[13em] mx-auto rounded-lg text-white bg-blue-800 text-white text-md m-2';
    const inactiveLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 text-gray-700 font-semibold text-md m-2';

    const links = [
        { name: 'Dashboard', to: '/dashboard', icon: <FaTachometerAlt /> },
        { name: 'Calendar', to: '/calendar', icon: <FaCalendarAlt /> },
        { name: 'Profile', to: '/profile', icon: <FaUser /> },
        { name: 'Forms', to: '/forms', icon: <FaWpforms /> },
    ];

    const users = [
        { name: 'Supplier', href: '/supplier', icon: <FaTachometerAlt /> },
        { name: 'Business', href: '/business', icon: <FaCalendarAlt /> },
        { name: 'Personal user', href: '/personal', icon: <FaUser /> },
    ];

    const others = [
        { name: 'Chart', to: '/chart', icon: <FaChartLine /> },
        { name: 'UI Elements', to: '/ui-elements', icon: <FaLayerGroup /> },
        { name: 'Authentication', to: '/authentication', icon: <FaUserShield /> },
    ];

    return (
        <div className={`fixed inset-0 overflow-hidden z-50 ${isSidebarOpen ? 'block' : 'hidden'} 
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
                                    }} className="flex items-center gap-2">
                                    {link.icon}
                                    {link.name}
                                </Link>
                            </li>
                        ))}
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
        </div>
    );
};

export default Sidebar;
