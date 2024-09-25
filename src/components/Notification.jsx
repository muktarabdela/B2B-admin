import React, { useEffect, useState } from 'react';
import { Bell, CheckCircle, XCircle } from 'lucide-react';
import { Button, Drawer } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { setNotification } from '@/store/uiSlice';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { getAllAdminNotifications } from '@/api/Admin';

const Notification = () => {
    const dispatch = useDispatch();
    const [notifications, setNotifications] = useState([]);
    const [loading, setLoading] = useState(true);
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [isOpenNotification, setIsOpenNotification] = useState(false);
    const [selectedNotification, setSelectedNotification] = useState(null);
    const notificationCount = useSelector((state) => state.ui.notification);
    const detailNotification = (notification) => {
        return (
            <Dialog open={isOpenNotification} onOpenChange={setIsOpenNotification}>
                <DialogContent className="sm:max-w-[425px] p-6 bg-white rounded-lg shadow-lg">
                    <DialogHeader>
                        <DialogTitle className="text-xl font-bold text-gray-900">
                            {notification?.title}
                        </DialogTitle>
                        <DialogDescription className="text-gray-600 mt-2">
                            {notification?.message}
                        </DialogDescription>
                    </DialogHeader>

                    <div className="mt-4 text-sm text-gray-500">
                        <p> {new Date(notification?.created_at).toLocaleString()}</p>
                    </div>

                    <div className="mt-6 flex justify-end">
                        <button
                            onClick={() => setIsOpenNotification(false)}
                            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                        >
                            Okay
                        </button>
                    </div>
                </DialogContent>
            </Dialog>
        );
    };

    const getAllNotifications = async () => {
        try {
            const response = await getAllAdminNotifications();
            setNotifications(response);
            dispatch(setNotification(response.length));
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getAllNotifications();

        const interval = setInterval(() => {
            getAllNotifications();
        }, 10000); // Refresh notifications every 60 seconds

        return () => clearInterval(interval);
    }, []);

    const getNotificationIconAndColor = (type) => {
        switch (type) {
            case 'account_approved':
                return { icon: CheckCircle, color: 'text-green-500 bg-green-100' };
            case 'account_rejected':
                return { icon: XCircle, color: 'text-red-500 bg-red-100' };
            case 'product_approved':
                return { icon: CheckCircle, color: 'text-green-500 bg-green-100' };
            case 'product_rejected':
                return { icon: XCircle, color: 'text-red-500 bg-red-100' };
            default:
                return { icon: CheckCircle, color: 'text-gray-500 bg-gray-100' };
        }
    };

    const openDrawer = () => {
        setDrawerOpen(true);
    };

    const closeDrawer = () => {
        setDrawerOpen(false);
    };

    const handleNotificationClick = (notification) => {
        setSelectedNotification(notification);
        setIsOpenNotification(true);
        closeDrawer();
    };

    return (
        <>
            <div onClick={openDrawer}>
                {notificationCount > 0 && (
                    <span className="absolute ml-3 top-4 border-2 border-orange-700 rounded-full bg-orange-700 p-2">
                        <p className="absolute bottom-[-2px] left-1 text-[14px] text-white">
                            {notificationCount}
                        </p>
                    </span>
                )}
                <Bell />
            </div>

            <Drawer
                title="Notifications"
                placement="right"
                closable={true}
                onClose={closeDrawer}
                open={drawerOpen}
                width={400}
            >
                {loading ? (
                    <p>Loading...</p>
                ) : notifications.length === 0 ? (
                    <p className="text-gray-500">No new notifications.</p>
                ) : (
                    notifications.map((notification, index) => {
                        const { icon: IconComponent, color } = getNotificationIconAndColor(notification.notification_type);
                        const isRead = notification.is_read === 1;

                        return (
                            <div
                                onClick={() => handleNotificationClick(notification)}
                                key={index}
                                className={`cursor-pointer border-b border-gray-200 py-4 flex justify-between items-start transition duration-200 ease-in-out rounded-lg mb-2
                                    ${isRead ? 'bg-white' : 'bg-blue-50'} hover:bg-gray-50`}
                            >
                                <div className="flex items-start">
                                    <span className={`p-2 rounded-full ${color}`}>
                                        <IconComponent size={20} />
                                    </span>
                                    <div className="ml-4">
                                        <p className={`font-medium ${isRead ? 'text-gray-600' : 'text-gray-800 font-bold'}`}>
                                            {notification.title}
                                        </p>
                                        <p className={`text-sm ${isRead ? 'text-gray-500' : 'text-gray-700'}`}>
                                            {notification.message}
                                        </p>
                                    </div>
                                </div>
                                <p className="text-gray-400 text-xs">
                                    {new Date(notification.created_at).toLocaleTimeString()}
                                </p>
                            </div>
                        );
                    })
                )}
            </Drawer>

            {selectedNotification && detailNotification(selectedNotification)}
        </>
    );
};

export default Notification;
