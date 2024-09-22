import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { MoreHorizontal } from "lucide-react";

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
import product1 from "../../assets/product_02.png";

import { fetchProducts } from '../../store/ProductSlice';
import { setDeleteModal, setSupplierUpdateStatus, setUpdateProductModal } from '../../store/uiSlice';
import UpdateProductStatus from './models/UpdateProductStatus';
import { ScrollArea, ScrollBar } from '../ui/scroll-area';
import { Empty } from 'antd';

const truncateString = (str, maxLength) => {
  if (str?.length <= maxLength) return str;
  return str?.slice(0, maxLength) + '...';
};

const Check = () => {
  const dispatch = useDispatch();
  return (
    <div className="bg-slate-800 bg-opacity-50 flex justify-center items-center absolute top-0 right-0 bottom-0 left-0">
      <div className="bg-white px-16 py-14 rounded-md text-center">
        <h1 className="text-xl mb-4 font-bold text-slate-500">
          Do you want to delete?
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
};

const AllProducts = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [selectedProducts, setSelectedProducts] = useState(null);
  const [firstImage, setFirstImage] = useState([]);

  const supplierUpdateStatus = useSelector((state) => state.ui.supplierUpdateStatus);
  const deleteModal = useSelector((state) => state.ui.deleteModal);
  const { loading, error, products } = useSelector((state) => state.product);
  const [productType, setProductType] = useState('bestSold');
  console.log(products)
  const getFilteredProducts = () => {
    switch (productType) {
      case 'pending':
        return products.filter((product) => product.status === 'pending');
      case 'rejected':
        return products.filter((product) => product.status === 'rejected');
      case 'approve':
        return products.filter((product) => product.status === 'approve');
      case 'all':
        return products;
      default:
        return products;
    }
  };
  const filteredProducts = getFilteredProducts();


  // Handle setting the first image with a delay
  useEffect(() => {
    const timer = setTimeout(() => {
      if (filteredProducts?.length) {
        const images = filteredProducts.map((product) => {
          return product?.product_images?.[0]?.image || "default-image-url";
        });
        setFirstImage(images);
      }
    }, 500);

    return () => clearTimeout(timer);
  }, [filteredProducts]);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);
  // If loading or error, show appropriate content
  if (loading) return <div>Loading...</div>;
  if (error) return <div><Empty />;</div>;

  const handleUpdateStatus = (product) => {
    setSelectedProducts(product);
    dispatch(setSupplierUpdateStatus(true));
  };

  const handleDetailProduct = (id) => {
    navigate(`/detail/products/${id}`);
  };

  const handleDetailSupplier = (id) => {
    navigate(`/detail/supplier/${id}`);
  };

  return (
    <Card className="max-w-7xl">
      <CardHeader>
        <CardTitle>Products</CardTitle>
        <CardDescription className="text-lg  p-3">
          {productType === 'pending' && 'Pending Products'}
          {productType === 'rejected' && 'Rejected Products'}
          {productType === 'approve' && 'Approved Products'}
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
              <DropdownMenuItem className="cursor-pointer" onClick={() => setProductType('pending')}>pending Products</DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer" onClick={() => setProductType('rejected')}> Rejected Products</DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer" onClick={() => setProductType('approve')}>Approved Products</DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer" onClick={() => setProductType('all')}>All Products</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </CardHeader>
      <CardContent>
        {supplierUpdateStatus && <UpdateProductStatus product={selectedProducts} />}
        {deleteModal && <Check />}
        <ScrollArea className="w-96 lg:w-full whitespace-nowrap rounded-md border">
          <div className="overflow-x-auto">
            <Table className="min-w-full">
              <TableHeader>
                <TableRow>
                  <TableHead className="whitespace-nowrap">Product Owner</TableHead>
                  <TableHead className="w-[100px] sm:table-cell">
                    <span className="text-center">Image</span>
                  </TableHead>
                  <TableHead className="whitespace-nowrap text-center">Main Category</TableHead>
                  <TableHead className="whitespace-nowrap text-center">Brand Name</TableHead>
                  <TableHead className="whitespace-nowrap text-center">Status</TableHead>
                  <TableHead className="md:table-cell whitespace-nowrap text-center">Price</TableHead>
                  <TableHead className="md:table-cell whitespace-nowrap text-center">Selling Price</TableHead>
                  <TableHead className="md:table-cell whitespace-nowrap text-center">Add Percentage</TableHead>
                  <TableHead className="md:table-cell whitespace-nowrap text-center">Stock on Hand</TableHead>
                  <TableHead className="md:table-cell whitespace-nowrap text-center">Created at</TableHead>
                  <TableHead>
                    <span className="sr-only">Actions</span>
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredProducts.map((product, index) => (
                  <TableRow key={index}>
                    <TableCell className="font-medium">
                      <div onClick={() => handleDetailSupplier(product.owner)} className="flex items-center justify-center cursor-pointer">
                        <img className="rounded-full w-10 h-10 mr-2" src="https://raw.githubusercontent.com/cruip/vuejs-admin-dashboard-template/main/src/images/user-36-05.jpg" alt="Owner" />
                        <span className="font-medium">{product.owner === 0 ? 'admin' : 'supplier'}</span>
                      </div>
                    </TableCell>
                    <TableCell className="sm:table-cell">
                      {/* if first image is array */}
                      <img
                        alt="Product image"
                        className="aspect-square rounded-md object-cover"
                        height="64"
                        src={firstImage.length > index ? firstImage[index] : "https://raw.githubusercontent.com/cruip/vuejs-admin-dashboard-template/main/src/images/product-default-bg.png"}
                        width="64"
                      />
                    </TableCell>
                    <TableCell className="whitespace-nowrap text-center">{product.category[0]}</TableCell>
                    <TableCell className="whitespace-nowrap text-center">{truncateString(product.brand_name, 20)}</TableCell>
                    <TableCell>
                      <Badge className={`p-2 rounded-full ${product.status === 'pending' ? 'bg-yellow-50 text-yellow-700' : product.status === 'rejected' ? 'bg-red-50 text-red-700' : 'bg-green-50 text-green-700'}`} variant="outline">
                        {product.status}
                      </Badge>
                    </TableCell>
                    <TableCell className="md:table-cell text-center whitespace-nowrap">{product.price} ETB</TableCell>
                    <TableCell className="md:table-cell text-center">{product.selling_price} ETB</TableCell>
                    <TableCell className="md:table-cell text-center">{product.percentage}%</TableCell>
                    <TableCell className="md:table-cell text-center">{product.stock}</TableCell>
                    <TableCell className="md:table-cell whitespace-nowrap text-center">
                      2023-07-12 10:10:00
                    </TableCell>
                    <TableCell>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button aria-haspopup="true" size="icon" variant="ghost">
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuLabel>Actions</DropdownMenuLabel>
                          <DropdownMenuItem onClick={() => handleDetailProduct(product._id)}>Preview</DropdownMenuItem>
                          <DropdownMenuItem onClick={() => handleUpdateStatus(product)}>Update</DropdownMenuItem>
                          <DropdownMenuItem onClick={() => dispatch(setDeleteModal(true))}>Delete</DropdownMenuItem>
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
      <CardFooter className="flex justify-between">
        <p>All Products</p>
        <Button>View more</Button>
      </CardFooter>
    </Card>
  );
};

export default AllProducts;
