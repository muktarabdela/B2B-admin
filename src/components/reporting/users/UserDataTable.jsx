import { setDeleteModal, setDetailModal } from '../../../store/uiSlice'
// import { useDispatch, useSelector } from 'react-redux';
import SupplierDetail from '../../dashboard/supplier/supplierDtail/SupplierDetail';
import React, { useState } from 'react';
import { MoreHorizontal } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
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
const UserDataTable = () => {
    return (
        <Card className="xl:col-span-2">
            <CardHeader>
                <CardTitle>Users</CardTitle>
            </CardHeader>
            <CardContent>
                {/* {deleteModal && <Check />}
                {detailModal && <SupplierDetail />} */}
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="whitespace-nowrap">Name</TableHead>
                            <TableHead className="w-[100px] sm:table-cell">
                                <span>Email</span>
                            </TableHead>
                            <TableHead className="whitespace-nowrap">Phone Number</TableHead>
                            <TableHead className="whitespace-nowrap">Date Of Birth</TableHead>
                            <TableHead className="hidden md:table-cell whitespace-nowrap">Created at</TableHead>
                            <TableHead>
                                <span className="sr-only">Actions</span>
                            </TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        <TableRow>
                            <TableCell className="font-medium flex items-center">
                                <div className="flex items-center justify-center cursor-pointer">
                                    <img className="rounded-full w-10 h-10 mr-2" src="https://raw.githubusercontent.com/cruip/vuejs-admin-dashboard-template/main/src/images/user-36-05.jpg" alt="Owner" />
                                    <span className="font-medium">Alex Shatov</span>
                                </div>
                            </TableCell>
                            <TableCell>alexshatov@gmail.com</TableCell>
                            <TableCell>0932664696</TableCell>
                            <TableCell className="hidden md:table-cell">09/12/2000</TableCell>

                            <TableCell className="hidden md:table-cell whitespace-nowrap">
                                2023-07-12 10:42 AM
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
                                        <DropdownMenuItem>
                                            <Button variant="outline">view detail</Button>
                                        </DropdownMenuItem>
                                        <DropdownMenuItem onClick={() => dispatch(setDeleteModal(true))}>
                                            <Button variant="outline" className="bg-red-600 text-white">delete</Button>
                                        </DropdownMenuItem>
                                    </DropdownMenuContent>
                                </DropdownMenu>
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </CardContent>
            <CardFooter>
                <div className="text-xs text-muted-foreground">
                    Showing <strong>1-10</strong> of <strong>32</strong> products
                </div>
            </CardFooter>
        </Card>
    )
}

export default UserDataTable