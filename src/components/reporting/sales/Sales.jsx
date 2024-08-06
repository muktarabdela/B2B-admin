import {
    Activity,
    Users,
    CreditCard,
    DollarSign,
} from "lucide-react"

import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Link } from "react-router-dom"
import SalesByProductCategory from "./SalesByProductCategory"
import Transactions from "./SalesByUserType"
import { useDispatch, useSelector } from "react-redux"
import { fetchSalesReport } from "@/store/reportSlice"
import { useEffect } from "react"
import Orders from '../../dashboard/Orders';

export function Sales() {
    const dispatch = useDispatch();
    const { salesReport, loading, error } = useSelector((state) => state.report);

    useEffect(() => {
        dispatch(fetchSalesReport());
    }, [dispatch]);

    if (loading) {
        return <div>Loading...</div>;
    }
    if (error) {
        return <div>Error: {error}</div>;
    }
    if (!salesReport) {
        return <div className='text-center h-screen'>No data available</div>;
    }

    const {
        total_sales_from_business,
        total_completed_orders_from_business,
        completed_orders_list_from_business,
        sales_by_category_from_business,
        sales_by_region_from_business,
        total_profit_from_business,
        total_sales_from_personal,
        total_completed_orders_from_personal,
        completed_orders_list_from_personal,
        sales_by_category_from_personal,
        sales_by_region_from_personal,
        total_profit_from_personal,
    } = salesReport.specific_time_report;
    // change this total_profit_from_business negative number to posetive
    const total_profit_from_business_positive = total_profit_from_business * -1
    return (
        <div className="flex min-h-screen w-full flex-col max-w-6xl mx-auto mr-10 mt-20">
            <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
                <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">Total Sales </CardTitle>
                            <DollarSign className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">{total_profit_from_business_positive} ETB</div>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">Total Orders </CardTitle>
                            <CreditCard className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">{total_completed_orders_from_business}</div>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">Total Profit </CardTitle>
                            <DollarSign className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">{total_profit_from_business} ETB</div>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">Sales by Region (Business)</CardTitle>
                            <Activity className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            {sales_by_region_from_business.map((region, index) => (
                                <div key={index} className="text-sm">
                                    <div className="font-medium">{region.shipping_region}</div>
                                    <div>Total Orders: {region.total_completed_orders}</div>
                                    <div>Total Amount: {region.total_completed_amount}</div>
                                </div>
                            ))}
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader>
                            <CardTitle>Sales by Category </CardTitle>
                        </CardHeader>
                        <CardContent className="grid gap-8">
                            {sales_by_category_from_business.map((category, index) => (
                                <div key={index} className="flex items-center gap-4">
                                    <div className="grid gap-1">
                                        <p className="text-sm font-medium leading-none">
                                            {category.main_category}
                                        </p>
                                        <p className="text-sm text-muted-foreground">
                                            Quantity Sold: {category.total_quantity_sold}
                                        </p>
                                        <p className="text-sm text-muted-foreground">
                                            Products Sold: {category.total_products_sold}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </CardContent>
                    </Card>
                </div>
                <div className="lg:flex gap-6">
                    <Orders />
                    <Card className="w-[21em]  mx-auto">
                        <CardHeader>
                            <CardTitle>Recent Sales </CardTitle>
                        </CardHeader>
                        <CardContent className="grid gap-8">
                            {completed_orders_list_from_business.map((order, index) => (
                                <div key={index} className="flex items-center gap-4">
                                    <Avatar className="hidden h-9 w-9 sm:flex">
                                        <AvatarImage src="/avatars/01.png" alt="Avatar" />
                                        <AvatarFallback>OM</AvatarFallback>
                                    </Avatar>
                                    <div className="grid gap-1">
                                        <p className="text-sm font-medium leading-none">
                                            Order ID: {order.order_id}
                                        </p>
                                        <p className="text-sm text-muted-foreground">
                                            Date: {order.order_date}
                                        </p>
                                    </div>
                                    <div className="ml-auto font-medium">{order.total_amount}</div>
                                </div>
                            ))}
                        </CardContent>
                    </Card>

                </div>
            </main>
        </div>
    )
}

export default Sales;
