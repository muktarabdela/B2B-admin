import React, { useEffect, useState } from 'react';
import { MoreHorizontal } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { fetchProducts } from '../../../store/ProductSlice';
import { setDeleteModal } from '../../../store/uiSlice';

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
                    className="bg-red-500 px-4 py-2 rounded-md text-md text-white"
                >
                    Cancel
                </button>
                <button className="bg-indigo-500 px-7 py-2 ml-2 rounded-md text-md text-white font-semibold">
                    Ok
                </button>
            </div>
        </div>
    );
}

const SoldProducts = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { loading, error, products } = useSelector((state) => state.product);
    const [reportType, setReportType] = useState('bestSold');

    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);

    const sales = 56

    const getFilteredProducts = () => {
        switch (reportType) {
            case 'bestSold':
                return products.slice().sort((a, b) => b.price - a.price).slice(0, 4);
            case 'leastSold':
                return products.slice().sort((a, b) => a.sales - b.sales).slice(0, 4);
            case 'priceRange':
                return products.slice().sort((a, b) => b.price - a.price).slice(0, 4);
            case 'availability':
                return products.slice().sort((a, b) => b.stock - a.stock).slice(0, 4);
            default:
                return products.slice(0, 4);
        }
    };

    const filteredProducts = getFilteredProducts();
    const amount = filteredProducts.price * sales;

    return (
        <Card className="xl:col-span-2">
            <CardHeader >
                <CardTitle>Products</CardTitle>
                <CardDescription>
                    {reportType === 'bestSold' && 'Best Sold Products'}
                    {reportType === 'leastSold' && 'Least Sold Products'}
                    {reportType === 'priceRange' && 'Products by Price Range'}
                    {reportType === 'availability' && 'Product Availability'}
                </CardDescription>
                <div className='flex items-end justify-end'>
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button aria-haspopup="true" size="icon" variant="ghost">
                                <MoreHorizontal className="h-4 w-4" />
                                <span className="sr-only">Toggle menu</span>
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                            <DropdownMenuLabel>Actions</DropdownMenuLabel>
                            <DropdownMenuItem onClick={() => setReportType('bestSold')}>Best Sold</DropdownMenuItem>
                            <DropdownMenuItem onClick={() => setReportType('leastSold')}>Least Sold</DropdownMenuItem>
                            <DropdownMenuItem onClick={() => setReportType('priceRange')}>By Price Range</DropdownMenuItem>
                            <DropdownMenuItem onClick={() => setReportType('availability')}>Availability</DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </CardHeader>

            <CardContent>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="whitespace-nowrap">Product Owner</TableHead>
                            <TableHead className="whitespace-nowrap px-10">Brand Name</TableHead>
                            <TableHead className="hidden md:table-cell">Price</TableHead>
                            <TableHead className="hidden md:table-cell px-10">Amount</TableHead>
                            <TableHead className="hidden md:table-cell whitespace-nowrap">Sold</TableHead>
                            <TableHead className="hidden md:table-cell whitespace-nowrap pl-10">Sold At</TableHead>
                            <TableHead>
                                <span className="sr-only">Actions</span>
                            </TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {filteredProducts.map((product) => (
                            <TableRow key={product.id}>
                                <TableCell className="font-medium">
                                    <div onClick={() => handleDetailSupplier(product.owner)} className="flex items-center justify-center cursor-pointer">
                                        <img className="rounded-full w-10 h-10 mr-2" src="https://raw.githubusercontent.com/cruip/vuejs-admin-dashboard-template/main/src/images/user-36-05.jpg" alt="Owner" />
                                        <span className="font-medium">{product.owner === 0 ? 'admin' : 'supplier'}</span>
                                    </div>
                                </TableCell>
                                <TableCell className="text-center">{truncateString(product.brand_name, 20)}</TableCell>
                                <TableCell className="whitespace-nowrap">
                                    {product.price} <span className='font-semibold'>ETB</span>
                                </TableCell>
                                <TableCell className="hidden md:table-cell text-center">
                                    {product.price * sales} <span className='font-semibold'>ETB</span>
                                </TableCell>
                                <TableCell className="hidden md:table-cell text-center">{sales}</TableCell>
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
    );
};

export default SoldProducts;
