import React from "react";
import { Badge } from "@/components/ui/badge";
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { useSelector } from "react-redux";

const LatestCustomers = () => {
    const { usersReport } = useSelector((state) => state.report);

    const getUserList = () => {
        const suppliers = usersReport?.specific_time_report?.supplier_user_registered?.list || [];
        const buyers = usersReport?.specific_time_report?.buyer_user_registered?.list || [];
        const personals = usersReport?.specific_time_report?.personal_user_registered?.list || [];

        // Combine all users and add user type
        const allUsers = [
            ...suppliers.map(user => ({ ...user, userType: "Supplier" })),
            ...buyers.map(user => ({ ...user, userType: "Business" })),
            ...personals.map(user => ({ ...user, userType: "Personal" }))
        ];

        // Sort users by created_at date
        return allUsers.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
    };

    const userList = getUserList();

    return (
        <Card className="w-[21em]">
            <CardHeader>
                <CardTitle>Latest Customer</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-8 px-4">
                {userList.map((user, index) => (
                    <div key={index} className="flex items-center gap-3">
                        <div className="grid gap-1">
                            <p className="text-sm font-medium leading-none">{user.email.split('@')[0]}</p>
                            <p className="text-sm text-muted-foreground">{user.email}</p>
                        </div>
                        <div className="ml-auto grid gap-1 text-right">
                            <p className="font-medium">{user.userType}</p>

                            <Badge className={`p-2 rounded-full ${user.status === 'pending' ? 'bg-yellow-50 text-yellow-700' : user.status === 'rejected' ? 'bg-red-50 text-red-700' : 'bg-green-50 text-green-700'}`} variant="outline">
                                {user.status.charAt(0).toUpperCase() + user.status.slice(1)}
                            </Badge>
                        </div>
                    </div>
                ))}
            </CardContent>
        </Card>
    );
};

export default LatestCustomers;
