import React, { useEffect } from 'react'
import { MoreHorizontal } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import product1 from "../../assets/product_02.png";


import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { fetchProducts } from '../../store/ProductSlice';
import { setDeleteModal } from '../../store/uiSlice';

const truncateString = (str, maxLength) => {
    if (str?.length <= maxLength) return str;
    return str?.slice(0, maxLength) + '...';
};

function Check() {
    const dispatch = useDispatch()
    return (
        <>
            {/* component */}
            <div className="bg-slate-800 bg-opacity-50 flex justify-center items-center absolute top-0 right-0 bottom-0 left-0">
                <div className="bg-white px-16 py-14 rounded-md text-center">
                    <h1 className="text-xl mb-4 font-bold text-slate-500">
                        Do you Want Delete
                    </h1>
                    <button
                        onClick={() => dispatch(setDeleteModal(false))}
                        className="bg-red-500 px-4 py-2 rounded-md text-md text-white">
                        Cancel
                    </button>
                    <button className="bg-indigo-500 px-7 py-2 ml-2 rounded-md text-md text-white font-semibold">
                        Ok
                    </button>
                </div>
            </div>
        </>

    )
}
const NewProducts = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { loading, error, products } = useSelector((state) => state.product)

    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);
    // list only 4 products 
    const productsList = products.slice(0, 4);
    return (
        <Card>
            <CardHeader>
                <CardTitle>Products</CardTitle>
                <CardDescription>
                    Manage your products and view their sales performance.
                </CardDescription>
            </CardHeader>
            <CardContent>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="whitespace-nowrap">Product Owner</TableHead>
                            <TableHead className=" w-[100px] sm:table-cell">
                                <span className="">Image</span>
                            </TableHead>
                            <TableHead className="whitespace-nowrap">Brand Name</TableHead>
                            <TableHead className="whitespace-nowrap">Status</TableHead>
                            <TableHead className="hidden md:table-cell">Price</TableHead>
                            <TableHead className="hidden md:table-cell whitespace-nowrap">
                                Stock on Hand
                            </TableHead>
                            <TableHead className="hidden md:table-cell whitespace-nowrap">Created at</TableHead>
                            <TableHead>
                                <span className="sr-only">Actions</span>
                            </TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody className="">
                        {productsList.map((product) => (
                            <TableRow>
                                <TableCell className="font-medium">
                                    <div onClick={() => handleDetailSupplier(product.owner)} className="flex items-center justify-center cursor-pointer">
                                        <img className="rounded-full w-10 h-10 mr-2" src="https://raw.githubusercontent.com/cruip/vuejs-admin-dashboard-template/main/src/images/user-36-05.jpg" alt="Owner" />
                                        <span className="font-medium">{product.owner === 0 ? 'admin' : 'supplier'}</span>
                                    </div>
                                </TableCell>
                                <TableCell className="hidden sm:table-cell">
                                    <img
                                        alt="Product image"
                                        className="aspect-square rounded-md object-cover"
                                        height="64"
                                        src={product1}
                                        width="64"
                                    />
                                </TableCell>
                                <TableCell>{truncateString(product.brand_name, 20)}</TableCell>
                                <TableCell>
                                    <Badge className={`p-2 rounded-full ${product.status === 'pending' ? 'bg-yellow-50 text-yellow-700' : product.status === 'rejected' ? 'bg-red-50 text-red-700' : 'bg-green-50 text-green-700'}`} variant="outline">
                                        {product.status}
                                    </Badge>
                                </TableCell>
                                <TableCell className="hidden md:table-cell">${product.price}</TableCell>
                                <TableCell className="hidden md:table-cell text-center">{product.stock}</TableCell>
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
                                            <DropdownMenuItem>Edit</DropdownMenuItem>
                                            <DropdownMenuItem>Delete</DropdownMenuItem>
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
                    Showing <strong>1-10</strong> of <strong>32</strong> products
                </div>
            </CardFooter>
        </Card>
    )
}

export default NewProducts




