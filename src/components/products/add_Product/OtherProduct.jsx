import React, { useEffect, useState } from 'react';
import { setProductData } from '../../../store/ProductSlice';
import { useDispatch, useSelector } from 'react-redux';
import { message } from 'antd';
import { listSpecifications } from '@/api/adminProduct';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { PlusIcon, XIcon } from 'lucide-react';

const OtherProduct = () => {
    const [messageApi, contextHolder] = message.useMessage()
    const [data, setData] = useState([]);
    const [showMessage, setShowMessage] = useState(false);

    const dispatch = useDispatch();
    const productData = useSelector((state) => state.product.productData);
    const [otherData, setOtherData] = useState([]);
    const [currentData, setCurrentData] = useState({ name: '', value: '' });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setCurrentData({
            ...currentData,
            [name]: value,
        });
    };

    const openSpecification = () => {
        const key = 'updatable';
        messageApi.open({
            key,
            type: 'success',
            content: 'Added to specification!',
            duration: 1,
        });
    }
    const openAddData = () => {
        const key = 'updatable';
        messageApi.open({
            key,
            type: 'success',
            content: 'Added specification!',
            duration: 1,
        });
    }


    const handleAddData = (e) => {
        e.preventDefault();
        console.log('Current data:', currentData);

        if (currentData.name && currentData.value) {
            setOtherData([...otherData, currentData]);
            dispatch(setProductData({
                ...productData,
                specification: [...otherData, currentData],
            }));
            // Clear inputs
            setCurrentData({ name: '', value: '' });
        } else {
            alert('Please fill out all fields before adding.');
        }
        openAddData()
    };

    const handleDeleteData = (index) => {
        const updatedData = otherData.filter((_, i) => i !== index);
        setOtherData(updatedData);
        dispatch(setProductData({
            ...productData,
            specification: updatedData,
        }));
    };

    const handleClick = (specificationName) => {
        openSpecification()
        setCurrentData({ ...currentData, name: specificationName });
    };

    useEffect(() => {
        const fetchSupplierData = async () => {
            try {
                const response = await listSpecifications();
                setData(response.data.data);
                console.log(response.data.data);
            } catch (error) {
                console.error('Error fetching supplier data:', error);
            }
        };

        fetchSupplierData();
    }, []);

    return (
        <div className="max-w-4xl mx-auto ">
            {contextHolder}
            <h2 className="text-2xl font-semibold text-center mb-6">Add Product Specifications</h2>

            <div className="mb-6">
                <h3 className='text-xl font-m mb-4'>Available Specifications</h3>
                <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2'>
                    {data.map((spec, index) => (
                        <Button
                            key={index}
                            variant="outline"
                            className="w-full text-left justify-start overflow-hidden whitespace-nowrap text-ellipsis"
                            onClick={() => handleClick(spec.specification_name)}
                        >
                            <span className="mr-2">{spec.specification_name}</span>
                            <PlusIcon className="h-4 w-4 ml-auto flex-shrink-0" />
                        </Button>
                    ))}
                </div>
            </div>

            <div className='border rounded-lg overflow-hidden mb-6'>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Specification Name</TableHead>
                            <TableHead>Specification Value</TableHead>
                            <TableHead className="w-[100px]">Actions</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {otherData.map((data, index) => (
                            <TableRow key={index}>
                                <TableCell className="font-medium">{data.name}</TableCell>
                                <TableCell>{data.value}</TableCell>
                                <TableCell>
                                    <Button
                                        variant="ghost"
                                        size="icon"
                                        onClick={() => handleDeleteData(index)}
                                        aria-label={`Delete ${data.name} specification`}
                                    >
                                        <XIcon className="h-4 w-4" />
                                    </Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>

            <form className="space-y-4">
                <div className="flex flex-col sm:flex-row gap-4">
                    <Input
                        onChange={handleInputChange}
                        value={currentData.name}
                        id="name"
                        name="name"
                        placeholder="Specification Name"
                        aria-label="Specification Name"
                    />
                    <Input
                        onChange={handleInputChange}
                        value={currentData.value}
                        name="value"
                        id="value"
                        placeholder="Specification Value"
                        aria-label="Specification Value"
                    />
                </div>
                <Button onClick={handleAddData} className="w-full">
                    Add Specification
                </Button>
            </form>
        </div>
    );
};

export default OtherProduct;
