import * as React from "react";
import { updateSupplierStatus } from '../../api/AdminSupplier';

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setSupplierUpdateStatus } from "@/store/uiSlice";
import { updateBusinessStatus } from "@/api/AdminBusiness";

export default function BusinessUpdateStates({ supplier }) {
    console.log(supplier)
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [status, setStatus] = React.useState('Pending');
    console.log(status)

    const handleStatusChange = (value) => {
        setStatus(value);
    };

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        const data = {
            user_hash: supplier?.user_hash,
            status: status,
        };

        try {
            const response = await updateBusinessStatus(data);
            console.log('Supplier updated successfully:', response);
            alert('Supplier status updated successfully');
            navigate("/business");
            window.location.reload();
        } catch (error) {
            console.error('Error updating supplier:', error);
        }
    };


    return (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50">
            <Card className="w-[350px]">
                <CardHeader>
                    <CardTitle> Update Supplier status</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="">
                        <CardHeader className="flex flex-col gap-3">
                            <CardTitle className="text-xl"> Supplier info</CardTitle>
                            <CardDescription className="flex justify-between">
                                <span className="text-black">email</span> {supplier.email}
                            </CardDescription>

                            <CardDescription className="flex justify-between">
                                <span className="text-black">Fill All Information</span>
                                <Badge className={`px-4 py-1  ${supplier.business_permits_document ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'}`} variant="outline">
                                    {supplier?.business_permits_document ? 'Yes' : 'No'}
                                </Badge>
                            </CardDescription>
                        </CardHeader>
                    </div>
                    <form onSubmit={handleFormSubmit}>
                        <div className="grid w-full items-center gap-4">
                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="status">Status</Label>
                                <Select
                                    value={status}
                                    onValueChange={handleStatusChange}
                                    defaultValue="Select"
                                >
                                    <SelectTrigger id="status">
                                        <SelectValue placeholder="Select" />
                                    </SelectTrigger>
                                    <SelectContent position="popper">
                                        <SelectItem value="Pending">Pending</SelectItem>
                                        <SelectItem value="approve">Approve</SelectItem>
                                        <SelectItem value="rejected">Rejected</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>

                            <div>
                                <Label>Send message to supplier</Label>
                                <Input
                                    type="text"
                                    placeholder="Message"
                                />
                            </div>
                        </div>
                        <CardFooter className="flex justify-between mt-8">
                            <Button onClick={() => dispatch(setSupplierUpdateStatus(false))} variant="outline">Cancel</Button>
                            <Button type="submit">Update</Button>
                        </CardFooter>
                    </form>
                </CardContent>
            </Card>
        </div>
    )
}
