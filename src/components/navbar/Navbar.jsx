import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setIsSidebarOpen, setOpenSetting } from '../../store/uiSlice';
import { Avatar, AvatarFallback } from '../ui/avatar';
import {
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuItem
} from "@/components/ui/dropdown-menu";
import { useAuth } from '../../context/AuthContext';
import { Button } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import MobileSidebar from './MobileSidebar';
import { Link } from 'react-router-dom';
import { Bell, ChevronDown, LogOut, UserRound } from 'lucide-react';

const Navbar = () => {
    const dispatch = useDispatch();
    const isSidebarOpen = useSelector((state) => state.ui.isSidebarOpen);
    const openSetting = useSelector((state) => state.ui.openSetting);
    const handleSettingClick = () => {
        dispatch(setOpenSetting(!openSetting));
    };

    const { logout } = useAuth();

    return (
        <div className='fixed top-0 w-full z-50 backdrop-blur-md border-b '>
            {/* <Tour
            open={openTour}
            onClose={() => setOpenTour(false)}
            steps={steps}
            mask={{ color: 'rgba(0, 0, 0, 0.4)' }}
            arrow={false} // Hide default arrow
            className="custom-tour" // Add custom class for styling
            indicatorsRender={(current, total) => (
                <span className="tour-indicator">
                    {current + 1} / {total}
                </span>
            )}
        /> */}
            <header className="flex justify-between items-center px-4 sm:px-8 max-w-5xl mx-auto py-4 z-100">
                <div className='flex items-center'>
                    <div
                        className='lg:hidden flex items-center'>
                        <MobileSidebar />
                    </div>
        
            </div>

                <div className="flex items-center gap-6">
                    <div className="cursor-pointer">
                        <Bell />
                    </div>
                    <DropdownMenu>
                        <DropdownMenuTrigger>
                            <div className='flex items-center gap-1 cursor-pointer'>
                                <Avatar
                                    className="cursor-pointer w-10 h-10 bg-blue-500 text-white flex items-center justify-center rounded-full">
                                    <AvatarFallback className="text-xl font-bold bg-primary">
                                        <UserRound className="h-4 w-4" />
                                    </AvatarFallback>
                                </Avatar>
                                <ChevronDown className="h-4 w-4 text-gray-500" />
                            </div>

                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                            <DropdownMenuLabel>My Account</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem className="cursor-pointer flex gap-2">
                                <Link href={`/profile`}>Profile</Link>
                                <UserRound className="h-4 w-4" />
                            </DropdownMenuItem>
                            <DropdownMenuItem className="cursor-pointer flex gap-2" onClick={logout}>
                                Logout
                                <LogOut className="h-4 w-4" />
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </header>
        </div>
    );
};

export default Navbar;
