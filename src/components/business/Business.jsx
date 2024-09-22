import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setDeleteModal, setDetailModal, setSupplierUpdateStatus } from '../../store/uiSlice';
import SupplierDetail from '../dashboard/supplier/supplierDtail/SupplierDetail';
import SupplierUpdateStates from '../dashboard/supplier/SupplierUpdateStates';
import { fetchBusiness } from '../../store/BusinessSlice';


import { MoreHorizontal } from "lucide-react";
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
import BusinessUpdateStates from '../model/BusinessUpdateStatus';
import { ScrollArea, ScrollBar } from '../ui/scroll-area';
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
const Business = () => {
  const dispatch = useDispatch()
  const [businessType, setBusinessType] = useState('');
  const deleteModal = useSelector((state) => state.ui.deleteModal);
  const detailModal = useSelector((state) => state.ui.detailModal);
  const supplierUpdateStatus = useSelector((state) => state.ui.supplierUpdateStatus);

  const { Business, loading, error } = useSelector((state) => state.business);
  const [selectedBusiness, setSelectedBusiness] = useState(null);

  useEffect(() => {
    dispatch(fetchBusiness());
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  const handleUpdateStatus = (supplier) => {
    setSelectedBusiness(supplier);
    dispatch(setSupplierUpdateStatus(true));
  };

  // filter business
  const getFilteredBusiness = () => {
    switch (businessType) {
      case 'pending':
        return Business.filter((business) => business.status === 'pending');
      case 'rejected':
        return Business.filter((business) => business.status === 'rejected');
      case 'approve':
        return Business.filter((business) => business.status === 'approve');
      case 'all':
        return Business;
      default:
        return Business;
    }
  };
  const filterBusiness = getFilteredBusiness();

  return (
    <Card className="max-w-6xl mx-auto  h-full">
      <CardHeader>
        <CardTitle>Business</CardTitle>
        <CardDescription className="text-lg  p-3">
          {businessType === 'pending' && 'Pending suppliers'}
          {businessType === 'rejected' && 'Rejected suppliers'}
          {businessType === 'approve' && 'Approved suppliers'}
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
              <DropdownMenuItem className="cursor-pointer bg-gray-700  m-2 rounded-md text-white text-center hover:bg-gray-800" onClick={() => setBusinessType('pending')}>
                pending Business
              </DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer bg-gray-700  m-2 rounded-md text-white text-center hover:bg-gray-800" onClick={() => setBusinessType('rejected')}> Rejected Business</DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer bg-gray-700  m-2 rounded-md text-white text-center hover:bg-gray-800" onClick={() => setBusinessType('approve')}>Approved Business</DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer bg-gray-700  m-2 rounded-md text-white text-center hover:bg-gray-800" onClick={() => setBusinessType('all')}>All Business</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </CardHeader>
      <CardContent>
        {deleteModal && <Check />}
        {detailModal && <SupplierDetail supplier={selectedBusiness} />}
        {supplierUpdateStatus && <BusinessUpdateStates supplier={selectedBusiness} />}
        <ScrollArea className="w-96 lg:w-full whitespace-nowrap rounded-md border">

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
              {filterBusiness.map((supplier, index) => (
                <TableRow key={index}>
                  <TableCell className="font-medium flex items-center">
                    <div className="flex items-center justify-center cursor-pointer">
                      <img className="rounded-full w-10 h-10 mr-2" src="https://raw.githubusercontent.com/cruip/vuejs-admin-dashboard-template/main/src/images/user-36-05.jpg" alt="Owner" />
                      <span className="font-medium">
                        {supplier.first_name} {supplier.last_name}
                      </span>
                    </div>
                  </TableCell>
                  <TableCell>{supplier.email}</TableCell>
                  <TableCell>{supplier.phone_number}</TableCell>
                  <TableCell>
                    <Badge className={`p-2 rounded-full text-center ${supplier.status === 'pending' ? 'bg-yellow-50 text-yellow-700' : supplier.status === 'rejected' ? 'bg-red-50 text-red-700' : 'bg-green-50 text-green-700'}`} variant="outline">
                      {supplier.status}
                    </Badge>
                  </TableCell>

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
                          <Button onClick={() => handleDetailSupplier(supplier.id)} variant="outline">view detail </Button>
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
      <CardFooter>
        <div className="text-xs text-muted-foreground">
          Showing <strong>1-10</strong> of <strong>32</strong> suppliers
        </div>
      </CardFooter>
    </Card>
  )
}

export default Business