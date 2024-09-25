import React, { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight, MoreHorizontal } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
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
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { fetchProducts } from '../../store/ProductSlice';
import { setDeleteModal, setSupplierUpdateStatus } from '../../store/uiSlice';
import UpdateProductStatus from '../products/models/UpdateProductStatus';
import { ScrollArea, ScrollBar } from '../ui/scroll-area';

const truncateString = (str, maxLength) => {
    if (str?.length <= maxLength) return str;
    return str?.slice(0, maxLength) + '...';
};

function Check() {
    const dispatch = useDispatch();
    return (
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
    );
}

const NewProducts = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const supplierUpdateStatus = useSelector((state) => state.ui.supplierUpdateStatus);
    const [selectedProducts, setSelectedProducts] = useState(null);
    const { loading, error, products } = useSelector((state) => state.product);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 4;
    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);

    const filterRecentPendingProducts = (products) => {
        const oneWeekAgo = new Date();
        oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);
        return products.filter(product =>
            product.status === 'pending' && new Date(product.created_at) >= oneWeekAgo
        );
    };
    const recentPendingProducts = filterRecentPendingProducts(products).slice(0, 4);
    const totalPages = Math.ceil(recentPendingProducts?.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentProducts = recentPendingProducts?.slice(startIndex, endIndex);
    const handleUpdateStatus = (product) => {
        setSelectedProducts(product);
        dispatch(setSupplierUpdateStatus(true));
    };

    const handleDetailProduct = (id) => {
        navigate(`/detail/product/${id}`);
    };

    const handleDetailSupplier = (id) => {
        navigate(`/detail/supplier/${id}`);
    };
    const handlePageChange = (newPage) => {
        setCurrentPage(newPage);
    };


    return (
        <Card className="w-full overflow-auto">
            <CardHeader>
                <CardTitle>new Products</CardTitle>
                <CardDescription>
                    Manage your products and view their sales performance.
                </CardDescription>
            </CardHeader>
            <CardContent>
                {supplierUpdateStatus && <UpdateProductStatus product={selectedProducts} />}
                {/* {deleteModal && <Check />} */}
                <ScrollArea className="max-w-5xl whitespace-nowrap rounded-md border">
                    <div className="overflow-x-auto">
                        <Table className="min-w-full">
                            <TableHeader className="overflow-x-auto">
                                <TableRow className="overflow-x-auto">
                                    <TableHead className="whitespace-nowrap text-center">Product Owner</TableHead>

                                    <TableHead className="whitespace-nowrap text-center  sm:table-cell">Brand Name</TableHead>
                                    <TableHead className="whitespace-nowrap text-center">Status</TableHead>
                                    <TableHead className="text-center hidden md:table-cell">Price</TableHead>
                                    <TableHead className="whitespace-nowrap text-center  md:table-cell">
                                        Stock on Hand
                                    </TableHead>
                                    <TableHead className="whitespace-nowrap text-center  md:table-cell">Created at</TableHead>
                                    <TableHead>
                                        <span className="sr-only">Actions</span>
                                    </TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {currentProducts.map((product, index) => (
                                    <TableRow key={product.product_id}>
                                        <TableCell className="font-medium text-center">
                                            <div onClick={() => handleDetailSupplier(product.owner)} className="flex items-center justify-center cursor-pointer">
                                                <img className="rounded-full w-10 h-10 mr-2" src="https://raw.githubusercontent.com/cruip/vuejs-admin-dashboard-template/main/src/images/user-36-05.jpg" alt="Owner" />
                                                <span className="font-medium">{product.owner === 0 ? 'admin' : 'supplier'}</span>
                                            </div>
                                        </TableCell>

                                        <TableCell className="text-center  sm:table-cell">{truncateString(product.brand_name, 20)}</TableCell>
                                        <TableCell className="text-center">
                                            <Badge className={`p-2 rounded-full ${product.status === 'pending' ? 'bg-yellow-50 text-yellow-700' : product.status === 'rejected' ? 'bg-red-50 text-red-700' : 'bg-green-50 text-green-700'}`} variant="outline">
                                                {product.status}
                                            </Badge>
                                        </TableCell>
                                        <TableCell className="text-center  md:table-cell">${product.price}</TableCell>
                                        <TableCell className="text-center  md:table-cell">{product.stock}</TableCell>
                                        <TableCell className="text-center  md:table-cell whitespace-nowrap">
                                            {new Date(product.created_at).toLocaleString()}
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
                                                    <DropdownMenuItem onClick={() => handleDetailProduct(product.product_hash)}>
                                                        <Button variant="outline">View detail</Button>
                                                    </DropdownMenuItem>
                                                    <DropdownMenuItem onClick={() => handleUpdateStatus(product)}>
                                                        <Button variant="outline">Update status</Button>
                                                    </DropdownMenuItem>
                                                    <DropdownMenuItem onClick={() => dispatch(setDeleteModal(true))}>
                                                        <Button variant="outline" className="bg-red-600 text-white">Delete</Button>
                                                    </DropdownMenuItem>
                                                </DropdownMenuContent>
                                            </DropdownMenu>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </div>
                    <ScrollBar orientation="horizontal" />
                </ScrollArea>

            </CardContent>
            <CardFooter className="flex items-center justify-between">
                <div className="text-sm text-muted-foreground ">
                    Showing <strong>{startIndex + 1}-{Math?.min(endIndex, recentPendingProducts?.length)}</strong> of <strong>{recentPendingProducts?.length}</strong> products
                </div>
                <div className="flex items-center space-x-2">
                    <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handlePageChange(currentPage - 1)}
                        disabled={currentPage === 1}
                    >
                        <ChevronLeft className="h-4 w-4" />
                        Previous
                    </Button>
                    <div className="text-sm font-medium whitespace-nowrap">
                        Page {currentPage} of {totalPages}
                    </div>
                    <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handlePageChange(currentPage + 1)}
                        disabled={currentPage === totalPages}
                    >
                        Next
                        <ChevronRight className="h-4 w-4" />
                    </Button>
                </div>
            </CardFooter>
        </Card>
    );
}

export default NewProducts;
