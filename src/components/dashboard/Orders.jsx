import { AllOrder } from "@/api/AdminOrder"
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
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setOrderStatus } from "@/store/uiSlice";
import OrderStatusUpdate from "../model/OrderStatusUpdate";
const truncateString = (str, maxLength) => {
    if (str?.length <= maxLength) return str;
    return str?.slice(0, maxLength) + '...';
};
export default function Component() {
    // get all orders
    const navigate = useNavigate();
    const dispatch = useDispatch()
    const [orders, setOrders] = useState([])
    const [selectOrder, setSelectOrder] = useState(null)
    const orderStatus = useSelector((state) => state.ui.orderStatus)
    useEffect(() => {
        const getALLOrders = async () => {
            const response = await AllOrder()
            console.log(response.data.data)
            setOrders(response.data.data)
        }
        getALLOrders()
    }, [])
    // function to update order status
    const handleOrderStatus = async (order) => {
        setSelectOrder(order)
        dispatch(setOrderStatus(true))
    }
    return (
        <Card className="w-[21em] lg:w-full">
            <CardHeader>
                <CardTitle>Orders</CardTitle>
                <CardDescription className="text-lg p-3">
                    Order List
                </CardDescription>
            </CardHeader>
            <CardContent>
                <Table>
                    {orderStatus && <OrderStatusUpdate order={selectOrder} />}
                    <TableHeader>
                        <TableRow>
                            <TableHead className="whitespace-nowrap">Product Owner</TableHead>
                            <TableHead className="md:table-cell whitespace-nowrap items-center">
                                Total Amount
                            </TableHead>
                            <TableHead className="whitespace-nowrap">Order Status</TableHead>
                            <TableHead className="md:table-cell whitespace-nowrap">Order date</TableHead>
                            <TableHead>
                                <span className="">Actions</span>
                            </TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {orders?.map((order, index) => (
                            <TableRow key={index}>
                                <TableCell className="font-medium flex items-center">
                                    <div className="flex items-center justify-center cursor-pointer text-center">
                                        <img className="rounded-full w-10 h-10 mr-2" src="https://raw.githubusercontent.com/cruip/vuejs-admin-dashboard-template/main/src/images/user-36-05.jpg" alt="Owner" />
                                        <span className="font-medium whitespace-nowrap">
                                            muhammed adem
                                        </span>
                                    </div>
                                </TableCell>
                                <TableCell>ETB {order.total_amount}</TableCell>

                                <TableCell className="items-center">
                                    <Badge
                                        className={`p-2 rounded-full ${order.status === 'pending'
                                            ? 'bg-yellow-50 text-yellow-700'
                                            : order.status === 'rejected'
                                                ? 'bg-red-50 text-red-700'
                                                : 'bg-green-50 text-green-700'
                                            }`}
                                        variant="outline"
                                    >
                                        {order?.status == "" ? "Pending" : order?.status}
                                    </Badge>
                                </TableCell>

                                <TableCell className=" items-center whitespace-nowrap">23-03-2023</TableCell>

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
                                            <DropdownMenuItem onClick={() => navigate(`/order/details/${order.order_id}`)}>
                                                <Button variant="outline">View Details</Button>
                                            </DropdownMenuItem>
                                            <DropdownMenuItem onClick={() => handleOrderStatus(order)}>
                                                <Button variant="outline"> Update</Button>
                                            </DropdownMenuItem>
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
                    Showing <strong>1-10</strong> of <strong>{orders.length}</strong> orders
                </div>
            </CardFooter>
        </Card>
    )
}
