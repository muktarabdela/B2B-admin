import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setIsSidebarOpen, setOpenSetting } from '../../store/uiSlice';
import avatar from "../../assets/9440461.jpg";
import { useAuth } from '../../context/AuthContext';

const Navbar = () => {
    const dispatch = useDispatch();
    const isSidebarOpen = useSelector((state) => state.ui.isSidebarOpen);
    const openSetting = useSelector((state) => state.ui.openSetting);
    const handleSettingClick = () => {
        dispatch(setOpenSetting(!openSetting));
    };

    const { logout } = useAuth();

    return (
        <header className="shadow mb-2 w-full z-100 ">
            <div className="relative flex max-w-screen-xl flex-col overflow-hidden px-4 py-4 md:mx-auto md:flex-row md:items-center">
                <div className={` mx-auto w-screen max-w-screen-md leading-6 hidden lg:block`}>
                    <form className="relative mx-auto flex w-[25em] items-center justify-between rounded-md border shadow-lg">
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
                            className="h-10 w-full rounded-md py-4 pr-40 pl-12 outline-none focus:ring-2"
                            placeholder="Search"
                        />
                        <button
                            type="submit"
                            className="absolute right-0 mr-1 inline-flex h-9 items-center justify-center rounded-lg bg-blue-800 px-5 font-medium text-white focus:ring-4 hover:bg-gray-700"
                        >
                            Search
                        </button>
                    </form>
                </div>

                <nav>
                    <ul className="flex gap-7 justify-center items-center">
                        <div className="block lg:hidden">
                            {isSidebarOpen ? (
                                <svg
                                    onClick={() => dispatch(setIsSidebarOpen(false))}
                                    width="30" height="30" fill="none" stroke="#454545" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"
                                    className="cursor-pointer"
                                >
                                    <path d="M17.25 17.25L6.75 6.75" />
                                    <path d="M17.25 6.75L6.75 17.25" />
                                </svg>
                            ) : (
                                <svg
                                    onClick={() => dispatch(setIsSidebarOpen(true))}
                                    width="30" height="30" fill="#454545" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"
                                    className="cursor-pointer"
                                >
                                    <path d="M3 18h18v-2H3v2Zm0-5h18v-2H3v2Zm0-7v2h18V6H3Z" />
                                </svg>
                            )}
                        </div>
                        <li className="text-gray-600">
                            <div>
                                <span className="absolute border-2 right-[16.3em] top-[1.6em]  border-orange-700 rounded-full  bg-orange-700 p-2">
                                    <p className="absolute bottom-[-2px] left-1 text-[14px] text-white">
                                        2
                                    </p>
                                </span>
                                <svg width="30" height="30" fill="#454545" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M20.629 15.999l-.23-.278c-1.03-1.247-1.655-2-1.655-5.531 0-1.828-.437-3.328-1.3-4.453-.635-.832-1.494-1.462-2.626-1.928a.142.142 0 0 1-.039-.031C14.372 2.414 13.257 1.5 12 1.5c-1.256 0-2.37.914-2.778 2.276a.147.147 0 0 1-.038.03c-2.644 1.09-3.928 3.177-3.928 6.383 0 3.533-.623 4.286-1.655 5.531l-.23.279a1.648 1.648 0 0 0-.217 1.763c.289.61.905.988 1.609.988h14.48c.7 0 1.312-.378 1.602-.985a1.649 1.649 0 0 0-.217-1.763z" />
                                    <path d="M12 22.5a3.753 3.753 0 0 0 3.303-1.975.187.187 0 0 0-.074-.25.187.187 0 0 0-.092-.025H8.866a.188.188 0 0 0-.167.275A3.753 3.753 0 0 0 12 22.5z" />
                                </svg>

                            </div>
                        </li>
                        <li className="text-gray-600">
                            <div>
                                <span className="absolute border-2 right-[12.5em] top-[1.5em]  border-orange-700 rounded-full  bg-orange-700 p-2">
                                    <p className="absolute bottom-[-2px] left-1 text-[14px] text-white">
                                        2
                                    </p>
                                </span>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={30}
                                    height={30}
                                    viewBox="0 0 24 24"
                                    style={{ fill: "rgba(0, 0, 0, 1)" }}
                                >
                                    <circle cx="9.5" cy="9.5" r="1.5" />
                                    <circle cx="14.5" cy="9.5" r="1.5" />
                                    <path d="M12 2C6.486 2 2 5.589 2 10c0 2.908 1.897 5.515 5 6.934V22l5.34-4.004C17.697 17.852 22 14.32 22 10c0-4.411-4.486-8-10-8zm0 14h-.333L9 18v-2.417l-.641-.247C5.671 14.301 4 12.256 4 10c0-3.309 3.589-6 8-6s8 2.691 8 6-3.589 6-8 6z" />
                                </svg>
                            </div>
                        </li>
                        <li className="text-gray-600">
                            <div className="flex gap-3">
                                <p className="flex flex-col text-lg cursor-pointer font-semibold"
                                    onClick={handleSettingClick}>
                                    Nurlgh
                                    <span className="text-sm text-gray-500">Admin</span>
                                </p>
                                <img
                                    onClick={handleSettingClick}
                                    className="w-[3.5em] h-[3.5em] rounded-full cursor-pointer"
                                    src={avatar}
                                    alt="Rounded avatar"
                                />
                                <svg
                                    onClick={handleSettingClick}
                                    className="relative right-3 cursor-pointer"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={30}
                                    height={30}
                                    viewBox="0 0 24 24"
                                    style={{ fill: "rgba(147, 147, 147, 1)" }}
                                >
                                    <path d="M16.293 9.293L12 13.586 7.707 9.293l-1.414 1.414L12 16.414l5.707-5.707z" />
                                </svg>
                            </div>
                            <div className={`${openSetting ? "block" : "hidden"} bg-gray-100 w-[15em] h-[15em] fixed rounded right-[10em] mt-3 p-5`}>
                                <p className="flex gap-4 text-lg mb-2">
                                    <svg width="22" height="22" fill="none" stroke="#454545" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M16.125 6.75c-.184 2.478-2.063 4.5-4.125 4.5-2.063 0-3.945-2.021-4.125-4.5-.188-2.578 1.64-4.5 4.125-4.5 2.484 0 4.312 1.969 4.125 4.5z" />
                                        <path d="M12 14.25c-4.078 0-8.217 2.25-8.983 6.497-.092.512.197 1.003.733 1.003h16.5c.536 0 .826-.491.734-1.003C20.217 16.5 16.078 14.25 12 14.25z" />
                                    </svg>
                                    My Profile
                                </p>
                                <p className="flex gap-4 text-lg mb-2">
                                    <svg className="mt-1" width="20" height="20" fill="#454545" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12 14.25a2.25 2.25 0 1 0 0-4.5 2.25 2.25 0 0 0 0 4.5z" />
                                        <path d="m22.05 14.063-.023-.018-1.479-1.16a.756.756 0 0 1-.286-.625v-.542a.75.75 0 0 1 .287-.62l1.479-1.16.022-.018a1.251 1.251 0 0 0 .276-1.597L20.324 4.86a1.259 1.259 0 0 0-1.527-.54l-.017.006-1.739.7a.747.747 0 0 1-.678-.06 8.417 8.417 0 0 0-.469-.275.747.747 0 0 1-.383-.554l-.262-1.856-.006-.034a1.276 1.276 0 0 0-1.239-1.027H9.996a1.262 1.262 0 0 0-1.24 1.05l-.004.026-.262 1.86a.75.75 0 0 1-.38.553 8.21 8.21 0 0 0-.47.273.746.746 0 0 1-.676.06l-1.74-.704-.017-.006a1.26 1.26 0 0 0-1.522.531l-.006.01L1.674 8.34a1.252 1.252 0 0 0 .276 1.598l.023.018 1.479 1.16a.755.755 0 0 1 .286.625v.542a.75.75 0 0 1-.287.62l-1.478 1.16-.023.018a1.25 1.25 0 0 0-.276 1.597l2.002 3.464a1.258 1.258 0 0 0 1.527.54l.017-.006 1.737-.7a.747.747 0 0 1 .678.06c.154.098.31.19.47.275a.747.747 0 0 1 .383.554l.26 1.856.006.034a1.275 1.275 0 0 0 1.242 1.027h4.008a1.262 1.262 0 0 0 1.24-1.05l.005-.026.26-1.86a.75.75 0 0 1 .384-.553 8.32 8.32 0 0 0 .469-.273.747.747 0 0 1 .676-.06l1.74.701.017.007a1.26 1.26 0 0 0 1.529-.542l2.002-3.464a1.251 1.251 0 0 0-.276-1.598zM16.293 7.293a3.75 3.75 0 1 1-3.922 3.922 3.76 3.76 0 0 1 3.922-3.922z" />
                                    </svg>
                                    Setting
                                </p>
                                <p className="flex gap-4 text-lg mb-2">
                                    <svg className="mt-1" width="25" height="25" fill="none" stroke="#454545" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M14.25 15.75v1.875a1.875 1.875 0 0 1-1.875 1.875h-7.5A1.875 1.875 0 0 1 3 17.625V6.375A1.875 1.875 0 0 1 4.875 4.5H12c1.036 0 2.25.84 2.25 1.875V8.25" />
                                        <path d="M17.25 15.75L21 12l-3.75-3.75" />
                                        <path d="M8.25 12h12" />
                                    </svg>
                                    <button
                                        type="button"
                                        onClick={logout}
                                        className="text-white px-2  rounded bg-red-500"
                                    >
                                        Log Out
                                    </button>                                </p>
                            </div>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Navbar;
