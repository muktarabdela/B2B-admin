import React, { useState } from 'react';
import { MoreHorizontal } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const SoldProducts = ({ productReport }) => {
    const [reportType, setReportType] = useState('bestSold');

    const getFilteredProducts = () => {
        const { specific_time_report } = productReport;
        switch (reportType) {
            case 'bestSold':
                return specific_time_report.best_sold_product ? [specific_time_report.best_sold_product] : [];
            case 'leastSold':
                return specific_time_report.least_sold_proudct ? [specific_time_report.least_sold_proudct] : [];
            case 'soldProducts':
                return specific_time_report.list_of_sold_product || [];
            default:
                return [];
        }
    };

    const filteredProducts = getFilteredProducts();
    const sales = 56; // Or any appropriate value

    return (
        <Card className="xl:col-span-2">
            <CardHeader>
                <CardTitle>Products</CardTitle>
                <CardDescription>
                    {reportType === 'bestSold' && 'Best Sold Products'}
                    {reportType === 'leastSold' && 'Least Sold Products'}
                    {reportType === 'soldProducts' && 'List of Sold Products'}
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
                            <DropdownMenuItem onClick={() => setReportType('soldProducts')}>List of Sold Products</DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </CardHeader>
            <CardContent>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="whitespace-nowrap">Brand Name</TableHead>
                            <TableHead className="whitespace-nowrap px-10">Total Quantity</TableHead>
                            <TableHead className="whitespace-nowrap">Actions</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {filteredProducts.map((product, index) => (
                            <TableRow key={index}>
                                <TableCell>{product.brand_name}</TableCell>
                                <TableCell className="text-center">{product.total_quantity}</TableCell>
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
                    Showing <strong>1-{filteredProducts.length}</strong> of <strong>{filteredProducts.length}</strong> products
                </div>
            </CardFooter>
        </Card>
    );
};

export default SoldProducts;
