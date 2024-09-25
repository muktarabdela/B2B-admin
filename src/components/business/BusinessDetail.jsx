import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { CalendarIcon, GlobeIcon, PhoneIcon, MailIcon } from "lucide-react"
import { businessDetails } from '@/api/AdminBusiness'

const BusinessDetail = () => {
    const [supplierData, setSupplierData] = useState(null);
    const { businessId } = useParams();

    useEffect(() => {
        const fetchSupplier = async () => {
            try {
                const response = await businessDetails({ contact_id: businessId });
                setSupplierData(response.data.data);
            } catch (error) {
                console.error("Error fetching supplier data:", error);
            }
        };
        fetchSupplier();
    }, [businessId]);

    const formatDate = (dateString) => {
        return new Date(dateString).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    }

    return (
        <div className="container mx-auto space-y-8 p-4 md:p-8">
            {/* Supplier Info */}
            <Card className="shadow-md">
                <CardHeader className="bg-blue-600 text-white rounded-t-md">
                    <CardTitle>Supplier Information</CardTitle>
                </CardHeader>
                <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <h3 className="font-semibold">Name</h3>
                        <p>{`${supplierData?.first_name} ${supplierData?.last_name}`}</p>
                    </div>
                    <div>
                        <h3 className="font-semibold">Email</h3>
                        <p className="flex items-center gap-2">
                            <MailIcon className="h-4 w-4 text-blue-600" />
                            {supplierData?.email}
                        </p>
                    </div>
                    <div>
                        <h3 className="font-semibold">Phone</h3>
                        <p className="flex items-center gap-2">
                            <PhoneIcon className="h-4 w-4 text-blue-600" />
                            {supplierData?.phone_number}
                        </p>
                    </div>
                    <div>
                        <h3 className="font-semibold">Status</h3>
                        <Badge variant={supplierData?.status === 'pending' ? 'warning' : 'success'}>
                            {supplierData?.status}
                        </Badge>
                    </div>
                    <div>
                        <h3 className="font-semibold">Company</h3>
                        <p>{supplierData?.company_name}</p>
                    </div>
                    <div>
                        <h3 className="font-semibold">Title/Position</h3>
                        <p>{supplierData?.title_or_position}</p>
                    </div>
                    <div>
                        <h3 className="font-semibold">Website</h3>
                        <a href={supplierData?.website_url} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline flex items-center gap-2">
                            <GlobeIcon className="h-4 w-4" />
                            {supplierData?.website_url}
                        </a>
                    </div>
                    <div>
                        <h3 className="font-semibold">Created At</h3>
                        <p className="flex items-center gap-2">
                            <CalendarIcon className="h-4 w-4 text-blue-600" />
                            {formatDate(supplierData?.created_at)}
                        </p>
                    </div>
                </CardContent>
            </Card>

            {/* Documents Section */}
            <Card className="shadow-md">
                <CardHeader className="bg-blue-600 text-white rounded-t-md">
                    <CardTitle>Documents</CardTitle>
                </CardHeader>
                <CardContent>
                    <Table className="min-w-full table-auto">
                        <TableHeader>
                            <TableRow>
                                <TableHead>Document Type</TableHead>
                                <TableHead>Link</TableHead>
                                <TableHead>Expiry Date</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            <TableRow>
                                <TableCell>Tax Registration</TableCell>
                                <TableCell>
                                    <a href={supplierData?.tax_registration_document} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                                        View Document
                                    </a>
                                </TableCell>
                                <TableCell>N/A</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Business Registration License</TableCell>
                                <TableCell>
                                    <a href={supplierData?.business_registration_license_document} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                                        View Document
                                    </a>
                                </TableCell>
                                <TableCell>{formatDate(supplierData?.business_registration_license_expire_date)}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Business Permits</TableCell>
                                <TableCell>
                                    <a href={supplierData?.business_permits_document} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                                        View Document
                                    </a>
                                </TableCell>
                                <TableCell>{formatDate(supplierData?.business_permits_expire_date)}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Other Legal Document</TableCell>
                                <TableCell>
                                    <a href={supplierData?.other_legal_document} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                                        View Document
                                    </a>
                                </TableCell>
                                <TableCell>N/A</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>

            {/* Shipping Information */}
            <Card className="shadow-md">
                <CardHeader className="bg-blue-600 text-white rounded-t-md">
                    <CardTitle>Shipping Information</CardTitle>
                </CardHeader>
                <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <h3 className="font-semibold">Region</h3>
                        <p>{supplierData?.shipping_region}</p>
                    </div>
                    <div>
                        <h3 className="font-semibold">City</h3>
                        <p>{supplierData?.shipping_city}</p>
                    </div>
                    <div>
                        <h3 className="font-semibold">Woreda</h3>
                        <p>{supplierData?.shipping_woreda}</p>
                    </div>
                    <div>
                        <h3 className="font-semibold">Kebele</h3>
                        <p>{supplierData?.shipping_keble}</p>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}

export default BusinessDetail
