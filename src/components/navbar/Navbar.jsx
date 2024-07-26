import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setIsSidebarOpen, setOpenSetting } from '../../store/uiSlice';
import {
    DropdownMenu,
    DropdownMenuCheckboxItem,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useAuth } from '../../context/AuthContext';
import { Button } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

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
                <div className={` mx-auto w-screen max-w-screen-md leading-6 hidden lg:block mr-0`}>
                    <form className="relative mx-auto flex w-[25em] items-center justify-between rounded-md border shadow-lg ">

                        <input
                            type="name"
                            name="search"
                            className="h-10 w-full rounded-md py-4 pr-40 pl-2 outline-none focus:ring-2"
                            placeholder="Search"
                        />
                        <Button className='p-2 mr-1' type="primary" icon={<SearchOutlined />} iconPosition='end'>
                            Search
                        </Button>
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
                                <span className="absolute border-2 right-[4.2em] bottom-[2.4em]  border-orange-700 rounded-full  bg-orange-700 p-2">
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
                                <span className="absolute border-2 right-[7.7em] bottom-[2.5em]  border-orange-700 rounded-full  bg-orange-700 p-2">
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
                        <li className="text-gray-600 items-center flex">

                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <Button
                                        variant="outline"
                                        size="icon"
                                        className="w-[30px] h-[30px] rounded-full"
                                    >
                                        <Avatar>
                                            <AvatarImage src="https://github.com/shadcn.png" />
                                            <AvatarFallback>CN</AvatarFallback>
                                        </Avatar>

                                    </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent align="end">
                                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                                    <DropdownMenuSeparator />
                                    <DropdownMenuItem>Settings</DropdownMenuItem>
                                    <DropdownMenuItem>Support</DropdownMenuItem>
                                    <DropdownMenuSeparator />
                                    <DropdownMenuItem onClick={() => logout()} className="cursor-pointer">Logout</DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Navbar;
