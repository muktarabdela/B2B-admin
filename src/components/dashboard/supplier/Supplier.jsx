import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSuppliers } from '../../../store/supplierSlice';
import { setDeleteModal, setDetailModal, setSupplierUpdateStatus } from '../../../store/uiSlice';
import { useNavigate } from 'react-router-dom';


import { ChevronLeft, ChevronRight, MoreHorizontal } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  CardDescription
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
import SupplierUpdateStates from '@/components/model/SupplierUpdateStatus';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import { Empty } from 'antd';
function Check() {
  const dispatch = useDispatch();
  return (
    <div className="bg-slate-800 bg-opacity-50 flex justify-center items-center absolute top-0 right-0 bottom-0 left-0">
      <div className="bg-white px-16 py-14 rounded-md text-center">
        <h1 className="text-xl mb-4 font-bold text-slate-500">Do you Want Delete</h1>
        <button onClick={() => dispatch(setDeleteModal(false))} className="bg-red-500 px-4 py-2 rounded-md text-md text-white">
          Cancel
        </button>
        <button className="bg-indigo-500 px-7 py-2 ml-2 rounded-md text-md text-white font-semibold">
          Ok
        </button>
      </div>
    </div>
  );
}

const Supplier = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const [supplierType, setSupplierType] = useState("")
  const { suppliers, loading, error } = useSelector((state) => state.supplier);
  const deleteModal = useSelector((state) => state.ui.deleteModal);
  const supplierUpdateStatus = useSelector((state) => state.ui.supplierUpdateStatus);

  const [selectedSupplier, setSelectedSupplier] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;
  useEffect(() => {
    dispatch(fetchSuppliers());
  }, []);

  if (loading) return <div>Loading...</div>;

  const handleUpdateStatus = (supplier) => {
    console.log(supplier);
    setSelectedSupplier(supplier);
    dispatch(setSupplierUpdateStatus(true));
  };
  const handleDetailSupplier = (id) => {
    navigate(`/detail/supplier/${id}`);
  };
  if (error) return <div className="text-center h-screen flex item-center justify-center"><Empty /></div>;

  // filter supplier
  const getFilteredSuppliers = () => {
    switch (supplierType) {
      case 'pending':
        return suppliers.filter((supplier) => supplier.status === 'pending');
      case 'rejected':
        return suppliers.filter((supplier) => supplier.status === 'rejected');
      case 'approve':
        return suppliers.filter((supplier) => supplier.status === 'approve');
      case 'all':
        return suppliers;
      default:
        return suppliers;
    }
  };
  const filterSuppliers = getFilteredSuppliers();
  const totalPages = Math.ceil(filterSuppliers?.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentSuppliers = filterSuppliers?.slice(startIndex, endIndex);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <Card className="max-w-7xl">
      <CardHeader>
        <CardTitle>Suppliers</CardTitle>
        <CardDescription className="text-lg  p-3">
          {supplierType === 'pending' && 'Pending suppliers'}
          {supplierType === 'rejected' && 'Rejected suppliers'}
          {supplierType === 'approve' && 'Approved suppliers'}
        </CardDescription>
        <div className='flex items-end justify-end'>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button aria-haspopup="true" size="icon" variant="ghost" className="flex rounded border w-20 text-center justify-center items-center">
                Filter
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Actions</DropdownMenuLabel>
              <DropdownMenuItem className="cursor-pointer bg-gray-700  m-2 rounded-md text-white text-center hover:bg-gray-800" onClick={() => setSupplierType('pending')}>
                pending Suppliers
              </DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer bg-gray-700  m-2 rounded-md text-white text-center hover:bg-gray-800" onClick={() => setSupplierType('rejected')}> Rejected Suppliers</DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer bg-gray-700  m-2 rounded-md text-white text-center hover:bg-gray-800" onClick={() => setSupplierType('approve')}>Approved Suppliers</DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer bg-gray-700  m-2 rounded-md text-white text-center hover:bg-gray-800" onClick={() => setSupplierType('all')}>All Suppliers</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </CardHeader>
      <CardContent>
        {deleteModal && <Check />}
        {supplierUpdateStatus && <SupplierUpdateStates supplier={selectedSupplier} />}
        <ScrollArea className="w-96 lg:w-full whitespace-nowrap rounded-md border">


          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="whitespace-nowrap text-center">Name</TableHead>
                <TableHead className="w-[100px] sm:table-cell text-center">
                  <span>Email</span>
                </TableHead>
                <TableHead className="whitespace-nowrap text-center">Phone Number</TableHead>
                <TableHead className="whitespace-nowrap text-center">Date Of Birth</TableHead>
                <TableHead className="md:table-cell whitespace-nowrap text-center" >Created at</TableHead>
                <TableHead>
                  <span className="sr-only">Actions</span>
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {currentSuppliers.map((supplier, index) => (
                <TableRow key={index}>
                  <TableCell className="font-medium flex items-center">
                    <div className="flex items-center justify-center cursor-pointer text-center">
                      <img className="rounded-full w-10 h-10 mr-2" src="https://raw.githubusercontent.com/cruip/vuejs-admin-dashboard-template/main/src/images/user-36-05.jpg" alt="Owner" />
                      <span className="font-medium">
                        {supplier.first_name} {supplier.last_name}
                      </span>
                    </div>
                  </TableCell>
                  <TableCell className="text-center sm:table-cell">{supplier.email}</TableCell>
                  <TableCell className="text-center">{supplier.phone_number}</TableCell>
                  <TableCell className="text-center"> <Badge className={`p-2 rounded-full ${supplier.status === 'pending' ? 'bg-yellow-50 text-yellow-700' : supplier.status === 'rejected' ? 'bg-red-50 text-red-700' : 'bg-green-50 text-green-700'}`} variant="outline">
                    {supplier.status}
                  </Badge></TableCell>
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
                          <Button onClick={() => handleDetailSupplier(supplier.user_hash)} variant="outline">view detail </Button>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Button onClick={() => handleUpdateStatus(supplier)} variant="outline">update status  </Button>
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => dispatch(setDeleteModal(true))}>
                          <Button variant="outline" className="bg-red-600 text-white">delete</Button>
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}

            </TableBody>
          </Table>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>

      </CardContent>
      <CardFooter className="flex items-center justify-between">
        <div className="text-sm text-muted-foreground ">
          Showing <strong>{startIndex + 1}-{Math?.min(endIndex, filterSuppliers?.length)}</strong> of <strong>{filterSuppliers?.length}</strong> products
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

export default Supplier;
