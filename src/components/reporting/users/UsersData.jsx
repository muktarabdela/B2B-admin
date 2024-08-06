import React, { useEffect, useState } from 'react';
import {
    Card,
    CardDescription,
    CardHeader,
    CardTitle,
    CardContent
} from "@/components/ui/card";
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsersReport } from '@/store/reportSlice';

const UsersData = ({ usersReport }) => {

    const { specific_time_report, general_report } = usersReport;

    const totalRegisteredUsers = specific_time_report.supplier_user_registered.number_of_register +
        specific_time_report.buyer_user_registered.number_of_register +
        specific_time_report.personal_user_registered.number_of_register;

    const totalSuppliers = specific_time_report.supplier_user_registered.number_of_register;
    const pendingSuppliers = general_report.supplier_status.find(status => status.status === 'pending')?.total_count || 0;
    const approvedSuppliers = general_report.supplier_status.find(status => status.status === 'approve')?.total_count;
    const rejectedSuppliers = general_report.supplier_status.find(status => status.status === 'rejected')?.total_count || 0;

    const totalBusinessAccounts = specific_time_report.buyer_user_registered.number_of_register;
    const pendingBusinessAccounts = general_report.buyer_status.find(status => status.status === 'pending')?.total_count || 0;
    const approvedBusinessAccounts = general_report.buyer_status.find(status => status.status === 'approve')?.total_count;
    const rejectedBusinessAccounts = general_report.buyer_status.find(status => status.status === 'rejected')?.total_count;

    const totalPersonalAccounts = specific_time_report.personal_user_registered.number_of_register;

    return (
        <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
            <Card className="sm:col-span-1">
                <CardHeader className="pb-3">
                    <CardDescription>Total Registered Users</CardDescription>
                    <CardTitle className="text-4xl">{totalRegisteredUsers}</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="text-xs text-muted-foreground">+25% from last week</div>
                </CardContent>
            </Card>

            <Card>
                <CardHeader className="pb-2">
                    <CardDescription className="font-semibold text-md">Total Suppliers</CardDescription>
                    <CardTitle className="text-4xl">{totalSuppliers}</CardTitle>
                    <div className='flex flex-col'>
                        <CardDescription className="font-semibold">Pending: <span className='ml-2'>{pendingSuppliers}</span></CardDescription>
                        <CardDescription className="font-semibold">Rejected: <span className='ml-2 text-red-500'>{rejectedSuppliers}</span></CardDescription>
                        <CardDescription className="font-semibold">Approved: <span className='ml-2 text-green-500'>{approvedSuppliers}</span></CardDescription>
                    </div>
                </CardHeader>
            </Card>

            <Card>
                <CardHeader className="pb-2">
                    <CardDescription className="font-semibold text-md">Total Business Accounts</CardDescription>
                    <CardTitle className="text-4xl">{totalBusinessAccounts}</CardTitle>
                    <div className='flex flex-col'>
                        <CardDescription className="font-semibold">Pending: <span className='ml-2'>{pendingBusinessAccounts}</span></CardDescription>
                        <CardDescription className="font-semibold">Rejected: <span className='ml-2 text-red-500'>{rejectedBusinessAccounts}</span>
                        </CardDescription>
                        <CardDescription className="font-semibold">Approved: <span className='ml-2 text-green-500'>{approvedBusinessAccounts}</span></CardDescription>
                    </div>
                </CardHeader>
            </Card>

            <Card>
                <CardHeader className="pb-2">
                    <CardDescription className="font-semibold text-md">Total Personal Accounts</CardDescription>
                    <CardTitle className="text-4xl">{totalPersonalAccounts}</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="text-xs text-muted-foreground">+25% from last week</div>
                </CardContent>
            </Card>
        </div>
    );
};

export default UsersData;
