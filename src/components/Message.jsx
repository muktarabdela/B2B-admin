import React, { useEffect, useState, useMemo } from 'react';
import { notification } from 'antd';
import { useSelector } from 'react-redux';
import { getUnreadAdminNotifications, markNotificationAsRead } from '@/api/Admin';

const Context = React.createContext({
    name: 'Default',
});

const Message = () => {
    const [api, contextHolder] = notification.useNotification();
    const [unreadNotifications, setUnreadNotifications] = useState([]);
    const [shownNotifications, setShownNotifications] = useState([]); // Track shown notifications
    const role = useSelector((state) => state.ui.role);
    // console.log("role from notfication ", role);
    const contextValue = useMemo(
        () => ({
            name: 'Ant Design',
        }),
        [],
    );

    // Function to mark notification as read
    const markAsRead = async (notificationId) => {
        try {
            await markNotificationAsRead(notificationId);
        } catch (error) {
            console.error('Failed to mark notification as read', error);
        }
    }

    const openNotification = (title, message, id) => {
        api.info({
            message: title,
            description: message,
            placement: 'topRight',
            // duration: null, // Keeps the notification open until the user clicks "x"
            onClose: () => markAsRead(id),
            onClick: () => markAsRead(id),
        });
    };

    // Fetch unread notifications from the server
    const fetchUnreadNotifications = async () => {
        try {
            const response = await getUnreadAdminNotifications();
            const newUnreadNotifications = response.filter(notification => notification.is_read === 0);
            // Filter out new notifications that haven't been shown yet
            const unseenNotifications = newUnreadNotifications.filter(notif => !shownNotifications.includes(notif.id));
            if (unseenNotifications.length > 0) {
                unseenNotifications.forEach(notif => {
                    openNotification(notif.title, notif.message, notif.id);
                });
                // Update state with the latest notifications
                setShownNotifications(prev => [...prev, ...unseenNotifications.map(notif => notif.id)]);
                setUnreadNotifications(newUnreadNotifications);
            }
        } catch (error) {
            console.error('Failed to fetch notifications', error);
        }
    };

    // Run every minute to check for new unread notifications
    useEffect(() => {
        fetchUnreadNotifications(); // Initial fetch

        const interval = setInterval(() => {
            fetchUnreadNotifications();
        }, 10000); // 10000ms = 10 seconds

        // Clean up interval on component unmount
        return () => clearInterval(interval);
    }, [shownNotifications]);

    return (
        <Context.Provider value={contextValue}>
            {contextHolder}
        </Context.Provider>
    );
};

export default Message;
