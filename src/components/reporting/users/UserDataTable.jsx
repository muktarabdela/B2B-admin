import React from 'react';
import { useDispatch } from 'react-redux';
import { setDeleteModal, setDetailModal } from '../../../store/uiSlice';
import { MoreHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";

const UserDataTable = ({ usersReport }) => {
    const dispatch = useDispatch();

    if (!usersReport) {
        return <div>Loading...</div>;
    }

    const { specific_time_report } = usersReport;
    const { supplier_user_registered, buyer_user_registered, personal_user_registered } = specific_time_report;

    const allUsers = [
        ...supplier_user_registered.list.map(user => ({ ...user, type: 'supplier' })),
        ...buyer_user_registered.list.map(user => ({ ...user, type: 'business' })),
        ...personal_user_registered.list.map(user => ({ ...user, type: 'personal' })),
    ].sort((a, b) => new Date(b.created_at) - new Date(a.created_at));

    return (
        <Card className="xl:col-span-2">
            <CardHeader>
                <CardTitle>Users</CardTitle>
            </CardHeader>
            <CardContent>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="whitespace-nowrap">Email</TableHead>
                            <TableHead className="whitespace-nowrap">Type</TableHead>
                            <TableHead className="whitespace-nowrap">Status</TableHead>
                            <TableHead className="hidden md:table-cell whitespace-nowrap">Created at</TableHead>
                            <TableHead>
                                <span className="sr-only">Actions</span>
                            </TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {allUsers.map(user => (
                            <TableRow key={user.email}>
                                <TableCell className="font-medium flex items-center">
                                    <div className="flex items-center justify-center cursor-pointer">
                                        <img className="rounded-full w-10 h-10 mr-2" src="https://raw.githubusercontent.com/cruip/vuejs-admin-dashboard-template/main/src/images/user-36-05.jpg" alt="Owner" />
                                        <span className="font-medium">{user.email}</span>
                                    </div>
                                </TableCell>
                                <TableCell>{user.type}</TableCell>
                                <TableCell>{user.status}</TableCell>
                                <TableCell className="hidden md:table-cell whitespace-nowrap">
                                    {new Date(user.created_at).toLocaleString()}
                                </TableCell>
                                <TableCell>
                                    <DropdownMenu>
                                        <DropdownMenuTrigger asChild>
                                            <Button aria-haspopup="true" size="icon" variant="ghost">
                                                <MoreHorizontal className="h-4 w-4" />
                                                <span className="sr-only">Toggle menu</span>
                                            </Button>
                                        </DropdownMenuTrigger>
                                        <DropdownMenuContent align="end">
                                            <DropdownMenuLabel>Actions</DropdownMenuLabel>
                                            <DropdownMenuItem onClick={() => dispatch(setDetailModal(user))}>
                                                <Button variant="outline">View Detail</Button>
                                            </DropdownMenuItem>
                                            <DropdownMenuItem onClick={() => dispatch(setDeleteModal(user))}>
                                                <Button variant="outline" className="bg-red-600 text-white">Delete</Button>
                                            </DropdownMenuItem>
                                        </DropdownMenuContent>
                                    </DropdownMenu>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </CardContent>
            <CardFooter>
                <div className="text-xs text-muted-foreground">
                    Showing <strong>{allUsers.length}</strong> users
                </div>
            </CardFooter>
        </Card>
    );
};

export default UserDataTable;
