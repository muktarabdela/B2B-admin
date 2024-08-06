import React, { useEffect } from 'react';
import UsersData from './UsersData';
import UserDataTable from './UserDataTable';
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsersReport } from '@/store/reportSlice';
import LatestCustomers from '@/components/dashboard/LatestCustomers';

const UsersReport = () => {
    const dispatch = useDispatch();
    const { usersReport, loading, error } = useSelector((state) => state.report);
    console.log(usersReport);

    useEffect(() => {
        dispatch(fetchUsersReport());
    }, [dispatch]);

    if (loading) {
        return <div>Loading...</div>;
    }
    if (error) {
        return <div>Error: {error}</div>;
    }
    if (!usersReport) {
        return <div className='text-center h-screen'>No data available</div>;
    }
    return (
        <div className="flex min-h-screen w-full flex-col max-w-6xl mx-auto mr-10 mt-24">
            <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
                <UsersData usersReport={usersReport} />
                <div className="grid gap-4 md:gap-8 lg:grid-cols-2 xl:grid-cols-3">
                    <UserDataTable usersReport={usersReport} />
                    <div>
                        <LatestCustomers />
                    </div>
                </div>
            </main>
        </div>
    );
}

export default UsersReport;
